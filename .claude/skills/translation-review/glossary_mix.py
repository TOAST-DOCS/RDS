"""용어집 영어 역어와 대소문자만 다른 표기가 한 파일에 함께 있는 곳을 찾는다.

사용: python3 glossary_mix.py <ref> [경로 접두사...]   (기본 en/)
출력: 파일<TAB>용어집 표기<TAB>용어집 표기 수<TAB>다른 표기:수, ...
base 와 head 결과를 diff 하면 이번 변경이 새로 만든 혼재만 남는다.
"""
import re
import subprocess
import sys


def git(*args):
    return subprocess.run(["git", *args], capture_output=True, text=True, check=True).stdout


def terms(ref):
    out = set()
    for line in git("show", f"{ref}:.docs-glossary.md").splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if not line.startswith("| ") or len(cells) < 3 or cells[0] in ("한글", "---"):
            continue
        en = cells[1]
        # 한 낱말 용어(Backup, Storage)는 문장 중간 소문자가 정상이라 잡음만 늘어난다
        if len(en.split()) >= 2:
            out.add(en)
    return out


def main():
    ref, prefixes = sys.argv[1], sys.argv[2:] or ["en/"]
    pats = {t: re.compile(r"(?<![\w-])" + re.escape(t) + r"(?![\w-])", re.I) for t in terms(ref)}
    for path in git("ls-tree", "-r", "--name-only", ref, "--", *prefixes).split():
        if not path.endswith(".md"):
            continue
        text = git("show", f"{ref}:{path}")
        for term, pat in sorted(pats.items()):
            forms = {}
            for m in pat.findall(text):
                forms[m] = forms.get(m, 0) + 1
            exact = forms.pop(term, 0)
            if exact and forms:
                others = ", ".join(f"{f}:{n}" for f, n in sorted(forms.items()))
                print(f"{path}\t{term}\t{exact}\t{others}")


if __name__ == "__main__":
    main()
