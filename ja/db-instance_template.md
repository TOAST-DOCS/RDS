<!-- machine_translated: true -->

<!-- pre-align:aligned sig=6567c272c6dd -->

<a id="database-rds-for-enginepascalcase-db-instance"></a>
## Database > RDS for {{engine.pascalCase}} > DBインスタンス { #database-rds-for-enginepascalcase-db-instance }

<a id="db-instance"></a>
## DBインスタンス { #db-instance }

DBインスタンスは仮想機器とインストールされた{{engine.pascalCase}}を包括する概念で、 RDS for {{engine.pascalCase}}が提供する{{engine.pascalCase}}の単位です。
DBインスタンスのOSに直接アクセスすることはできず、DBインスタンス作成時に入力したポートを介してデータベースにのみアクセスできます。使用できるポート範囲には以下のような制約事項があります。

DBインスタンスは、顧客が付与する名前と自動的に付与される32バイトのIDで識別されます。
DBインスタンス名は下記のような制約事項があります。

* DBインスタンス名はリージョンごとに一意でなければなりません。
* DBインスタンス名は1～100文字の間の英字、数字、一部の記号(-, _, .)のみ使用でき、最初の文字は英字のみ使用できます。

!!! tip "ヒント"
    2025年7月のメンテナンス以降、高可用性DBインスタンスはPrimaryだけでなくStandbyの名前も入力するように変更されました。Standbyの名前にもPrimaryと同じ制約事項が適用され、PrimaryとStandbyの名前は互いに異なる必要があります。メンテナンス以前に作成したDBインスタンスは、StandbyとPrimaryの名前が同じになっています。

<a id="create-db-instance"></a>
## DBインスタンス作成 { #create-db-instance }

下記の設定でDBインスタンスを作成できます。

<a id="availability-zone"></a>
### アベイラビリティゾーン { #availability-zone }

NHN Cloudは、物理的なハードウェアの問題で生じる障害に備えるため、システム全体を複数のアベイラビリティゾーンに分けています。このアベイラビリティゾーンごとに、ストレージシステム、ネットワークスイッチ、ラック、電源装置がすべて別々に構成されています。1つのアベイラビリティゾーン内で起こる障害は他のアベイラビリティゾーンに影響を与えないため、サービス全体の可用性が高くなります。DBインスタンスを複数のアベイラビリティゾーンに分けて構築すれば、サービスの可用性をさらに高めることができます。複数のアベイラビリティゾーンに分散して作成されたDBインスタンス同士でネットワーク通信が可能で、この時発生するネットワーク使用費用は請求されません。

!!! danger "注意"
    すでに作成した DB インスタンスの Availability Zone は変更することはできません。

<a id="db-engine"></a>
### DBエンジン { #db-engine }

以下に記載されているバージョンを使用できます。新規 DB インスタンスの作成および Read Replica の追加は、メジャーバージョンごとに上位 7 つのマイナーバージョンまでのみサポートされます。
{{#if (eq engine.lowerCase "mysql")}}
MySQL 8.0.34 未満のバージョンは、MySQL LTS サポートポリシーに従いサポートが終了しました。該当バージョンの DB インスタンスは、最新バージョンへのアップグレードをお勧めします。

| バージョン                | 備考                                    |
|----------------------|---------------------------------------|
| <strong>8.4</strong> |                                       |
| MySQL 8.4.9          |                                       |
| MySQL 8.4.8          |                                       |
| MySQL 8.4.7          |                                       |
| MySQL 8.4.6          |                                       |
| MySQL 8.4.5          |                                       |
| <strong>8.0</strong> |                                       |
| MySQL 8.0.44         |                                       |
| MySQL 8.0.43         |                                       |
| MySQL 8.0.42         |                                       |
| MySQL 8.0.41         |                                       |
| MySQL 8.0.40         |                                       |
| MySQL 8.0.36         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| MySQL 8.0.35         | 新規作成またはRead Replicaの追加はできません。  |
| MySQL 8.0.34         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| MySQL 8.0.33         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| MySQL 8.0.32         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| MySQL 8.0.28         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| MySQL 8.0.23         | 新規作成またはRead Replicaの追加はできません。  |
| MySQL 8.0.18         | 新規に作成したり、Read Replica を追加したりすることはできません。  |
| <strong>5.7</strong> |                                       |
| MySQL 5.7.37         |                                       |
| MySQL 5.7.33         | 外部のバックアップファイルからDBインスタンスを復元することはできません。 |
{{#if (eq env "public")}}
| MySQL 5.7.26         |                                       |
| MySQL 5.7.19         |                                       |
| MySQL 5.7.15         |                                       |
| <strong>5.6</strong> |                                       |
| MySQL 5.6.33         | サポートが終了したバージョンです。                     |
{{/if}}

DBエンジンの場合、作成後、コンソールの修正機能でバージョンアップが可能です。
DBエンジンの詳細は[DBエンジン](db-engine/)で確認できます。
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}

| バージョン                  | 備考 |
|------------------------|----|
| <strong>11.8</strong>  |    |
| MariaDB 11.8.8         |    |
| MariaDB 11.8.6         |    |
| <strong>11.4</strong>  |    |
| MariaDB 11.4.14        |    |
| MariaDB 11.4.10        |    |
| MariaDB 11.4.7         |    |
| <strong>10.11</strong> |    |
| MariaDB 10.11.18       |    |
| MariaDB 10.11.16       |    |
| MariaDB 10.11.13       |    |
| MariaDB 10.11.8        |    |
| MariaDB 10.11.7        |    |
| <strong>10.6</strong>  |    |
| MariaDB 10.6.25        | 新規に作成したり、Read Replica を追加したりすることはできません。 |
| MariaDB 10.6.22        | 新規に作成したり、Read Replica を追加したりすることはできません。 |
| MariaDB 10.6.16        | 新規に作成したり、Read Replica を追加したりすることはできません。 |
| MariaDB 10.6.12        | 新規に作成したり、Read Replica を追加したりすることはできません。 |
| MariaDB 10.6.11        | 新規に作成したり、Read Replica を追加したりすることはできません。 |
| <strong>10.3</strong>  |    |
| MariaDB 10.3.30        | 新規に作成したり、Read Replica を追加したりすることはできません。 |

DBエンジンの詳細は[DBエンジン](db-engine/)で確認できます。
{{/if}}

<a id="db-instance-type"></a>
### DBインスタンスタイプ { #db-instance-type }

DBインスタンスはタイプごとに異なるCPUコア数とメモリ容量を持っています。
DBインスタンス作成時、データベースのワークロードに応じて適切なDBインスタンスタイプを選択する必要があります。

| タイプ | 説明                                                    |
|-----|-------------------------------------------------------|
| m2  | CPUとメモリをバランスよく設定したタイプです。                              |
| c2  | CPUのパフォーマンスを高く設定したインスタンスタイプです。                        |
| r2  | 他のリソースに比べてメモリの使用量が多い場合に使用できます。                        |
| x1  | 高スペックのCPUとメモリをサポートするタイプです。高性能が必要なサービスやアプリケーションに使用します。 |

作成済みのDBインスタンスのタイプはコンソールから簡単に変更できます。

!!! danger "注意"
    既に作成した DB インスタンスのタイプを変更すると、DB インスタンスが停止するため、数分間サービスが中断されます。

<a id="data-storage"></a>
### データストレージ { #data-storage }

データストレージにデータベースのデータファイルを保存します。DBインスタンスは、HDD、SSDの2種類のデータストレージタイプをサポートします。データストレージの種類によって性能と価格が異なるため、データベースのワークロードに応じて適切なタイプを選択する必要があります。データストレージは20GB～2TBで作成できます。

!!! danger "注意"
    作成済みの DB インスタンスのデータストレージタイプは変更することはできません。

!!! tip "ヒント"
    データストレージを 2TB 以上使用する場合は、NHN Cloud サポートにお問い合わせください。

以下の作業は、データストレージのI/O使用率が高くなるため、進行中にDBインスタンスの性能が低下する可能性があります。

* 単一 DB インスタンスのバックアップ
* 単一 DB インスタンスの高可用性構成
* Read Replica の作成
* Read Replica の再構築
* Standby の再構築
* 特定時点への復元
* 単一 DB インスタンスからバックアップ後、オブジェクトストレージへのバックアップファイルエクスポート

<a id="high-availability"></a>
### 高可用性 { #high-availability }

高可用性 DB インスタンスは、可用性とデータ耐久性を高め、障害を許容するデータベースを提供します。高可用性 DB インスタンスは Primary と Standby で構成され、それぞれ異なる Availability Zone に作成されます。Standby は障害に備えた DB インスタンスであり、通常時は使用できません。高可用性 DB インスタンスでは Standby でバックアップが実行されるため、バックアップによるパフォーマンスの低下を回避できます。高可用性 DB インスタンスが提供する各種機能については、[高可用性 DB インスタンス](db-instance/#ha-db-instance)を参照してください。

<a id="network"></a>
### ネットワーク { #network }

DBインスタンスに接続するVPCサブネットを選択する必要があります。同じサブネットに接続されたComputeサービスのインスタンス間では、別途のFloating IPなしで通信することができ、ネットワークトラフィックに対する費用が請求されません。 DBインスタンスは基本的にすべてのネットワークアクセスを遮断するため、接続を希望する場合は、DBセキュリティグループを適用する必要があります。

!!! danger "注意"
    作成済みの DB インスタンスのサブネットは変更することはできません。

<a id="floating-ip"></a>
### Floating IP { #floating-ip }

外部からDBインスタンスにアクセスするには、Floating IPをDBインスタンスに接続する必要があります。Internet Gatewayが接続されたサブネットを接続する場合のみFloating IPを作成できます。Floating IPは使用と同時に課金され、これとは別にFloating IPを介したインターネット方向のトラフィックが発生する場合は別途課金されます。

<a id="parameter-group"></a>
### パラメータグループ { #parameter-group }

パラメータグループは、DBインスタンスにインストールされたデータベースを設定できるパラメータの集合です。DBインスタンス生成時に必ず一つのパラメータグループを選択しなければなりません。パラメータグループは、作成後も自由に変更できます。パラメータグループの詳しい説明は[パラメータグループ](parameter-group/)の項目を参照してください。

<a id="db-security-group"></a>
### DBセキュリティグループ { #db-security-group }

DBセキュリティグループは、外部からの侵入に備えて接続を制限するために使用します。送受信トラフィックに対して特定のポート範囲あるいはデータベースポートに対してアクセスを許可できます。DBインスタンスに複数のDBセキュリティグループを適用できます。DBセキュリティグループの詳しい説明は[DBセキュリティグループ](db-security-group/)を参照してください。

<a id="backup"></a>
### バックアップ { #backup }

DBインスタンスのデータベースを定期的にバックアップするよう設定したり、コンソールから任意のタイミングでバックアップを作成したりできます。バックアップの実行中はパフォーマンスが低下する場合があります。サービスへの影響を抑えるには、サービスの負荷が少ない時間帯にバックアップすることをお勧めします。バックアップによるパフォーマンスの低下を避けたい場合は、高可用性構成を使用するか、直前のバックアップ以降のデータの増分のみをバックアップするか、Read Replica でバックアップを実行できます。バックアップファイルは内部バックアップストレージに保存され、バックアップ容量に応じて課金されます。必要に応じて NHN Cloud のオブジェクトストレージにエクスポートできます。予期しない障害に備えて、定期的にバックアップを実行するよう設定することをお勧めします。バックアップの詳細については、[バックアップと復元](backup-and-restore/) を参照してください。

<a id="maintenance"></a>
### メンテナンス { #maintenance }

メンテナンス機能を使用すると、DBインスタンスの様々な変更作業を任意の時間帯に実行できます。DBインスタンスの修正、DBエンジンバージョンのアップグレード、DBインスタンスのOSのアップグレードなどの作業は再起動が必要で、ダウンタイムが発生する可能性があります。メンテナンス期間を設定すると、これらの作業をサービス負荷が少ない時間帯に実行できます。

<a id="maintenance-duration"></a>
#### メンテナンス期間

DBインスタンスの作成または修正時にメンテナンス期間を設定できます。メンテナンス期間を設定しない場合、22:00～06:00の間の30分がランダムに自動割り当てられます。メンテナンス期間は自動バックアップ時間と重複できません。

!!! tip "ヒント"
    メンテナンス期間は、メンテナンス開始曜日、メンテナンス開始時刻、メンテナンスウィンドウ (30 分単位) で構成されます。

<a id="maintenance-task"></a>
#### メンテナンス作業

メンテナンス作業は、ユーザーメンテナンス作業とProviderメンテナンス作業に区分されます。

**ユーザーメンテナンス作業**

ユーザーが直接実行を予約できる作業です。

* DBインスタンスの修正(DBインスタンス仕様変更、ポート変更、パラメータグループ変更など)
* DBエンジンバージョンのアップグレード
* DBインスタンスOSアップグレード

**Providerメンテナンス作業**

NHN Cloudが提供するメンテナンス作業です。

* パラメータグループ変更事項の適用
* ハイパーバイザー点検のためのマイグレーション

<a id="maintenance-execution-time"></a>
#### メンテナンス適用時点

メンテナンス作業実行時、適用時点を選択できます。

* **即時適用**: リクエスト後すぐにメンテナンス作業を実行します。
* **次回のメンテナンス期間に適用**: 次回のメンテナンス期間に作業を実行します。

<a id="maintenance-status"></a>
#### メンテナンス状態

DBインスタンス一覧で各インスタンスのメンテナンス状態を確認できます。

| 状態     | 説明                                    |
|---------|----------------------------------------|
| なし      | 予約及び保留中のメンテナンス作業がありません。             |
| 次回適用   | ユーザーメンテナンス作業が次回のメンテナンス期間に実行予定です。   |
| 適用中   | メンテナンス作業が進行中です。                     |
| 必須     | 必須Providerメンテナンス作業が保留中です。         |
| 使用可能   | 必須ではないProviderメンテナンス作業が保留/準備中です。 |

!!! tip "ヒント"
    高可用性 DB インスタンスの Standby には、メンテナンス状態は表示されません。

<a id="maintenance-tab"></a>
#### メンテナンスタブ

DBインスタンス詳細画面のメンテナンスタブで次の情報を確認できます。

* メンテナンス開始曜日及び期間
* 次回のメンテナンス期間
* メンテナンス状態
* 準備中のメンテナンス作業リスト(次回のメンテナンス期間に実行される作業)
* 保留中のメンテナンス作業リスト

準備中のメンテナンス作業は、保留/削除ボタンを使用してメンテナンス期間から除外できます。保留中のProviderメンテナンス作業は、**即時適用**または**次回のメンテナンス期間に適用**を選択して手動で適用できます。

<a id="maintenance-execution-order"></a>
#### 作業実行順序

メンテナンス期間内の全ての作業は、登録順序に従って順次実行されます。ただし、有効期限が過ぎた必須メンテナンス作業は最初に実行されます。メンテナンス期間内に実行されなかった作業は、次回のメンテナンス期間に再度実行されます。

!!! tip "ヒント"
    自動バックアップおよび DB インスタンスが「作業中」の状態でメンテナンス期間が開始され、メンテナンス時間が繰り返し延期された場合、該当のメンテナンスは一旦スキップされ、次のメンテナンス期間に実行されます。メンテナンス作業がスキップされると、イベントが生成されます。

<a id="default-notification"></a>
### 基本通知 { #default-notification }

DBインスタンス作成時、基本通知を設定できます。基本通知を設定すると、`{DBインスタンス名}-default`という名前で新しい通知グループが作成され、下記の通知項目が自動で設定されます。基本通知として作成された通知グループは自由に修正、削除できます。通知グループについての詳しい説明は[通知グループ](notification/)を参照してください。

| 項目                         | 比較方法  | しきい値          | 持続時間 |
|----------------------------|-------|---------------|------|
| CPU使用率                     | &gt;= | 80%           | 5分   |
| Storageの空き容量               | &lt;= | 5,120MB       | 5分   |
| Database Connection Status | &lt;= | 0             | 0分   |
| Storage使用量                 | &gt;= | 95%           | 5分   |
| ストレージ障害                    | &lt;= | 0             | 0分   |
| Connection Ratio           | &gt;= | 85%           | 5分   |
| メモリ使用量                     | &gt;= | 90%           | 5分   |
| Slow Query                 | &gt;= | 60 counts/min | 5分   |

<a id="deletion-protection"></a>
### 削除保護 { #deletion-protection }

削除保護を有効にすると、誤ってDBインスタンスが削除されないように保護できます。

<a id="db-instance-list"></a>
## DBインスタンスリスト { #db-instance-list }

コンソールで作成されたDBインスタンスを確認できます。DBインスタンスグループ単位でまとめて見たり、個別DBインスタンスで見ることができます。

![db-instance-list_ja]({{url.cdn}}/26.01.13/db-instance-list_ja.png)

❶ DBインスタンス画面モードを変更できます。
❷ボタンをクリックして、グループ内に属するDBインスタンスを展開したり、折りたたむことができます。
❸最近収集されたモニタリング指標を表示します。
❹現在の状態を見ることができます。
❺進行中の作業がある場合、スピナーが表示されます。
❻検索条件を変更できます。

DBインスタンスの状態は下記のような値で構成され、ユーザーの行為と現在の状態によって変更されます。

| 状態                | 説明                                              |
|-------------------|-------------------------------------------------|
| BEFORE_CREATE     | 作成前                                             |
| AVAILABLE         | 使用可能                                            |
| STORAGE_FULL      | 容量不足                                            |
| FAIL_TO_CREATE    | 作成失敗                                            |
| FAIL_TO_CONNECT   | 接続失敗                                            |
| REPLICATION_STOP  | 複製中断                                            |
| FAILOVER          | フェイルオーバー完了                                      |
| SHUTDOWN          | 停止した                                            |

変更できる検索条件は次のとおりです。

![db-instance-filter_ja]({{url.cdn}}/26.01.13/db-instance-filter_ja.png)

❶パラメータ変更事項適用が必要なDBインスタンスをフィルタリング条件で検索できます。

<a id="db-instance-details"></a>
## DBインスタンスの詳細 { #db-instance-details }

DBインスタンスを選択すると、詳細情報を見ることができます。

![db-instance-detail_ja]({{url.cdn}}/26.01.13/db-instance-detail_ja.png)

❶接続情報のドメインをクリックすると、IPアドレスを確認できるポップアップが表示されます。
❷ DBセキュリティグループをクリックすると、DBセキュリティルールを確認できるポップアップが表示されます。
❸パラメータグループをクリックすると、パラメータを確認できる画面に移動します。
❹マウスでドラッグ＆ドロップして詳細情報パネルの高さを調整できます。
❺詳細情報パネルの高さをあらかじめ指定した高さに調整できます。

<a id="access-information"></a>
### 接続情報 { #access-information }

DB インスタンスの作成時に内部ドメインが発行されます。内部ドメインは、ユーザー VPC サブネットに属する IP アドレスを指します。高可用性 DB インスタンスは、フェイルオーバーされて Standby が新しい Primary に変更されても、内部ドメインは変更されません。そのため、特別な理由がない限り、アプリケーションの接続情報には必ず内部ドメインを使用する必要があります。

Floating IPを作成した場合、外部ドメインを追加で発行します。外部ドメインはFloating IPのアドレスを指します。外部ドメインまたはFloating IPは外部からアクセスが可能なので、DBセキュリティグループのルールを適切に設定してDBインスタンスを保護する必要があります。

<a id="virtual-ip"></a>
### Virtual IP { #virtual-ip }


2025年5月のメンテナンス以降に作成した DB インスタンスは、VIP（virtual IP）をサポートします。VIP は、ユーザー VPC サブネットに属する IP アドレスを指します。高可用性 DB インスタンスでは、VIP は常に現時点の Primary を指します。アプリケーションの接続情報は、必ず VIP を直接使用するか、VIP を指す内部（VIP）ドメインを使用する必要があります。

2025年5月以前に作成した DB インスタンスは、NHN Cloud コンソールの **VIP追加** メニューをクリックして VIP を追加できます。VIP を追加すると、既存の内部ドメインと内部 (VIP) ドメインが併せて提供されます。ただし、フェイルオーバー時に VIP は Standby を指しますが、内部ドメインは場合によっては Standby を指さないことがあります。そのため、VIP を追加した場合は、必ずアプリケーションの接続情報が VIP または内部 (VIP) ドメインを使用するように変更する必要があります。

!!! tip "ヒント"
    2025年9月のメンテナンス以降、日本（東京）リージョンおよび一部の公共プロジェクトでは、VIPがサポートされなくなります。（異なるサブネットに属するインスタンスまたはDBインスタンスからVIPに接続することはできません。）
    VIPをサポートしない環境では、2025年5月のメンテナンス以降に作成されたVIPは削除されませんが、コンソールで確認することはできなくなります。

<a id="log"></a>
### ログ { #log }

DBインスタンスのログタブでは、各種ログファイルの閲覧や、ダウンロードを行うことができます。ログファイルは下記のように決められた設定でローテーションされます。一部のログファイルは、パラメータグループで有効または無効にできます。

| 項目             | ローテーション設定 | 変更するかどうか | 関連パラメータ                                                              |
|------------------|-----------|-------|------------------------------------------------------------------------|
| error.log        | 100MB 10個 | 固定  |                                                                        |
| slow_query.log   | 100MB 40個 | 固定  | `slow_query_log`                                                       |
| general_log.log  | 100MB 40個 | 固定  | `general_log`                                                          |
| server_audit.log | 20MB 30個 | 変更可能 | `server_audit_logging`<br />`server_audit_file_rotations`              | 
{{#if (eq engine.lowerCase "mysql")}}
| mysql-bin.xxxxxx | 5日      | 変更可能 | `binlog_expire_logs_seconds` (8.Xバージョン)<br />`expire_logs_days` (5.Xバージョン) |
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}
| mysql-bin.xxxxxx | 5日      | 変更可能 | `binlog_expire_logs_seconds` |
{{/if}}

![db-instance-detail-log_ja]({{url.cdn}}/26.01.13/db-instance-detail-log_ja.png)

❶ **ログ表示**をクリックすると、ログファイルの内容を確認できるポップアップ画面が表示されます。最大65,535Bytesのログを確認できます。
❷ **インポート**をクリックすると、DBインスタンスのログファイルをダウンロードするようにリクエストします。
❸ダウンロードの準備が整うと、**ダウンロード**ボタンが表示されます。クリックすると、ログをダウンロードします。

!!! danger "注意"
    **[インポート]** をクリックすると、約 5 分間ログファイルがバックアップストレージにアップロードされ、ログファイルのサイズに応じてバックアップストレージの容量が課金されます。
    **[ダウンロード]** をクリックすると、ログファイルのサイズに応じてインターネットトラフィックが課金されます。

❹バイナリログ(binary log)の場合、2つの形式でダウンロードできます。**インポート**をクリックすると、バイナリログの形式を選択できるポップアップ画面が表示されます。

![db-instance-detail-log-bin_ja]({{url.cdn}}/24.03.12/db-instance-detail-log-bin_ja.png)

❺ mysqlbinlogユーティリティを利用してバイナリログ(binary log)をSQLファイルに変換してダウンロードする場合は選択します。

<a id="db-instance-details-maintenance"></a>
### メンテナンス { #db-instance-details-maintenance }

DBインスタンスの**メンテナンス**タブでは、メンテナンス設定及び状態を確認し、メンテナンス作業を管理できます。

![db-instance-detail-maintenance_ja]({{url.cdn}}/26.01.13/db-instance-detail-maintenance_ja.png)

<a id="db-instance-details-maintenance-maintenance-information"></a>
#### メンテナンス情報

メンテナンスタブ上部で現在のDBインスタンスのメンテナンス設定情報を確認できます。

| 項目              | 説明                                                                             |
|------------------|---------------------------------------------------------------------------------|
| メンテナンス開始曜日      | DBインスタンスに設定されたメンテナンス開始曜日です。                                                    |
| メンテナンス期間        | DBインスタンスに設定されたメンテナンス時間範囲です。                                                    |
| 次回のメンテナンス期間      | 次回にメンテナンス作業が実行される予定の日時です。                                                    |
| メンテナンス状態         | 現在のメンテナンス状態を示します。**なし**、**次回適用**、**適用中**、**必須**、**使用可能**のいずれかで表示されます。 |

!!! tip "ヒント"
    メンテナンス期間を設定していない場合でも、任意に割り当てられたメンテナンス期間を確認できます。

<a id="db-instance-details-maintenance-upcoming-maintenance"></a>
#### 準備中のメンテナンス

準備中のメンテナンスは、次回のメンテナンス期間に実行される予定の作業リストです。ユーザーがDBインスタンスの修正、DBエンジンバージョンのアップグレードなどの作業を実行する際に**次回のメンテナンス期間に適用**を選択すると、このリストに追加されます。

| 項目        | 説明                              |
|------------|----------------------------------|
| 説明         | メンテナンス作業に関する説明です。              |
| タイプ        | メンテナンス作業のタイプです。                 |
| 状態         | メンテナンス作業の現在の状態です。              |
| 必須かどうか     | 必須メンテナンス作業の有無を示します。           |
| 登録日時     | メンテナンス作業が登録された日時です。             |
| 強制適用日時   | 必須作業の場合、この日時以降には自動的に適用されます。 |

準備中のメンテナンス作業は、選択後**削除**または**保留**をクリックしてメンテナンス期間から除外できます。
削除されたユーザーメンテナンス作業はキャンセルされ、再度メンテナンス期間に適用するには該当の作業を再度実行する必要があります。
Providerメンテナンス作業は、保留中のメンテナンスリストに移動します。保留中のメンテナンスリストから再度準備中のメンテナンス作業に移動できます。

<a id="db-instance-details-maintenance-pending-maintenance"></a>
#### 保留中のメンテナンス

保留中のメンテナンスは、NHN Cloudが提供するProviderメンテナンス作業リストです。パラメータグループ変更事項の適用、ハイパーバイザー点検のためのマイグレーションなどの作業が含まれます。

| 項目        | 説明                              |
|------------|----------------------------------|
| 説明         | メンテナンス作業に関する説明です。              |
| タイプ        | メンテナンス作業のタイプです。                 |
| 状態         | メンテナンス作業の現在の状態です。              |
| 必須かどうか     | 必須メンテナンス作業の有無を示します。           |
| 強制適用日時   | 必須作業の場合、この日時以降には自動的に適用されます。 |

保留中のメンテナンス作業を選択した後、**次へ**をクリックして適用時点を選択できます。

**即時適用**: 選択したメンテナンス作業を即時実行します。**確認**をクリックするとすぐに実行されます。
![db-instance-detail-maintenance-immediately_ja]({{url.cdn}}/26.01.13/db-instance-detail-maintenance-immediately_ja.png)

**次回のメンテナンス期間に適用**: 選択したメンテナンス作業を次回のメンテナンス期間に実行します。**確認**をクリックすると準備中のメンテナンスリストに移動します。
![db-instance-detail-maintenance-schedule_ja]({{url.cdn}}/26.01.13/db-instance-detail-maintenance-schedule_ja.png)

!!! danger "注意"
    必須メンテナンス作業は、強制適用日時以前は適用タイミングを選択できますが、強制適用日時以降は自動的に次のメンテナンス期間に実行されます。

!!! tip "ヒント"
    メンテナンス作業の適用時に再起動が必要な場合、フェイルオーバーやバックアップなどの追加オプションを選択できるポップアップ画面が表示されます。高可用性 DB インスタンスは、フェイルオーバーを使用した再起動により、サービス中断時間を最小限に抑えることができます。

<a id="db-schema-and-users"></a>
### DBスキーマ&ユーザー { #db-schema-and-users }

DBインスタンスの**DBスキーマ＆ユーザー**タブでは、データベースに作成されたスキーマとユーザーの照会及び制御を行うことができます。

<a id="db-schema-and-users-db-schema-created"></a>
#### DBスキーマの作成

![db-instance-detail-schema_ja]({{url.cdn}}/26.01.13/db-instance-detail-schema_ja.png)

❶ **作成**をクリックすると、DBスキーマの名前を入力できるポップアップウィンドウが表示されます。
❷ DBスキーマ名を入力した後、**確認**をクリックしてDBスキーマを作成することができます。

DBスキーマ名には下記のような制約事項があります。

* 1～64文字の間のアルファベット、数字、_のみ使用でき、最初の文字は英字のみ使用できます。
* `information_schema`, `performance_schema`, `db_helper`, `sys`, `mysql`, `rds_maintenance`はDBスキーマ名として使用できません。

作成されたDBスキーマの名前は修正できません。

<a id="db-schema-and-users-db-schema-deleted"></a>
#### DBスキーマの削除

![db-instance-detail-schema-delete-ja]({{url.cdn}}/26.01.13/db-instance-detail-schema-delete-ja.png)

❶削除するDBスキーマを選択し、ドロップダウンメニューをクリックします。
❷ **削除**メニューをクリックすると、削除確認ポップアップ画面が表示されます。**確認**をクリックして削除をリクエストできます。

<a id="db-schema-and-users-create-a-user"></a>
#### ユーザーの作成

![db-instance-detail-user-create-ja]({{url.cdn}}/26.01.13/db-instance-detail-user-create-ja.png)

❶ **+作成**をクリックすると、ユーザー追加ポップアップ画面が表示されます。
❷ユーザーIDを入力します。

ユーザーIDには以下のような制約があります。

* 1～32文字の間の文字でなければなりません。
* `mysql.session`, `mysql.sys`, `mysql.infoschema`, `sqlgw`, `admin`, `etladm`, `alertman`, `prom`, `rds_admin`, `rds_mha`, `rds_repl`はユーザーIDとして使用できません。

❸ Passwordを入力します。
❹接続を許可するHost IPを入力します。`%`文字を利用すると、許可するHost IPを範囲として指定できます。例えば、`1.1.1.%`は、`1.1.1.0`~`1.1.1.255`の間のすべてのIPを意味します。
❺ユーザーに付与する権限を選択します。付与できる権限と説明は次のとおりです。

**READ**
* 照会権限を持っています。

```sql
GRANT SELECT, SHOW VIEW, PROCESS, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO '{user_id}'@'{host}';
GRANT SELECT ON `mysql`.* TO '{user_id}'@'{host}';
GRANT SELECT, EXECUTE ON `sys`.* TO '{user_id}'@'{host}';
GRANT SELECT ON `performance_schema`.* TO '{user_id}'@'{host}';
```

**CRUD**
* READ権限を含み、データを変更する権限を持っています。

```sql
GRANT INSERT, UPDATE, DELETE, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE ON *.* TO '{user_id}'@'{host}';
```

**DDL**
* CRUD権限を含み、DDLクエリを実行する権限を持っています。

```sql
GRANT CREATE, DROP, INDEX, ALTER, CREATE VIEW, REFERENCES, EVENT, ALTER ROUTINE, CREATE ROUTINE, TRIGGER, RELOAD ON *.* TO '{user_id}'@'{host}';
GRANT EXECUTE ON `mysql`.* TO '{user_id}'@'{host}';
```

**CUSTOM**
* 外部データベースのバックアップからDBインスタンスを復元した場合、データベースに存在する全てのユーザーはCUSTOM権限で表現されます。
* CUSTOM権限テンプレートにはどのような権限があるのか分かりません。
* CUSTOM権限テンプレートから他の権限テンプレートに変更した場合、再びCUSTOM権限テンプレートに変更することはできません。

{{#if (eq engine.lowerCase "mysql")}}
❻ユーザー認証に適用するプラグインを選択します。選択できるバージョン別プラグインは次のとおりです。

| 認証プラグイン               | サポートバージョン               |
|-----------------------|-------------------------|
| mysql_native_password | 8.4バージョン未満              |
| sha256_password       | 5.7.33バージョン以上8.0バージョン未満 |
| caching_sha2_password | 8.0バージョン以上              |

❼ DBインスタンスの接続暗号化オプションを選択します。

| TLS Option | 説明                                                             |
|------------|------------------------------------------------------------------|
| NONE       | 暗号化された接続を適用しません。                                              |
| SSL        | 暗号化された接続を適用します。                                                  |
| X509       | 暗号化された接続を適用し、接続時に証明書が必要です。接続に必要な証明書はコンソールからダウンロードできます。 | 

!!! tip "ヒント"
    ユーザー認証プラグインと TLS Option は MySQL 5.7.33 バージョン以降でサポートされています。

<a id="db-schema-and-users-download-authentication-certificate"></a>
#### 証明書のダウンロード

ユーザーアカウントのTLS OptionをX509に設定した場合、DBインスタンスに接続するには証明書が必要です。

![db-instance-detail-user-cert-ja]({{url.cdn}}/26.01.13/db-instance-detail-user-cert-ja.png)
![db-instance-detail-user-cert-down-ja]({{url.cdn}}/24.03.12/db-instance-detail-user-cert-down-ja.png)

❶証明書をダウンロードするDBインスタンスを選択します。
❷ドロップダウンメニューをクリックします。
❸ **証明書ダウンロード**をクリックすると、証明書をダウンロードできるポップアップ画面が表示されます。
❹ダウンロードするファイルの下部にある**インポート**をクリックします。
❺ダウンロードの準備ができると、**ダウンロード**ボタンが表示されます。クリックすると、証明書ファイルをダウンロードできます。

!!! danger "注意"
    **[インポート]** をクリックすると、約 5 分間、証明書ファイルがバックアップストレージにアップロードされ、証明書ファイルのサイズに応じてバックアップストレージの容量が課金されます。
    **[ダウンロード]** をクリックすると、証明書ファイルのサイズに応じてインターネットトラフィックが課金されます。
{{/if}}

<a id="db-schema-and-users-edit-users"></a>
#### ユーザーの修正

![db-instance-detail-user-modify-ja]({{url.cdn}}/26.01.13/db-instance-detail-user-modify-ja.png)

❶修正するユーザー行の**修正**をクリックすると、ユーザー情報を修正できるポップアップ画面が表示されます。
❷ Passwordを入力しないと変更されません。
❸ユーザー認証に適用するプラグインを変更するには、必ずPasswordを変更する必要があります。

<a id="db-schema-and-users-deleting-a-user"></a>
#### ユーザーの削除

![db-instance-detail-user-delete-ja]({{url.cdn}}/26.01.13/db-instance-detail-user-delete-ja.png)

❶削除するユーザーを選択し、ドロップダウンメニューをクリックします。
❷ **削除**をクリックすると、**削除確認**ポップアップ画面が表示されます。**確認**をクリックして削除をリクエストできます。

<a id="modify-db-instance"></a>
## DBインスタンスの修正 { #modify-db-instance }

コンソールを通じて作成されたDBインスタンスの様々な項目を簡単に変更できます。変更要求した項目は、順次DBインスタンスに適用されます。適用過程で再起動が必要な場合、すべての変更を適用した後、DBインスタンスを再起動します。変更不可能な項目と再起動が必要な項目は次のとおりです。

| 項目         | 変更可否 | 再起動が必要かどうか              |
|--------------|----------|-------------------------|
| アベイラビリティゾーン     | いいえ     |                         |
| DBエンジン      | はい       | はい                      |
| DBインスタンスタイプ | はい       | はい                      |
| データストレージ種類 | いいえ     |                         |
| 高可用性の有無     | はい       | いいえ                    |
| Ping間隔    | はい       | いいえ                    | 
| Ping方式       | はい        | いいえ                     |
| 名前         | はい       | いいえ                    |
| 説明         | はい       | いいえ                    |
| DBポート      | はい       | はい                      |
| VPCサブネット    | いいえ     |                         |
| Floating IP       | はい       | いいえ                    |
| パラメータグループ    | はい       | 変更されたパラメータの再起動するかどうかで決定 |
| DBセキュリティグループ   | はい       | いいえ                    |
| バックアップ設定      | はい       | いいえ                    |
| 自動ストレージ拡張  | はい        | いいえ                     |
| スキーマ&ユーザー制御 | はい       | いいえ                    |

高可用性DBインスタンスの場合、再起動が必要な項目の変更がある場合、安定性を高め、瞬断時間を減らすためにフェイルオーバーを利用した再起動機能を提供します。

![modify-ha-popup-ja]({{url.cdn}}/26.01.13/modify-ha-popup-ja.png)

❶ メンテナンス機能で **[次のメンテナンス期間に適用]** または **[即座に適用]** を選択して、DB インスタンスの変更を実行できます。
❷ フェイルオーバーを使用した再起動を使用しない場合、Primary と Standby に変更を順次適用した後、DB インスタンスを再起動します。詳細については、高可用性 DB インスタンスの[手動フェイルオーバー項目](db-instance/#manual-failover)を参照してください。

<a id="db-schema-direct-user-control"></a>
### DBスキーマ&ユーザー直接制御 { #db-schema-direct-user-control }

RDS for {{engine.pascalCase}}ではDBスキーマとユーザーを簡単に管理できるようにコンソールで管理機能を提供していますが、ユーザーが直接制御できるように設定する機能も提供しています。直接制御を使う場合、現在作成されている全てのユーザーに下記の権限を付与します。

```sql
GRANT CREATE,DROP,LOCK TABLES,REFERENCES,EVENT,ALTER,INDEX,INSERT,SELECT,UPDATE,DELETE,CREATE VIEW,SHOW VIEW,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,CREATE USER,PROCESS,RELOAD,REPLICATION SLAVE,REPLICATION CLIENT,SHOW DATABASES, CREATE TEMPORARY TABLES,TRIGGER ON *.* TO '{user_id}'@'{host}' WITH GRANT OPTION;
```

!!! danger "注意"
    直接制御の使用後、再度無効に変更した場合
    * 既に付与した権限は回収されません。この場合、コマンドを使用して DB スキーマやユーザーを追加すると、コンソールのデータと整合性が取れなくなる可能性があります。
    * ユーザーに付与された権限に関係なく、データベースに存在するすべてのユーザーは CUSTOM 権限で表示されます。

<a id="upgrade-db-instance-operating-system"></a>
## DBインスタンスOSアップグレード { #upgrade-db-instance-operating-system }
DBインスタンスOSアップグレードをサポートします。OSのアップグレードにより、セキュリティ脆弱性の解決やOSのEOL(end of life)に対応できます。 
OSアップグレードはサービス瞬断が発生するため注意が必要です。高可用性DBインスタンスはフェイルオーバーにより、サービス瞬断を最小限に抑えることができます。

現在のDBインスタンスのOS情報は、DBインスタンスの詳細画面で確認できます。
![db-instance-os-upgrade-ja.png]({{url.cdn}}/26.01.13/db-instance-os-upgrade-ja.png)

❶ DBインスタンスのOS情報を確認できます。
❷ OSがバージョンアップグレード対象である場合、**OSバージョンアップグレード**ボタンが表示されます。

OSバージョンアップグレードは、高可用性構成であるかどうかによって異なります。高可用性の場合は、フェイルオーバーを利用してOSバージョンアップグレードを実行します。高可用性ではない場合は、DBインスタンスを再起動してOSバージョンアップグレードを実行します。

単一DBインスタンスのOSバージョンアップグレードボタンをクリックすると、次のようなポップアップ画面が表示されます。
シングルDBインスタンスのOSバージョンアップグレード時にも、メンテナンス機能を使用できます。
![db-instance-os-upgrade-single-popup-ja.png]({{url.cdn}}/26.01.13/db-instance-os-upgrade-simple-popup-ja.png)

高可用性DBインスタンスのOSバージョンアップグレードボタンをクリックすると、次のようなポップアップ画面が表示されます。詳細については、高可用性DBインスタンスの[手動フェイルオーバー項目](db-instance/#manual-failover)を参照してください。
![os-upgrade-ha-popup-ja.png]({{url.cdn}}/26.01.13/os-upgrade-ha-popup-ja.png)

❶ メンテナンス適用方法を通じてメンテナンス機能を使用できます。
❷ フェイルオーバーを使用する方法のみ提供されます。

<a id="delete-db-instance"></a>
## DBインスタンスの削除 { #delete-db-instance }

不要になった DB インスタンスは削除できます。Primary を削除すると、その複製グループに属する Standby および Read Replica もすべて一緒に削除されます。削除された DB インスタンスは復元できないため、重要な DB インスタンスには削除保護設定を有効にすることをお勧めします。

<a id="backup-2"></a>
## バックアップ { #backup-2 }

障害状況に備えて、DBインスタンスのデータベースを復旧できるように事前に準備できます。必要な時にコンソールでバックアップを実行したり、定期的にバックアップが実行されるように設定できます。詳細は[バックアップ](backup-and-restore/#overview)の項目を参照してください。

<a id="restoration"></a>
## 復元 { #restoration }

バックアップを利用して希望の時点にデータを復元できます。復元時には常に新しいDBインスタンスが作成され、既存のDBインスタンスに復元することはできません。詳細は[復元](backup-and-restore/#restore)の項目を参照してください。

<a id="secure-capacity"></a>
## 容量確保 { #secure-capacity }

急激な負荷でバイナリログ(binary log)が過剰に生成され、ストレージの容量が不足する場合、コンソールの容量確保機能を利用してバイナリログを削除できます。コンソールで容量確保を選択すると、DBインスタンスのバイナリログを選択できるポップアップ画面が表示されます。バイナリログを選択した後、**OK**を押して選択した項目より前に生成された全てのバイナリログを削除します。容量確保機能は一時的に容量を確保する機能です。継続して容量が不足する場合は、サービス負荷に合わせてバイナリログの保存期間を設定するか、ストレージのサイズを拡張する必要があります。

{{#if (eq engine.lowerCase "mysql")}}
!!! tip "ヒント"
    MySQL 5.7 以下のバージョンでは `expire_logs_days`、MySQL 5.8 以上のバージョンでは `binlog_expire_logs_seconds` パラメータでバイナリログ (binary log) の保存期間を設定できます。
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}
!!! tip "ヒント"
    `binlog_expire_logs_seconds` パラメータでバイナリログ (binary log) の保存期間を設定できます。
{{/if}}

!!! danger "注意"
    削除されたバイナリログ (binary log) によっては、特定の時点に復元されない場合があります。

<a id="expand-storage-size"></a>
## ストレージサイズ拡張 { #expand-storage-size }

DBインスタンスのデータストレージサイズを拡張できます。拡張時、DBインスタンスを再起動することなくすぐに適用されます。

<a id="auto-scale-storage"></a>
## 自動ストレージ拡張 { #auto-scale-storage }

DBインスタンスのデータストレージサイズを自動的に拡張できます。自動ストレージ拡張を使用すると、データストレージの容量が不足したときに自動的に拡張して、データベースの可用性を維持できます。

自動ストレージ拡張を使用するにはDBインスタンス作成及び修正時に**自動ストレージ拡張**を有効化に必要があります。

自動ストレージ拡張を有効にすると、3つのオプションを設定できます。
* ストレージ自動拡張条件：ストレージ使用率が設定した 値以上で5分以上続く場合、自動的にストレージを拡張します。
* ストレージ自動拡張最大値：ストレージ自動拡張で拡張できる最大サイズです。
* ストレージ自動拡張クールダウン：ストレージ自動拡張機能が一度実行された後、再び機能が有効になるまでの時間を設定します。

ストレージ自動拡張機能が実行されるときの増加量は、次の値のうち最も大きい値に設定されます。
* 10GB
* ストレージサイズの10%
* 直前の1時間のデータストレージ使用量の増加分 * クールダウン(時間に換算)

<a id="apply-parameter-group-changes"></a>
## パラメータグループの変更事項適用 { #apply-parameter-group-changes }

DBインスタンスに関連付けられたパラメータグループの設定が変更されても、この変更事項はDBインスタンスに自動的に適用されません。
DBインスタンスに適用されたパラメータと、関連付けられたパラメータグループの設定が一致しない場合、**パラメータ変更の適用**メンテナンスが生成され、メンテナンス状態が変更されます。

次の方法は、複数のDBインスタンスまたはシングルDBインスタンスに対してパラメータグループの変更事項を適用できます。

![db-instance-list-parameter-ja]({{url.cdn}}/26.01.13/db-instance-list-parameter-ja.png)

❶ 対象のDBインスタンスを選択した後、ドロップダウンメニューから**パラメータグループ変更事項の適用**メニューをクリック

メンテナンス機能で**次回のメンテナンス期間に適用**または**即時適用**を選択して、パラメータグループ変更事項を適用できます。

パラメータグループで再起動を必要とするパラメータが変更された場合、変更内容を適用する過程でDBインスタンスが再起動されます。

高可用性DBインスタンスの場合、安定性を高め、瞬断時間を減らすためにフェイルオーバーを利用した再起動機能を提供します。

![db-instance-parameter-ha-ja]({{url.cdn}}/26.01.13/db-instance-parameter-ha-ja.png)

장애 조치를 이용한 재시작を使用しない場合、PrimaryとStandbyに変更内容を順番に適用した後、DB インスタンスを再起動します。詳細については、高可用性 DB インスタンスの[手動フェイルオーバー](db-instance/#manual-failover)を参照してください。

<a id="recover-from-backup-in-object-storage"></a>
## オブジェクトストレージにあるバックアップで復元 { #recover-from-backup-in-object-storage }

外部 {{engine.pascalCase}} バックアップファイルを NHN Cloud のオブジェクトストレージにアップロードし、RDS for {{engine.pascalCase}} の DB インスタンスとして復元できます。詳細については、[外部 {{engine.pascalCase}} バックアップを利用した復元](backup-and-restore/#restore-from-external) を参照してください。

<a id="export-backup-files-to-the-object-storage-after-backup"></a>
## バックアップ後、オブジェクトストレージにバックアップファイルをエクスポート { #export-backup-files-to-the-object-storage-after-backup }

バックアップ後、バックアップファイルをオブジェクトストレージにエクスポートできます。詳細については、[バックアップエクスポート](backup-and-restore/#export)を参照してください。

<a id="read-replica"></a>
## Read Replica { #read-replica }

読み取りパフォーマンスを向上させるために、読み取り専用で使用できる Read Replica を作成できます。Read Replica は、1 つの Primary につき最大 5 台まで作成できます。Read Replica の Read Replica は作成することはできません。

<a id="create-read-replications"></a>
### Read Replica の作成 { #create-read-replications }

Read Replica を作成するには、レプリケーショングループに属する DB インスタンスのうち、テーブルロック使用オプションで作成されたバックアップファイルおよびバイナリログ (binary log) が必要です。バックアップファイルがない場合は、次の順序に従ってバックアップを実行する DB インスタンスを選択します。

❶ 自動バックアップを設定した Read Replica
❷ 自動バックアップを設定した Standby
❸ 自動バックアップを設定した Primary

条件に合う DB インスタンスがない場合、Read Replica の作成リクエストは失敗します。

!!! danger "注意"
    Primaryのデータベースサイズに比例して、Read Replicaの作成時間が長くなる場合があります。
    バックアップが実行されているDBインスタンスは、Read Replica作成プロセス中にストレージI/Oのパフォーマンスが低下する場合があります。

!!! tip "ヒント"
    Read Replica の作成プロセスに必要なバイナリログのサイズ分、バックアップストレージの料金が発生する場合があります。

Read Replicaを作成するには、コンソールで

![db-instance-replica-create-ja]({{url.cdn}}/26.01.13/db-instance-replica-create-ja.png)

❶ 元の DB インスタンスを選択した後、**Read Replica 生成**をクリックすると

次の設定で Read Replica を作成できます。

<a id="create-read-replications-non-editable-items"></a>
#### 変更不可項目

Read Replicaを作成する際、以下に挙げる項目は元のDBインスタンスの設定に従うため、変更することはできません。

* DBエンジン
* データストレージの種類
* ユーザーVPCサブネット

{{#if regions.[1]}}
<a id="create-read-replications-read-replica-region"></a>
#### Read Replica リージョン

Read Replica を作成するリージョンを選択する際、リージョンピアリングをサポートしている場合は、異なるリージョンに存在する VPC 間でリージョンピアリングを接続することで、別のリージョン VPC に属するサブネットに Read Replica を作成できます。ただし、元の DB インスタンスのリージョンとは異なるリージョンを選択した場合、レプリケーションの遅延が発生する可能性があり、DB バージョンのアップグレードはサポートされません。

!!! danger "注意"
    リージョンピアリングが接続されていても、ルート設定が正しくない場合、Read Replicaの作成に失敗するか、レプリケーションが中断される場合があります。
{{/if}}

<a id="create-read-replications-availability-zone"></a>
#### アベイラビリティゾーン

Read Replica の Availability Zone を選択します。詳細については、[Availability Zone](#_1) を参照してください。

<a id="create-read-replications-db-instance-type"></a>
#### DBインスタンスタイプ

Read Replica は Primary と同じスペックまたはより高いスペックで作成することをお勧めします。低いスペックで作成した場合、レプリケーション遅延が発生する可能性があります。

<a id="create-read-replications-data-storage-size"></a>
#### データストレージサイズ

原本DBインスタンスと同じサイズで作成することを推奨します。サイズを小さく設定する場合、データストレージ容量不足で複製プロセスが中断される場合があります。

<a id="create-read-replications-floating-ip"></a>
#### Floating IP

Read Replicaのフローティング IP の使用有無を選択します。詳細については、[フローティング IP](#ip) を参照してください。

<a id="create-read-replications-parameter-group"></a>
#### パラメータグループ

Read Replica のパラメータグループを選択する際、レプリケーション関連の設定変更が不要な場合は、元の DB インスタンスと同じパラメータグループを選択することをお勧めします。パラメータグループの詳細については、[パラメータグループ](parameter-group/) を参照してください。

<a id="create-read-replications-db-security-group"></a>
#### DBセキュリティグループ

Read Replica に適用する DB セキュリティグループを選択します。レプリケーションに必要なルールは自動的に適用されるため、DB セキュリティグループにレプリケーション関連のルールを別途追加する必要はありません。DB セキュリティグループの詳細については、[DB セキュリティグループ](db-security-group/) を参照してください。

<a id="create-read-replications-backup"></a>
#### バックアップ

Read Replica のバックアップ設定を選択します。バックアップの詳細については、[バックアップと復元](backup-and-restore/) を参照してください。

<a id="create-read-replications-default-notification"></a>
#### 基本通知

基本通知の使用有無を選択します。詳しい説明は[基本通知](#_7)の項目を参照してください。

<a id="create-read-replications-deletion-protection"></a>
#### 削除保護

削除保護の使用有無を選択します。詳しい説明は[削除保護](#_8)の項目を参照してください。

<a id="promote-read-replication"></a>
### Read Replica の昇格 { #promote-read-replication }

Primaryとの複製関係を解除し、Read ReplicaをPrimaryとして独立させる過程を昇格と呼びます。昇格されたPrimaryは、独立したDBインスタンスとして動作します。昇格を希望するRead ReplicaとPrimaryの間にレプリケーション遅延が存在する場合、その遅延が解消されるまで昇格は行われません。一度昇格したDBインスタンスは、以前の複製関係に戻すことはできません。

!!! danger "注意"
    Primary DB インスタンスの状態が異常な場合は、昇格作業を実行することはできません。

!!! tip "ヒント"
    Read Replica が配置されているリージョンと同じリージョンのコンソールで昇格作業を実行できます。

<a id="force-promotion-of-read-replicas"></a>
### Read Replica の強制昇格 { #force-promotion-of-read-replicas }

Primaryまたはオリジンリージョンのステータスにかかわらず、Read Replica の現時点のデータを基に強制昇格を実行します。レプリケーションの遅延がある場合、データが失われる可能性があります。そのため、Read Replica を緊急でサービスに投入しなければならない状況でない限り、この機能の使用はお勧めしません。

<a id="stop-replication-of-read-replicas"></a>
### Read Replicaのレプリケーション中断 { #stop-replication-of-read-replicas }

Read Replica は、さまざまな理由によりレプリケーションが中断される場合があります。Read Replica のステータスが `レプリケーション中断` の場合は、速やかに原因を確認して正常化する必要があります。`レプリケーション中断` の状態が長時間継続すると、レプリケーション遅延が増大します。正常化に必要なバイナリログ (binary log) が存在しない場合は、Read Replica を再構築する必要があります。レプリケーションが中断された原因は、Read Replica で `SHOW SLAVE STATUS` コマンドにより確認できます。`Last_Errno` の値が 1062 の場合は、以下のプロシージャ (procedure) をエラーが解消されるまで呼び出すことができます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_skip_repl_error();
```

<a id="rebuild-read-replica"></a>
### Read Replicaの再構築 { #rebuild-read-replica }

Read Replica の複製問題を解決できない場合、再構築によって正常な状態に復元できます。この過程で Read Replica のすべてのデータベースを削除し、Primary データベースを基に新たに再構築します。再構築中、Read Replica は使用できません。Read Replica を再構築するには、複製グループに属する DB インスタンスのうち、テーブルロック使用オプションで作成されたバックアップファイルおよびバイナリログ (binary log) が必要です。バックアップファイルがない場合の動作および注意事項については、[Read Replica 作成](#create-read-replications) を参照してください。

!!! tip "ヒント"
    再構築後も接続情報（ドメイン、IP）は変更されません。

<a id="restart-db-instance"></a>
## DBインスタンスの再起動 { #restart-db-instance }

{{engine.pascalCase}}を再起動する場合、または高可用性 DB インスタンスを手動でフェイルオーバーする場合は、DB インスタンスを再起動できます。再起動時間を最小化するために、サービス負荷が低い時間帯に実行することをお勧めします。高可用性 DB インスタンスでフェイルオーバーを利用した再起動を使用しない場合、Standby を先に再起動した後、Primary を再起動します。フェイルオーバー機能を利用した再起動については、[手動フェイルオーバー](#manual-failover)を参照してください。

DBインスタンスを再起動するには、コンソールで

![db-instance-restart-ja]({{url.cdn}}/26.01.13/db-instance-restart-ja.png)

❶再起動を希望するDBインスタンスを選択した後、ドロップダウンメニューから**DBインスタンスの再起動**メニューをクリックします。

<a id="db-instance-force-restart"></a>
## DBインスタンスの強制再起動 { #db-instance-force-restart }

DBインスタンスの{{engine.pascalCase}}が正常に動作しない場合、強制的に再起動できます。強制再起動の場合、{{engine.pascalCase}}にSIGTERMコマンドを実行して正常終了するのを10分間待ちます。10分以内に{{engine.pascalCase}}が正常終了したら、仮想マシンを再起動します。10分以内に正常終了しない場合、仮想マシンを強制的に再起動します。仮想マシンが強制的に再起動されると、作業中の一部のトランザクションが失われる可能性があり、データボリュームが破損して復旧が不可能になる可能性があります。強制再起動後、DBインスタンスの状態が使用可能な状態に戻らない場合があります。このような状況が発生した場合は、サポートにお問い合わせください。

!!! danger "注意"
    データが失われたり、データボリュームが破損する可能性があるため、この機能は緊急かつやむを得ない状況以外での使用は控えてください。

!!! tip "ヒント"
    高可用性 DB インスタンスは強制再起動できません。

DBインスタンスを強制的に再起動するには、コンソールで

![db-instance-restart-force-ja]({{url.cdn}}/26.01.13/db-instance-restart-force-ja.png)

❶強制再起動を希望するDBインスタンスを選択した後、ドロップダウンメニューから**DBインスタンス強制再起動**メニューをクリックします。

<a id="change-deletion-protection-settings"></a>
## 削除保護設定の変更 { #change-deletion-protection-settings }

削除保護を有効にすると、誤ってDBインスタンスが削除されないように保護できます。削除保護を無効化するまで、そのDBインスタンスを削除できません。削除保護設定を変更するには

![db-instance-deletion-protection-ja]({{url.cdn}}/26.01.13/db-instance-deletion-protection-ja.png)

❶削除保護設定を変更したいDBインスタンスを選択した後、ドロップダウンメニューから**削除保護設定変更**メニューをクリックすると、ポップアップウィンドウが表示されます。

![deletion-protection-popup-ja]({{url.cdn}}/24.03.12/deletion-protection-popup-ja.png)

❷削除保護設定を変更した後、**確認**をクリックします。


<a id="ha-db-instance"></a>
## 高可用性DBインスタンス { #ha-db-instance }

高可用性 DB インスタンスは、可用性とデータ耐久性を高め、障害に対して耐性のあるデータベースを提供します。高可用性 DB インスタンスは Primary と Standby で構成され、それぞれ異なる Availability Zone に作成されます。Standby は障害に備えた DB インスタンスであり、通常時は使用できません。高可用性 DB インスタンスでは、Standby でバックアップが実行されます。

!!! tip "ヒント"
    高可用性 DB インスタンスで {{engine.pascalCase}} クエリ文を使用して、他の DB インスタンスまたは外部 {{engine.pascalCase}} の Master から強制的にレプリケーションするよう設定すると、高可用性および一部の機能が正常に動作しません。

<a id="failure-detection"></a>
### 障害検出 { #failure-detection }

Standby には障害を検出するためのプロセスがあり、定期的に Primary の状態を監視します。この検出周期を Ping 間隔と呼び、4 回連続して状態チェックに失敗するとフェイルオーバーを実行します。Ping 間隔が短いほど障害に敏感に反応し、Ping 間隔が長いほど障害に鈍感に反応します。サービスの負荷に合わせて適切な Ping 間隔を設定することが重要です。

!!! tip "ヒント"
    Primaryのデータストレージ使用量がいっぱいになると、高可用性監視プロセスが障害として検知してフェイルオーバーを実行するため、注意が必要です。

<a id="automatic-failover"></a>
### 自動フェイルオーバー { #automatic-failover }

StandbyがPrimaryのステータスチェックに4回連続して失敗した場合、PrimaryがサービスをPrimaryが提供できないと判断し、自動的にフェイルオーバーを実行します。スプリットブレインが発生しないよう、障害が発生したPrimaryに割り当てられたすべてのユーザーセキュリティグループの接続を解除して外部からのアクセスを遮断し、StandbyがPrimaryの役割を引き継ぎます。接続のための内部ドメインのA recordは、障害が発生したPrimaryからStandbyに変更されるため、アプリケーションの変更は必要ありません。フェイルオーバーが完了すると、障害が発生したPrimaryの種類はFailed Over Primaryに、Standbyの種類はPrimaryに変更されます。Failed Over Primaryを復旧または再構築するまで、フェイルオーバーは実行されません。新しいPrimaryは、Failed Over Primaryのすべての自動バックアップを引き継ぎます。フェイルオーバーの過程でPrimaryが変更されると、バイナリログがすべて削除されるため、既存のバックアップを使用した時点復元はサポートされません。新しいPrimaryで新たにバックアップが実行された時刻から時点復元を行うことができます。

!!! tip "ヒント"
    高可用性機能はドメインを基盤としているため、接続を試みるクライアントが DNS サーバーに接続できないネットワーク環境の場合、ドメインを介して DB インスタンスに接続することはできません。また、フェイルオーバー発生時に正常な接続が行えない可能性があります。
    内部ドメインの A レコードの変更が反映されるまで、約 3 秒かかります。所要時間は、接続を試みるクライアント環境の DNS キャッシュポリシーによって異なる場合があります。

!!! danger "注意"
    Primary と Standby 間のバイナリログ (binary log) の position number 値が 100,000,000 以上差がある場合、フェイルオーバーは実行されません。
    `replicate-ignore-db` または `replicate-ignore-table` が適用されている場合、該当 DB またはテーブルの変更内容はレプリケーションされないため、フェイルオーバーに失敗する可能性があります。

<a id="failed-over-master"></a>
### Failed Over Primary { #failed-over-master }

障害が発生してフェイルオーバーされた Primary を Failed Over Primary と呼びます。Failed Over Primary の自動バックアップは実行されません。また、Failed Over Primary の復旧、再構築、分離、削除を除く他のすべての機能は実行できません。

<a id="recover-failed-over-master"></a>
### Failed Over Primary の復旧 { #recover-failed-over-master }

フェイルオーバー過程でデータの整合性が損なわれておらず、障害が発生した時点から復旧を試みる時点までのバイナリログ (binary log) が失われていなければ、Failed Over Primary と新しい Primary を再び高可用性構成として復旧できます。Failed Over Primary のデータベースをそのまま新しい Primary との複製関係を再設定するため、データの整合性が損なわれているか、復旧に必要なバイナリログ (binary log) が失われている場合は復旧が失敗します。Failed Over Primary の復旧に失敗した場合は、再構築によって高可用性機能を再度有効にできます。

!!! tip "ヒント"
    2023年4月11日より前にフェイルオーバーが発生した DB インスタンスは、復旧をサポートしていません。

Failed Over Primary を復旧するには、コンソールから

![db-instance-failover-repair-ja]({{url.cdn}}/26.01.13/db-instance-failover-repair-ja.png)

❶ 復旧を希望するFailed Over Primaryを選択後、ドロップダウンメニューで**Failed Over Primary復旧**をクリックします。

<a id="rebuild-failed-over-master"></a>
### Failed Over Primary の再構築 { #rebuild-failed-over-master }

Failed Over Primary の復旧に失敗した場合、再構築を使用して高可用性機能を再度有効化できます。再構築は復旧とは異なり、Failed Over Primary のデータベースをすべて削除し、新しい Primary のデータベースをもとに再構築します。Failed Over Primary を再構築するには、レプリケーショングループに属する DB インスタンスのうち、テーブルロック使用オプションで作成されたバックアップファイルおよびバイナリログ (binary log) が必要です。バックアップファイルがない場合は、次の順序に従ってバックアップを実行する DB インスタンスを選択します。

❶ 自動バックアップを設定した Read Replica
❷ 自動バックアップを設定した Primary

条件に合う DB インスタンスがない場合、Failed Over Primary 再構築リクエストは失敗します。

!!! danger "注意"
    Primaryのデータベースサイズに比例して、Failed Over Primaryの再構築時間が長くなる場合があります。
    バックアップが実行されているDBインスタンスは、Failed Over Primaryの再構築過程でストレージI/Oのパフォーマンスが低下する場合があります。

!!! tip "ヒント"
    Failed Over Primary の再構築プロセスに必要なバイナリログのサイズ分、バックアップストレージの料金が発生する可能性があります。

Failed Over Primaryを再構築するには、コンソールで

![db-instance-failover-rebuild-ja]({{url.cdn}}/26.01.13/db-instance-failover-rebuild-ja.png)

❶ 再構築したい Failed Over Primary を選択し、ドロップダウンメニューから **Failed Over Primary 再構築** をクリックします。

<a id="separate-failed-over-master"></a>
### Failed Over Primary の分離 { #separate-failed-over-master }

Failed Over Primary の復旧に失敗し、データ補正が必要な場合は、Failed Over Primary を分離して高可用性機能を無効にできます。分離された Primary と新しい Primary 間のレプリケーション関係が切断され、それぞれ通常の DB インスタンスとして動作します。分離後は、元の構成に復旧することはできません。

Failed Over Primary を分離するには、コンソールで

![db-instance-failover-split-ja]({{url.cdn}}/26.01.13/db-instance-failover-split-ja.png)

❶ 分離したい Failed Over Primary を選択し、ドロップダウンメニューから **Failed Over Primary 分離** メニューをクリックします。

<a id="manual-failover"></a>
### 手動フェイルオーバー { #manual-failover }

高可用性DBインスタンスの場合、再起動を伴う作業を実行すると、フェイルオーバーを利用した再起動を行うかどうかを選択でき、その作業は次のとおりです。

* DBインスタンスの再起動
* 再起動が必要な項目の変更
* 再起動が必要なパラメータの変更を適用
* ハイパーバイザーの点検のためのDBインスタンスのマイグレーション

フェイルオーバーを利用した再起動を行うと、まず Standby が再起動されます。その後、フェイルオーバーにより Standby が Primary となり、元の Primary は Standby の役割を担います。このとき、接続用の内部ドメインの A レコードは Primary から Standby に変更されるため、アプリケーションの変更は必要ありません。新しい Primary は、以前の Primary のすべての自動バックアップを引き継ぎます。フェイルオーバーの過程で Primary が変更され、バイナリログがすべて削除されるため、既存のバックアップを使用した時点復元はサポートされません。新しい Primary で新規にバックアップが実行された時刻から、時点復元を行うことができます。

!!! tip "ヒント"
    高可用性機能はドメインを基盤としているため、接続を試みるクライアントが DNS サーバーに接続できないネットワーク環境の場合、ドメインを通じて DB インスタンスに接続することはできません。また、フェイルオーバー発生時に正常な接続が不可能になります。
    内部ドメインの A レコード変更が反映されるまで、約 3 秒程度かかります。所要時間は、接続を試みるクライアント環境の DNS Cache ポリシーによって異なる場合があります。

!!! danger "注意"
    StandbyおよびレプリケーショングループのRead ReplicaのSeconds_Behind_Master値が1以上の場合、レプリケーション遅延が発生したと見なされ、この場合、手動フェイルオーバーは失敗します。負荷が少ない時間帯に手動フェイルオーバーを実行することをお勧めします。レプリケーション遅延による再起動の失敗は、イベント画面で確認できます。

フェイルオーバーを利用した再起動時、次の項目を追加的に選択して安定性を高めることができます。

<a id="manual-failover-progress-current-point-in-time-backup"></a>
#### 現在の時点のバックアップを実行

フェイルオーバーの過程でバイナリログ(binary log)がすべて削除されるため、フェイルオーバーを利用した再起動が完了した後、すぐに手動バックアップを行うことができます。

<a id="manual-failover-manual-control-of-failover"></a>
#### フェイルオーバーの手動制御

Standbyに変更を先に適用してその推移を観察したり、正確な時間にフェイルオーバーを実行したりしたい場合は、コンソールでフェイルオーバーのタイミングを直接制御できます。フェイルオーバーの手動制御を選択すると、Standbyの再起動後に ❶ コンソールに **[フェイルオーバー]** ボタンが表示されます。このボタンをクリックするとフェイルオーバーが実行され、最大5日間実行を待機できます。5日以内にフェイルオーバーを実行しない場合、該当の作業は自動的にキャンセルされます。

![db-instance-ha-wait-manual-failover-ja]({{url.cdn}}/26.01.13/db-instance-ha-wait-manual-failover-ja.png)

!!! danger "注意"
    フェイルオーバーを待機している間は、自動フェイルオーバーは実行されません。

<a id="manual-failover-waiting-for-resolve-replication-delay"></a>
#### 複製遅延解消待機

複製遅延解消待機オプションを有効にすると、Standby および複製グループに含まれる Read Replica の複製遅延がなくなるまで待機できます。

<a id="manual-failover-block-write-load"></a>
#### 書き込み負荷遮断

レプリケーションの遅延を解消する間、書き込み負荷を追加でブロックできます。書き込み負荷をブロックすると、フェイルオーバーを実行する直前に Primary が読み取り専用モードに切り替わり、すべての変更クエリが失敗するよう設定されます。

<a id="high-availability-suspended"></a>
### 高可用性の一時停止 { #high-availability-suspended }

一時的な作業による接続中断や大量の負荷が予想される状況で、一時的に高可用性機能を停止できます。高可用性機能が一時停止されると、障害を検出しないため、フェイルオーバーを実行しません。高可用性機能が一時停止した状態で再起動が必要な作業を実行しても一時停止された高可用性機能が再開されません。高可用性機能が一時停止してもデータ複製は正常に行われますが、障害が検出されないため、長時間一時停止状態に維持することは推奨しません。

<a id="rebuild-candidate-master"></a>
### Standby の再構築 { #rebuild-candidate-master }

ネットワークの切断、誤った FEDERATED エンジンの使用、別の Primary からのレプリケーション設定など、さまざまな原因により Standby のレプリケーションが中断される可能性があります。レプリケーション中断状態の Standby では、自動フェイルオーバーは実行されません。Standby のレプリケーション中断を解決するには、Standby を再構築する必要があります。Standby の再構築時には、Standby のデータベースをすべて削除し、Primary のデータベースをもとに再構築します。この過程で、再構築に必要なバックアップファイルが Primary データベースに存在しない場合、Primary でバックアップが実行され、バックアップによるパフォーマンスの低下が発生する可能性があります。

<a id="enginepascalcase-procedure"></a>
## {{engine.pascalCase}} Procedure { #enginepascalcase-procedure }

RDS for {{engine.pascalCase}}はユーザーに利便性を提供するため、ユーザーアカウントで制限されるいくつかの機能を実行するプロシージャを独自に提供しています。

<a id="tcrdsactiveprocess"></a>
### tcrds_active_process { #tcrdsactiveprocess }

* ProcesslistでSleep状態ではなくACTIVE状態のクエリを照会します。
* 実行時間が古い順に出力され、クエリ内容(SQL)は100桁までしか出力されません。

```
{{engine.lowerCase}}> CALL mysql.tcrds_active_process();
```

<a id="tcrdsprocesskill"></a>
### tcrds_process_kill { #tcrdsprocesskill }

* 特定のプロセスを強制終了します。
* 終了するプロセスIDはinformation_schema.processlistで確認でき、tcrds_active_processとtcrds_current_lockプロシージャを使ってプロセスの情報を確認できます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_process_kill(processlist_id );
```

<a id="tcrdscurrentlock"></a>
### tcrds_current_lock { #tcrdscurrentlock }

* 現在ロックを待っているプロセスとロックを占有しているプロセス情報を確認します。
* (w)カラム情報がロックを獲得するために待機しているプロセス情報。
* (B)カラム情報がロックを占有しているプロセス情報。
* ロックを占有しているプロセスを強制終了するには、(B)PROCESS列を確認した後、call tcrds_process_kill(process_id)を実行します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_current_lock();
```

<a id="tcrdsreplchangemaster-prior-to-84"></a>
### tcrds_repl_changemaster (8.4以前) { #tcrdsreplchangemaster-prior-to-84 }

* 複製を利用して外部{{engine.pascalCase}} DBをNHN Cloud RDSにインポートする時使います。
* NHN Cloud RDSの複製構成は、コンソールの**複製の作成**で行うことができます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_changemaster (master_instance_ip, master_instance_port, user_id_for_replication, password_for_replication_user, MASTER_LOG_FILE, MASTER_LOG_POS);
```

* パラメータの説明
    * master_instance_ip:複製対象(Master)サーバーのIP
    * master_instance_port:複製対象(Master)サーバーの{{engine.pascalCase}}ポート
    * user_id_for_replication:複製対象(Master)サーバーの{{engine.pascalCase}}に接続する複製用アカウント
    * password_for_replication_user:複製用アカウントパスワード
    * MASTER_LOG_FILE:複製対象(Master)のbinary logファイル名
    * MASTER_LOG_POS:複製対象(Master)のbinary logポジション

```
ex) call mysql.tcrds_repl_changemaster('10.162.1.1',10000,'db_repl','password','mysql-bin.000001',4);
```

!!! danger "注意"
    レプリケーション用アカウントが、レプリケーション対象（Master）の {{engine.pascalCase}} に作成されている必要があります。

<a id="tcrdsreplchangesource-after-84"></a>
### tcrds_repl_changesource (8.4以降) { #tcrdsreplchangesource-after-84 }

* レプリケーションを利用して外部の{{engine.pascalCase}} DBをNHN Cloud RDSにインポートする際に使用します。
* NHN Cloud RDSのレプリケーション構成は、コンソールの**レプリカ作成**で行うことができます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_changesource (master_instance_ip, master_instance_port, user_id_for_replication, password_for_replication_user, SOURCE_LOG_FILE, SOURCE_LOG_POS);
```

* パラメータの説明
      * master_instance_ip:レプリケーション元(マスター)サーバーのIP
      * master_instance_port:レプリケーション元(マスター)サーバーの{{engine.pascalCase}}ポート
      * user_id_for_replication:レプリケーション元(マスター)サーバーの{{engine.pascalCase}}に接続するためのレプリケーション用アカウント
      * password_for_replication_user:レプリケーション用アカウントのパスワード
      * SOURCE_LOG_FILE:レプリケーション元(マスター)のバイナリログファイル名
      * SOURCE_LOG_POS:レプリケーション元(マスター)のバイナリログポジション

```
ex) call mysql.tcrds_repl_changesource('10.162.1.1',10000,'db_repl','password','mysql-bin.000001',4);
```

!!! danger "注意"
    レプリケーション用アカウントがレプリケーション対象 (Master) {{engine.pascalCase}} に作成されている必要があります。

<a id="tcrdsreplinit"></a>
### tcrds_repl_init { #tcrdsreplinit }

* {{engine.pascalCase}}複製情報を初期化します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_init();
```

<a id="tcrdsreplslavestop-before-84"></a>
### tcrds_repl_slave_stop (8.4以前) { #tcrdsreplslavestop-before-84 }

* {{engine.pascalCase}}の複製を止めます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_slave_stop();
```

<a id="tcrdsreplreplicastop-after-84"></a>
### tcrds_repl_replica_stop (8.4以降) { #tcrdsreplreplicastop-after-84 }

* {{engine.pascalCase}}の複製を止めます。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_replica_stop();
```

<a id="tcrdsreplslavestart-before-84"></a>
### tcrds_repl_slave_start (8.4以前) { #tcrdsreplslavestart-before-84 }

* {{engine.pascalCase}}の複製を開始します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_slave_start();

```

<a id="tcrdsreplreplicastart-after-84"></a>
### tcrds_repl_replica_start (8.4以降) { #tcrdsreplreplicastart-after-84 }

* {{engine.pascalCase}}の複製を開始します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_replica_start();

```

<a id="tcrdsreplskipreplerror"></a>
### tcrds_repl_skip_repl_error { #tcrdsreplskipreplerror }

* 以下のようなDuplicate keyエラーが発生した場合、tcrds_repl_skip_repl_errorプロシージャを実行するとレプリケーションエラーを解決できます。
      * 8.4以前: SQL_SLAVE_SKIP_COUNTER=1を実行します。
      * 8.4以降: `SQL_REPLICA_SKIP_COUNTER=1`を実行します。
* `{{engine.pascalCase}} error code 1062: 'Duplicate entry ? for key ?'`

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_skip_repl_error();
```

<a id="tcrdsreplnextchangemaster-before-84"></a>
### tcrds_repl_next_changemaster (8.4以前) { #tcrdsreplnextchangemaster-before-84 }

* Masterの次のバイナリ(binary log)ログを読めるように複製情報を変更します。
* 次のような複製エラーが発生した場合、tcrds_repl_next_changemasterプロシージャを実行すると、複製エラーを解決できます。

例) {{engine.pascalCase}} error code 1236 (ER_MASTER_FATAL_ERROR_READING_BINLOG): Got fatal error from master when reading data from binary log

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_next_changemaster();
```

<a id="tcrdsreplnextchangesource-after-84"></a>
### tcrds_repl_next_changesource (8.4以降) { #tcrdsreplnextchangesource-after-84 }

* Primaryの次のバイナリログ(binary log)を読み取れるようにレプリケーション情報を変更します。
* 以下のようなレプリケーションエラーが発生した場合、`tcrds_repl_next_changesource`プロシージャを実行するとエラーを解決できます。

例) {{engine.pascalCase}} error code 1236 (ER_SOURCE_FATAL_ERROR_READING_BINLOG): Got fatal error from source when reading data from binary log

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_next_changesource();
```

<a id="tcrdsinnodbmonitorreset"></a>
### tcrds_innodb_monitor_reset { #tcrdsinnodbmonitorreset }

* information_schema.INNODB_METRICSテーブルのcounterを0にリセットするinnodb_monitor_reset variablesを実行するプロシージャです。
* `SET GLOBAL innodb_monitor_reset = '{counter-name|module_name|pattern|all}';`クエリを実行します。
* innodb_monitor_enable、innodb_monitor_disableはRDSパラメータで提供します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_innodb_monitor_reset('{counter-name|module_name|pattern|all}');
```

```
ex) CALL mysql.tcrds_innodb_monitor_reset('dml_reads');
CALL mysql.tcrds_innodb_monitor_reset('module_dml');
```

<a id="tcrdsinnodbmonitorresetall"></a>
### tcrds_innodb_monitor_reset_all { #tcrdsinnodbmonitorresetall }

* counter値をリセットするinnodb_monitor_reset_all variablesを実行するプロシージャです。
* innodb_monitor_reset_allを使用するには、counterがdisable状態である必要があります。
* `SET GLOBAL innodb_monitor_reset_all = '{counter-name|module_name|pattern|all}';`クエリを実行します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_innodb_monitor_reset_all('{counter-name|module_name|pattern|all}');
```

<a id="tcrdsforeignkeychecks"></a>
### tcrds_foreign_key_checks { #tcrdsforeignkeychecks }
* foreign key制約条件をチェックする'foreign_key_checks'変数を制御するプロシージャです。
* `SET GLOBAL foreign_key_checks ='ON|OFF';`クエリを実行します。

```
{{engine.lowerCase}}> CALL mysql.tcrds_foreign_key_checks('{0|1|'OFF'|'ON'}');
```

<a id="data-migration"></a>
## データマイグレーション { #data-migration }

* RDSはmysqldumpを利用してNHN Cloud RDSの外部にデータをエクスポートしたり、外部からインポートできます。
* mysqldumpユーティリティは{{engine.pascalCase}}をインストールした時、基本的に提供されます。

<a id="export-using-mysqldump"></a>
### mysqldumpを利用してエクスポート { #export-using-mysqldump }

* NHN Cloud RDSのインスタンスを準備して使用します。
* エクスポートするデータを保存する外部インスタンス、もしくはローカルクライアントがインストールされたコンピュータの容量が十分に確保されていることを確認します。
* NHN Cloudの外部にデータをエクスポートする場合、Floating IPを作成してデータをエクスポートするRDSインスタンスに接続します。
* 下記のmysqldumpコマンドを使って外部にデータをエクスポートします。

<a id="export-using-mysqldump-when-exporting-files"></a>
#### ファイルにエクスポートする場合

```
mysqldump -h{rds_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

<a id="export-using-mysqldump-exporting-in-enginelowercase-db-out-of-nhn-cloud-rds"></a>
#### NHN Cloud RDS外部の{{engine.pascalCase}} DBにエクスポートする場合

```
mysqldump -h{rds_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --routines --events --triggers --databases {database_name1, database_name2, ...} | mysql -h{external_db_host} -u{external_db_id} -p{external_db_password} --port={external_db_port}
```

<a id="import-by-using-mysqldump"></a>
### mysqldumpを利用してインポート { #import-by-using-mysqldump }

* データをインポートするNHN Cloud RDS外部のDBを準備します。
* インポートするNHN Cloud RDSインスタンスの容量が十分か確認します。
* Floating IPを作成してNHN Cloud RDSインスタンスに接続します。
* 下記のmysqldumpコマンドで外部からデータをインポートします。

```
mysqldump -h{external_db_host} -u{external_db_id} -p{external_db_password} --port={external_db_port} --single-transaction --set-gtid-purged=off --routines --events --triggers --databases {database_name1, database_name2, ...} | mysql -h{rds_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port}
```

<a id="import-by-using-mysqldump-when-error-1227-occurs-during-data-importing"></a>
#### データのインポート中に`ERROR 1227`エラーが発生した場合

* `ERROR 1227`エラーはmysqldumpファイルの保存されたオブジェクト(トリガー、ビュー、関数またはイベント)にDEFINERが定義されている時に発生します。これを解決するためには、mysqldumpファイルで`DEFINER`部分を削除してください。

<a id="import-by-using-mysqldump-when-error-1418-occurs-during-data-importing"></a>
#### データのインポート中に`ERROR 1418`エラーが発生する場合

* `ERROR 1418`エラーはmysqldumpファイルの関数宣言にNO SQL、READS SQL DATA, DETERMINISTICがなく、バイナリログが有効な状態の時に発生します。
    * 詳細については[The Binary Log](https://dev.mysql.com/doc/refman/8.0/en/binary-log.html) MySQL文書を参照してください。
* これを解決するためには、mysqldumpファイルを適用するDBインスタンスの`log_bin_trust_function_creators`パラメータの値を`1`に変更する必要があります。

<a id="export-by-using-replication"></a>
### 複製を利用してエクスポート { #export-by-using-replication }

* レプリケーションを使用して、NHN Cloud RDS のデータを外部の DB にエクスポートできます。
* 外部の DB のバージョンは、NHN Cloud RDS のバージョンと同じか、それより新しいバージョンである必要があります。
* データをエクスポートする NHN Cloud RDS の Primary または Read Replica インスタンスを準備します。
* フローティング IP を作成し、データをエクスポートする NHN Cloud RDS インスタンスに接続します。
* 以下のコマンドで NHN Cloud RDS インスタンスからデータをファイルにエクスポートします。
* Primary RDS インスタンスからエクスポートする場合

```
mysqldump -h{rds_master_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --master-data=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* Read Replica RDS インスタンスからエクスポートする場合

```
mysqldump -h{rds_read_only_slave_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --dump-slave=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* バックアップされたファイルを開いて、コメントに書かれたMASTER_LOG_FILE及びMASTER_LOG_POSを別に記録します。
* NHN Cloud RDSインスタンスからデータをバックアップする外部ローカルクライアントまたはDBがインストールされたコンピュータの容量が十分であることを確認します。
* 外部DBのmy.cnf(Windowsの場合my.ini)ファイルに下記のようなオプションを追加します。
* server-idの場合、NHN Cloud RDSインスタンスのパラメータ項目のserver-idと違う値を入力します。

```
...
[mysqld]
...
server-id={server_id}
replicate-ignore-db=rds_maintenance
...
```

* 外部DBを再起動します。
* バックアップされたファイルを下記のコマンドで外部DBに入力します。

```
mysql -h{external_db_host} -u{exteranl_db_id} -p{external_db_password} --port={exteranl_db_port} < {local_path_and_file_name}
```

* NHN Cloud RDSインスタンスで複製に使用するアカウントを作成します。
* 新しく複製を設定する前に、もしかしたら存在するかもしれない既存のレプリケーション情報を初期化するために下記のクエリを実行します。この時、RESET SLAVEを実行すると、既存の複製情報が初期化されます。

##### 8.4以前
```
STOP SLAVE;

RESET SLAVE;
```

##### 8.4以降
```
STOP REPLICA;

RESET REPLICA;
```

* 複製に使うアカウント情報と、先ほど別に記録しておいたMASTER_LOG_FILEとMASTER_LOG_POSを使って外部DBに下記のようにクエリを実行します。

##### 8.4以前
```
CHANGE MASTER TO master_host = '{rds_master_instance_floating_ip}', master_user='{user_id_for_replication}', master_password='{password_forreplication_user}', master_port ={rds_master_instance_port}, master_log_file ='{MASTER_LOG_FILE}', master_log_pos = {MASTER_LOG_POS};

START SLAVE;
```

##### 8.4以降
```
CHANGE REPLICATION SOURCE TO source_host = '{rds_master_instance_floating_ip}', source_user='{user_id_for_replication}', source_password='{password_forreplication_user}', source_port ={rds_master_instance_port}, source_log_file ='{SOURCE_LOG_FILE}', source_log_pos = {SOURCE_LOG_POS};

START REPLICA;
```

* 外部DBとNHN Cloud RDSインスタンスの原本データが同じになったら、外部DBにSTOP SLAVEコマンドを利用して複製を終了します。

<a id="import-with-replication"></a>
### 複製を利用してインポート { #import-with-replication }

* 複製を利用して外部DBをNHN Cloud RDSにインポートできます。
* NHN Cloud RDSのバージョンは外部DBのバージョンと同じか、それより新しいバージョンでなければなりません。
* データをエクスポートする外部{{engine.pascalCase}}インスタンスに接続します。
* 下記のコマンドで外部{{engine.pascalCase}}インスタンスからデータをバックアップします。
* 外部{{engine.pascalCase}}インスタンス(マスター)からインポートする場合

```
mysqldump -h{master_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --master-data=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* 外部{{engine.pascalCase}}インスタンス(スレーブ)からインポートする場合

```
mysqldump -h{slave_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --dump-slave=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* バックアップされたファイルを開いて、コメントのMASTER_LOG_FILE及びMASTER_LOG_POSを別に記録します。
* NHN Cloud RDSインスタンスからデータをバックアップするクライアントやコンピュータの容量が十分か確認します。
* 外部DBのmy.cnf(Winodwsの場合はmy.ini)ファイルに下記のオプションを追加します。
* server-idの場合、NHN Cloud RDSインスタンスのパラメータ項目のserver-idと異なる値を入力します。

```
...
[mysqld]
...
server-id={server_id}
replicate-ignore-db=rds_maintenance
...
```

* 外部DBを再起動します。
* 外部ネットワークからインポート(import)すると時間がかかる場合があるので、内部NHN Cloud Imageを作成してバックアップファイルをコピーした後、NHN Cloudにインポートすることを推奨します。
* バックアップされたファイルを下記のコマンドでNHN Cloud RDSに入力します。
* 複製構成はDNSをサポートしていないため、IPに変換して実行します。

```
mysql -h{rds_master_insance_floating_ip} -u{db_id} -p{db_password} --port={db_port} < {local_path_and_file_name}
```

* 外部{{engine.pascalCase}}インスタンスで複製に使うアカウントを作成します。

##### 8.4以前
```
{{engine.lowerCase}}> CREATE USER 'user_id_for_replication'@'{external_db_host}' IDENTIFIED BY '<password_forreplication_user>';
{{engine.lowerCase}}> GRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'user_id_for_replication'@'{external_db_host}';
```

##### 8.4以降
```
{{engine.lowerCase}}> CREATE USER 'user_id_for_replication'@'{external_db_host}' IDENTIFIED BY '<password_forreplication_user>';
{{engine.lowerCase}}> GRANT REPLICATION CLIENT, REPLICATION REPLICA ON *.* TO 'user_id_for_replication'@'{external_db_host}';
```

* レプリケーションに使うアカウント情報と先に記録しておいたMASTER_LOG_FILE, MASTER_LOG_POSを利用してNHN Cloud RDSに次のようにクエリを実行します。

##### 8.4以前
```
{{engine.lowerCase}}> call mysql.tcrds_repl_changemaster ('rds_master_instance_floating_ip',rds_master_instance_port,'user_id_for_replication','password_forreplication_user','MASTER_LOG_FILE',MASTER_LOG_POS );
```

##### 8.4以降
```
{{engine.lowerCase}}> call mysql.tcrds_repl_changesource ('rds_master_instance_floating_ip',rds_master_instance_port,'user_id_for_replication','password_forreplication_user','SOURCE_LOG_FILE',SOURCE_LOG_POS );
```

* レプリケーションを開始するには下記のプロシージャを実行します。

##### 8.4以前
```
{{engine.lowerCase}}> call mysql.tcrds_repl_slave_start;
```

##### 8.4以降
```
{{engine.lowerCase}}> call mysql.tcrds_repl_replica_start;
```

* 外部DBとNHN Cloud RDSインスタンスの元データが同じになったら、下記のコマンドを利用して複製を終了します。

```
{{engine.lowerCase}}> call mysql.tcrds_repl_init();
```

<a id="appendix"></a>
## 付録 { #appendix }

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance"></a>
### 付録1. ハイパーバイザメンテナンスのためのDBインスタンスマイグレーションガイド { #appendix-1-db-instance-migration-guide-for-hypervisor-maintenance }

NHN Cloudは周期的にDBインスタンスのハイパーバイザソフトウェアをアップデートしてセキュリティと安定性を向上させています。
メンテナンス対象ハイパーバイザで起動中のDBインスタンスは、マイグレーションを通してメンテナンスが完了したハイパーバイザに移動する必要があります。

DB インスタンスのマイグレーションは、NHN Cloud コンソールから開始できます。
DB 構成によっては、特定の DB インスタンスを選択してマイグレーションを実行する際、関連する DB インスタンス (例: Read Replica インスタンス) もメンテナンス対象であれば、同時にマイグレーションを実行します。
以下のガイドに従って、コンソールのマイグレーション機能を使用してください。
メンテナンス対象として指定された DB インスタンスが存在するプロジェクトに移動します。

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-check-the-db-instance-that-requires-maintenance"></a>
#### 1. メンテナンス対象DBインスタンスを確認します。

**[DB インスタンス]** タブの一覧で、点検対象の DB インスタンスを確認します。**[メンテナンス]** の **[必須]** をクリックするか、**[DB インスタンス詳細]** の **[メンテナンス]** タブでハイパーバイザーマイグレーションのメンテナンス作業があるかどうか確認できます。
ハイパーバイザーマイグレーションのメンテナンス作業の **[表示]** をクリックすると、ハイパーバイザーマイグレーションの詳細な点検内容を確認できます。

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-make-sure-you-close-any-running-applications-on-the-db-instance"></a>
#### 2. メンテナンス対象DBインスタンスに接続中のアプリケーションソフトウェアを終了する必要があります。

DBに接続しているサービスに影響を与えないように、適切な措置を取ってください。
やむを得ずサービスに影響を与えてしまう時は、NHN Cloudサポートに連絡してくだされば、適切な措置を案内いたします。

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-you-can-apply-migration-to-db-instances-targeted-for-maintenance"></a>
#### 3. 点検対象のDBインスタンスのマイグレーションを適用できます。

マイグレーションを適用する DB インスタンスを選択した後、**即座に適用**をクリックするとハイパーバイザーマイグレーションをすぐに適用できます。
**次のメンテナンス期間に適用**をクリックすると、希望するメンテナンス期間にハイパーバイザーマイグレーションを適用できます。

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-wait-for-the-db-instance-migration-to-finish"></a>
#### 4. DBインスタンスのマイグレーションが終わるまで待機します。

DB インスタンスのステータスが変わらない場合は、更新してください。
DB インスタンスのマイグレーション中は、いかなる操作もできません。
DB インスタンスのマイグレーションが正常に完了しなかった場合は、自動的に管理者に報告され、NHN Cloud から別途ご連絡します。

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds"></a>
### 付録2. RDSを利用してFederated Storage Engine使用するときの構成ガイド { #appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds }

Federated Storage Engineを使用する場合、次を考慮する必要があります。

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds-for-configuration-using-rds-as-a-local-node"></a>
#### ローカルノードとしてRDSを利用する構成の場合

* リモートノードへの送信を許可する設定が必要です。
    * DB セキュリティグループでルールを追加できます。
    * 詳細については、[DB セキュリティグループ](db-security-group/) を参照してください。
* ローカルノード役割の RDS に Read Replica を追加した構成で使用する場合、パラメータの replicate-ignore-table に federated 設定されたテーブルを明示する必要があります。
    * Read Replica を構成する場合、federated テーブルも複製されるため、Primary と Read Replica がリモートノードを共に参照します。
    * この場合、Primary で実行したデータ入力が federated 設定に従ってリモートノードでも実行され、Read Replica でも同様に同じ入力が実行されるため、重複キーエラーなどによるレプリケーション中断が発生する可能性があります。
    * Read Replica が federated テーブルを複製しないよう、replicate-ignore-table に設定する必要があります。

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds-for-configuration-using-rds-as-a-remote-node"></a>
#### リモートノードとしてRDSを利用する構成の場合

* ローカルノードでの受信を許可する設定が必要です。
    * DBセキュリティグループでルールを追加できます。
    * 詳細については、 [DBセキュリティグループ](db-security-group/)項目を参照してください。

<a id="security-patch"></a>
### 付録3. セキュリティパッチ { #security-patch }

NHN Cloudは、DBインスタンスのOSで発見されたセキュリティの脆弱性(CVE)を定期的に管理し、影響を受けるDBインスタンスにセキュリティパッチのメンテナンス作業を提供します。
セキュリティパッチは、現在のDBインスタンスの脆弱性を解決した最新のセキュリティアップデートを適用する方式で動作します。
以下のガイドに従って、コンソールにあるセキュリティパッチ機能を利用してください。
セキュリティパッチの対象として指定されたDBインスタンスがあるプロジェクトへ移動します。

<a id="security-patch-check-the-db-instances-targeted-for-security-patching"></a>
#### 1. セキュリティパッチの対象となるDBインスタンスを確認します。

**メンテナンス**で**必須**または**利用可能**をクリックするか、**DBインスタンスの詳細**の**メンテナンス**タブで、セキュリティパッチのメンテナンス作業があるかを確認できます。

![patch-security-list-ja]({{url.cdn}}/26.05.12/patch-security-list-ja.png)

❶ セキュリティパッチメンテナンスの**表示**ボタンをクリック
❷ 現在のDBイメージに該当する、セキュリティの脆弱性情報を確認できます。

![patch-security-detail-ja]({{url.cdn}}/26.05.12/patch-security-detail-ja.png)

セキュリティパッチを適用した際に解決されるセキュリティの脆弱性情報を確認できます。

![patch-security-popup-ja]({{url.cdn}}/26.05.12/patch-security-popup-ja.png)

!!! tip "ヒント"
    脆弱性の深刻度は、CRITICAL、HIGH、MEDIUM、LOW に区分されます。

<a id="security-patch-check-the-applications-connected-to-the-db-instances-targeted-for-security-patching"></a>
#### 2. セキュリティパッチ対象のDBインスタンスに接続中のアプリケーションを確認します。

セキュリティパッチにより、DBインスタンスのサービス瞬断が発生する可能性があります。
高可用性DBインスタンスは、フェイルオーバーを通じてサービスの瞬断を最小限に抑えることができ、単一のDBインスタンスは再起動によってセキュリティパッチが適用されます。
DBに接続されているサービスに影響を与えないよう、適切な措置を講じてください。

<a id="security-patch-select-when-to-apply-the-security-patch"></a>
#### 3. セキュリティパッチの適用タイミングを選択します。

![patch-security-maintenance-ja]({{url.cdn}}/26.05.12/patch-security-maintenance-ja.png)

❶ **今すぐ適用**をクリックして、セキュリティパッチを直ちに適用できます。
❷ **次のメンテナンス期間に適用**をクリックして、指定されたメンテナンス期間にセキュリティパッチを適用できます。

高可用性DBインスタンスに適用する場合は、以下のオプションを一緒に選択できます。

* **事前バックアップの実行**: セキュリティパッチを実行する前に、バックアップを自動で実行します。
* **フェイルオーバー方式の選択**: オンラインフェイルオーバー、手動フェイルオーバーの使用有無を選択します。
* **レプリケーション遅延の待機**: レプリケーションの遅延が解消されるまで待機した後、セキュリティパッチを適用します。
* **Read Onlyモード**: セキュリティパッチの実行中にRead Onlyモードを使用します。

<a id="security-patch-wait-until-the-security-patch-is-complete"></a>
#### 4. セキュリティパッチが完了するまで待機します。

DBインスタンスの状態が変更されない場合は、更新してください。

![patch-security-running-ja]({{url.cdn}}/26.05.12/patch-security-running-ja.png)

DBインスタンスへのセキュリティパッチ適用中は、一切の操作を行うことができません。
セキュリティパッチが正常に完了しない場合は自動的に再試行され、繰り返し失敗する場合は管理者に報告され、NHN Cloudから別途ご連絡します。
