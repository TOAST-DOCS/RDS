const fs = require('fs');
const Handlebars = require('handlebars');
require('handlebars-helpers')();

const languages = ['ko', 'en', 'ja'];
const docs = [
    'analysis',
    'api-guide-v2.0',
    'api-guide-v3.0',
    'api-guide-v4.0',
    'backup-and-restore',
    'db-engine',
    'db-instance',
    'db-security-group',
    'notification',
    'overview',
    'parameter-group',
    'release-notes',
    'server-dashboard'
];

// 명령줄 인자 확인
const args = process.argv.slice(2);
const isPPP = args.length > 0 && args[0] === 'ppp';

// PPP 환경 목록
const pppEnvs = ['ninc', 'ngovc', 'ngoic', 'ngsc'];

// 엔진/클라우드 환경별로 원본이 나뉜 문서 목록
// 릴리스 노트와 nc-rds 코드 기반으로 생성되는 API 가이드가 해당
const perEngineDocs = ['release-notes', 'api-guide-v3.0', 'api-guide-v4.0'];

// 전체 설정 목록
const allConfigs = [
    {
        engine: 'mysql',
        env: 'public',
        exclusionDocs: []
    },
    {
        engine: 'mysql',
        env: 'gov',
        exclusionDocs: []
    },
    {
        engine: 'mysql',
        env: 'ncgn',
        exclusionDocs: []
    },
    {
        engine: 'mysql',
        env: 'ninc',
        exclusionDocs: ['api-guide-v2.0']
    },
    {
        engine: 'mysql',
        env: 'ngovc',
        exclusionDocs: ['api-guide-v2.0']
    },
    {
        engine: 'mysql',
        env: 'ngoic',
        exclusionDocs: ['api-guide-v2.0']
    },
    {
        engine: 'mysql',
        env: 'ngsc',
        exclusionDocs: ['api-guide-v2.0']
    },
    {
        engine: 'mariadb',
        env: 'public',
        exclusionDocs: []
    },
    {
        engine: 'mariadb',
        env: 'gov',
        exclusionDocs: []
    }
];

// 매개변수에 따라 필터링
const configs = isPPP 
    ? allConfigs.filter(config => pppEnvs.includes(config.env))
    : allConfigs.filter(config => !pppEnvs.includes(config.env));

for (let config of configs) {
    const context = JSON.parse(fs.readFileSync(`config/${config.engine}-${config.env}.json`, 'utf-8'));

    for (let language of languages) {
        for (let doc of docs) {
            if (config.exclusionDocs.indexOf(doc) >= 0) {
                continue;
            }

            // zh 는 en 템플릿을 그대로 사용
            const langDir = language === 'zh' ? 'en' : language;

            const isPerEngine = perEngineDocs.indexOf(doc) >= 0;
            const suffix = config.env === 'public' ? '' : `_${config.env}`;
            const templatePath = isPerEngine
                ? `${langDir}/${doc}_${config.engine}${suffix}.md`
                : `${langDir}/${doc}_template.md`;

            // 번역되지 않은 원본은 건너뜀
            if (!fs.existsSync(templatePath)) {
                continue;
            }

            const template = fs.readFileSync(templatePath, 'utf-8');

            const fileName = config.env === 'public' ? `${doc}.md` : `${doc}-${config.env}.md`;
            const compiled = Handlebars.compile(template);
            let result = compiled(context);

            // 환경별 원본은 링크도 이미 환경에 맞게 들어 있음
            if(config.env !== 'public' && !isPerEngine) {
                // [text](link-menu/) 혹은 [text](link-menu/#tag) 형식을 [text](link-menu-env/) 형식으로 교체
                result = result.replace(/\[(.*)]\((?!.*png)(?!#)(?!http)([^)]*?)(\/#[^)]*|\/)\)/g,`[$1]($2-${config.env}$3)`);
            }

            fs.mkdirSync(`${config.engine}/${language}`, { recursive: true });
            fs.writeFileSync(`${config.engine}/${language}/${fileName}`, result);

            console.log(`${config.engine}/${language}/${fileName} created`);
        }
    }
}
