<!-- machine_translated: true -->

<!-- pre-align:aligned sig=6567c272c6dd -->

<a id="database-rds-for-enginepascalcase-db-instance"></a>
## Database > RDS for {{engine.pascalCase}} > DB Instance { #database-rds-for-enginepascalcase-db-instance }

<a id="db-instance"></a>
## DB Instance { #db-instance }

DB instance is a concept that encompasses virtual equipment and installed {{engine.pascalCase}}, a unit of {{engine.pascalCase}} provided by RDS for {{engine.pascalCase}}.
You do not have direct access to the operating system of the DB instance, but only to the database through the port you entered when you created the DB instance. The available port ranges have the following restrictions. The available port range is between 3306 and 43306.

The DB instance is identified by the customer-assigned name and the automatically assigned 32-byte ID.
DB instance name has the following restrictions.

* DB instance name must be unique by region.
* DB instance name contains alphabets, numbers, and - _ between 1 and 100 characters. ,and the first character must be an alphabet.

!!! tip "Notice"
    After the July 2025 maintenance, high availability DB instances now require you to enter a name for the Standby as well as the Primary. The same naming constraints that apply to the Primary also apply to the Standby, and the names of the Primary and Standby must be different from each other. For DB instances created before the maintenance, the Standby name is the same as the Primary name.

<a id="create-db-instance"></a>
## Create DB Instance { #create-db-instance }

You can create DB instance with the following settings.

<a id="availability-zone"></a>
### Availability Zone { #availability-zone }

NHN Cloud has divided the entire system into several availability zones to prepare for failures caused by physical hardware problems. These availability zones are storage systems, network switches, top surfaces, and power supplies, which are all configured separately for each zone. Failure within one availability zone does not affect other availability zones, increasing the availability of the entire service. Deploying DB instances across multiple availability zones can further increase the service availability. Network communication is possible between DB instances that are scattered across multiple availability zones, and there is no network usage charge.

!!! danger "Caution"
    You cannot change the availability zone of a DB instance that has already been created.

<a id="db-engine"></a>
### DB Engine { #db-engine }

The versions specified below are available. Creating new DB instances and adding Read Replicas are supported for up to the top 7 minor versions per major version.
{{#if (eq engine.lowerCase "mysql")}}
Versions earlier than MySQL 8.0.34 are no longer supported in accordance with the MySQL LTS support policy. We recommend that you upgrade DB instances of those versions to the latest version.

| Version              | Note                                                      |
|----------------------|-----------------------------------------------------------|
| <strong>8.4</strong> |                                |
| MySQL 8.4.9          |                                |
| MySQL 8.4.8          |                                |
| MySQL 8.4.7          |                                |
| MySQL 8.4.6          |                                |
| MySQL 8.4.5          |                                |
| <strong>8.0</strong> |                                |
| MySQL 8.0.44         |                                |
| MySQL 8.0.43         |                                |
| MySQL 8.0.42         |                                |
| MySQL 8.0.41         |                                |
| MySQL 8.0.40         |                                |
| MySQL 8.0.36         | Creation and read replicas unsupported  |
| MySQL 8.0.35         | Creation and read replicas unsupported  |
| MySQL 8.0.34         | Creation and read replicas unsupported  |
| MySQL 8.0.33         | Creation and read replicas unsupported  |
| MySQL 8.0.32         | Creation and read replicas unsupported  |
| MySQL 8.0.28         | Creation and Read Replica unsupported  |
| MySQL 8.0.23         | Creation and read replicas unsupported  |
| MySQL 8.0.18         | Creation and read replicas unsupported  |
| <strong>5.7</strong> |                                |
| MySQL 5.7.37         |                                |
| MySQL 5.7.33         | You cannot restore a DB instance from an external backup. |
{{#if (eq env "public")}}
| MySQL 5.7.26         |                                                           |
| MySQL 5.7.19         |                                                           |
| MySQL 5.7.15         |                                                           |
| <strong>5.6</strong> |                                                           |
| MySQL 5.6.33         | This version is no longer supported.                      |
{{/if}}

For the DB engine, version upgrades are possible through the modification feature of the console after creation.
Details about DB engine can be found in [DB Engine](db-engine/).
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}

| Version                  | Note |
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
| MariaDB 10.6.25        | Creation and Read Replica addition unsupported. |
| MariaDB 10.6.22        | Creation and Read Replica unsupported |
| MariaDB 10.6.16        | Creation and Read Replica unsupported |
| MariaDB 10.6.12        | Creation and Read Replica unsupported. |
| MariaDB 10.6.11        | Creation and read replicas unsupported |
| <strong>10.3</strong>  |    |
| MariaDB 10.3.30        | Creation and Read Replica unsupported. |

Details about DB engine can be found in [DB Engine](db-engine/).
{{/if}}

<a id="db-instance-type"></a>
### DB Instance Type { #db-instance-type }

DB instances have different CPU cores and memory capacity depending on the type.
When creating a DB instance, you must select an appropriate DB instance type according to the database workload.

| Type | Description                                                                                                                    | 
|------|--------------------------------------------------------------------------------------------------------------------------------| 
| m2   | Instance type that balances CPU and memory.                                                                                    | 
| c2   | Instance type with high CPU performance.                                                                                       | 
| r2   | Available when memory is busy compared to other resources.                                                                     | 
| x1   | Instance type that supports higher-end CPU and memory. Recommended for services or applications that require high performance. |

The type of DB instance that you have already created can be easily changed through the console.

!!! danger "Caution"
    Changing the type of an already created DB instance terminates the DB instance, resulting in several minutes of service interruption.

<a id="data-storage"></a>
### Data Storage { #data-storage }

It stores the database's data files in data storage. DB instances support two types of data storage: HDD and SSD. Performance and price vary depending on the type of data storage, so you need to choose the right type depending on the database workload. Data storage can range from 20GB to 2TB.

!!! danger "Caution"
    You cannot change the data storage type of a DB instance that has already been created.

!!! tip "Note"
    To use more than 2 TB of data storage, contact NHN Cloud customer support.

Because the following tasks increase the I/O usage of data storage, the performance of DB instance may be degraded during the process.

* Backup of a single DB instance
* High availability configuration of a single DB instance
* Read Replica creation
* Read Replica rebuild
* Standby rebuild
* Point-in-time restore
* Export backup files to object storage after backing up a single DB instance

<a id="high-availability"></a>
### High Availability { #high-availability }

High-availability DB instances increase availability and data durability, providing a fault-tolerant database. High-availability DB instances consist of a Primary and a Standby, and are created in different availability zones. The Standby is a DB instance in case of failure and is not normally available. Because backups are performed on the Standby, high-availability DB instances can avoid performance degradation caused by backups. You can find the various features provided by high-availability DB instances in [High-Availability DB Instances](db-instance/#ha-db-instance).

<a id="network"></a>
### Network { #network }

When create DB instance, you have to select the VPC subnet to connect to. You can communicate without a separate floating IP between instances of Compute service connected to the same subnet and you will not be charged for network traffic. DB instances block all network access by default, so you must apply DB security groups if you want to connect.

!!! danger "Caution"
    You cannot change the subnet of a DB instance that has already been created.

<a id="floating-ip"></a>
### Floating IP { #floating-ip }

To access DB instance from the outside, you must connect the floating IP to DB instance. You can create a floating IP only if you connect the subnet to which the Internet Gateway is connected. Floating IP is charged upon use, and separately, if traffic is directed to the Internet through floating IP, it is charged separately.

<a id="parameter-group"></a>
### Parameter group { #parameter-group }

A parameter group is a set of parameters that allow you to set up a database installed on DB instance. You have to select one parameter group when creating a DB instance. You can change parameter groups freely after creating. Refer to [Parameter Group](parameter-group/) for a detailed description of parameter groups.

<a id="db-security-group"></a>
### DB Security Group { #db-security-group }

DB security groups are used to restrict access in case of external intrusion. You can allow access to specific port ranges or database ports for incoming and outgoing traffic. You can apply multiple DB security groups to DB instance. For more details on DB security groups, see the [DB security groups](db-security-group/).

<a id="backup"></a>
### Backup { #backup }

You can configure the DB instance's database to be backed up periodically, or create a backup at any time from the console. Performance may degrade while a backup is in progress. To avoid affecting service, we recommend that you perform backups during off-peak hours. If you do not want backup to degrade performance, you can use a high-availability configuration, back up only the incremental data since the previous backup, or perform backups from a read replica. Backup files are stored in internal backup storage and charges are incurred based on the backup capacity. If necessary, you can export them to NHN Cloud object storage. We recommend that you configure periodic backups to prepare for unexpected failures. For more information about backups, see [Backup and Restore](backup-and-restore/).

<a id="maintenance"></a>
### Maintenance { #maintenance }

The Maintenance feature allows you to schedule various changes to your DB instance at your preferred time. Since tasks such as modifying instances or upgrading the DB engine and operating system require a restart, downtime may occur. By scheduling a maintenance duration, you can ensure these operations occur during periods of low service load.

<a id="maintenance-duration"></a>
#### Maintenance Duration

You can set a maintenance duration when creating or modifying a DB instance. If no duration is specified, a 30-minute slot will be automatically assigned at random between 10 PM and 6 AM. Note that the maintenance duration cannot overlap with the automated backup duration.

!!! tip "Tip"
    The maintenance window consists of the maintenance day, the maintenance start time, and the maintenance window duration (in 30-minute increments).

<a id="maintenance-task"></a>
#### Maintenance Task

Maintenance tasks are categorized into User Maintenance and Provider Maintenance.

**User Maintenance Task**

A task that users manually schedule and execute.

* DB instance modifications (e.g., changing instance specs, port updates, parameter group changes)
* DB engine version upgrade
* DB instance OS upgrade

**Provider Maintenance Task**

A maintenance task provided by NHN Cloud.

* Apply parameter group changes
* Migration for hypervisor maintenance

<a id="maintenance-execution-time"></a>
#### Maintenance Execution Time

You can choose when to apply maintenance tasks.

* **Apply Immediately**: apply immediately upon request.
* **Apply in the Next Maintenance Duration**: apply during the next maintenance duration.

<a id="maintenance-status"></a>
#### Maintenance Status

You can check the maintenance status of each instance in the DB instance list.

| Status      | Description                                    |
|---------|---------------------------------------|
| None | There are no scheduled or pending maintenance tasks. |
| Next Applied | A user maintenance task is scheduled to run in the next maintenance duration. |
| Applying | A maintenance task is in progress. |
| Required | A required provider maintenance task is pending. |
| Available | A non-required provider maintenance task is pending/in preparation. |

!!! tip "Tip"
    The maintenance status is not displayed for the Standby of a high availability DB instance.

<a id="maintenance-tab"></a>
#### Maintenance Tab

You can find the following information on the Maintenance tab of the DB instance details page:

* Maintenance start day and duration
* Next maintenance duration
* Maintenance status
* Upcoming maintenance tasks (Scheduled for the next duration)
* Pending maintenance tasks

Upcoming maintenance tasks can be excluded from the maintenance duration clicking the **Hold** or **Delete** buttons. For pending Provider maintenance tasks, you can manually apply them by selecting either **Apply Immediately** or **Apply in the Next Maintenance Duration**.

<a id="maintenance-execution-order"></a>
#### Execution Order

All tasks within the maintenance duration are executed sequentially in the order they were registered. However, mandatory maintenance tasks that have expired will be prioritized and executed first. Any tasks not completed within the current duration will be rescheduled to the next maintenance duration.

!!! tip "Note"
    If the maintenance window starts while automatic backup or a DB instance is in the 'Working' state, and the maintenance time keeps being delayed, the maintenance is skipped and will run in the next maintenance window. An event is generated when a maintenance task is skipped.

<a id="default-notification"></a>
### Default Notification { #default-notification }

When you create a DB instance, you can set default notifications. If setting default notifications, it will create a new notification group with the name `{DB instance name}-default` and will automatically set the notification items below. You can freely modify and delete alert groups that are created as default notifications. For more details on the notification group, see the [ notification group ](notification/).

| Item                       | Comparison Method | Threshold value | Duration  |
|----------------------------|-------------------|-----------------|-----------|
| CPU Usage                  | >=                | 80%             | 5 minutes |
| Storage Remaining Usage    | <=                | 5,120MB         | 5 minutes |
| Database Connection Status | <=                | 0               | 0 minute  |
| Storage usage              | >=                | 95%             | 5 minutes |
| Data Storage Defects       | <=                | 0               | 0 minute  |
| Connection Ratio           | >=                | 85%             | 5 minutes |
| Memory Usage               | >=                | 90%             | 5 minutes |
| Slow Query                 | >=                | 60 counts/min   | 5 minutes |

<a id="deletion-protection"></a>
### Deletion Protection { #deletion-protection }

If you activate deletion protection, you can protect DB instances from accidental deletion.

<a id="db-instance-list"></a>
## DB Instance List { #db-instance-list }

You can view DB instances created from the console. It can be viewed as groups of DB instances or as individual DB instances.

![db-instance-list_en]({{url.cdn}}/26.01.13/db-instance-list_en.png)

❶ You can change DB instance screen mode.  
❷ By clicking on the button, you can open or close a DB instance that belongs to a group.  
❸ It displays the most recently collected monitoring indicators.  
❹ You can view the current status.  
❺ A spinner will appear if have any work in progress.  
❻ You can change the search criteria.


The status of the DB instance consists of the following values and changes depending on the behavior of the user and the current status.

| Status                | Description                                            |
|-------------------|-----------------------------------------------|
| BEFORE_CREATE     | Before Create                                         |
| AVAILABLE         | Available                                         |
| STORAGE_FULL      | Insufficient capacity                                         |
| FAIL_TO_CREATE    | Failed to create                                         |
| FAIL_TO_CONNECT   | Linking failed                                         |
| REPLICATION_STOP  | Replication stopped                                         |
| FAILOVER          | Failover complete                                      |
| SHUTDOWN          | Stopped                                           |

Search conditions that can be changed are as follows.

![db-instance-filter_en]({{url.cdn}}/26.01.13/db-instance-filter_en.png)

❶ You can search for DB instances with filtering conditions that require parameter changes to be applied.

<a id="db-instance-details"></a>
## DB Instance Details { #db-instance-details }

You can select a DB instance to view the details.

![db-instance-detail_en]({{url.cdn}}/26.01.13/db-instance-detail_en.png)

❶ When you click on the domain of the connection information, a pop-up window appears to confirm the IP address.
❷ When you click on DB Security Group, a pop-up window appears where you can check DB security rules.
❸ Click on a parameter group to go to a screen where you can see the parameters.
❹ Drag and drop the screen to adjust the height of the Details information panel.
❺ You can adjust the height of the Details information panel to a pre-determined height.

<a id="access-information"></a>
### Access Information { #access-information }

An internal domain is issued when a DB instance is created. The internal domain points to an IP address that belongs to the user's VPC subnet. For a high availability DB instance, the internal domain does not change even when a failover occurs and the Standby becomes the new Primary. Therefore, unless there is a specific reason, the connection information for your application must use the internal domain.

If you created a floating IP, issue additional external domains. The external domain points to the address of the floating IP. Because external domains or floating IPs are accessible from outside, you must protect the DB instance by setting the rules of DB security group appropriately.

<a id="virtual-ip"></a>
### Virtual IP { #virtual-ip }

DB instances created after the May 2025 maintenance support VIP (virtual IP). A VIP refers to an IP address that belongs to the user's VPC subnet. For high-availability DB instances, the VIP always points to the current Primary. The connection information for your application must use the VIP directly or use the internal (VIP) domain that points to the VIP.

For DB instances created before May 2025, you can add a VIP by clicking the **Add VIP** menu in the NHN Cloud console. When a VIP is added, both the existing internal domain and the internal (VIP) domain are provided. However, during failover, the VIP points to the Standby, but the internal domain may not point to the Standby in some cases. Therefore, when a VIP is added, you must update the connection information in your application to use the VIP or the internal (VIP) domain.

!!! tip "Note"
    After the September 2025 maintenance, VIP is no longer supported in the Japan (Tokyo) region and some public projects. (Instances or DB instances in other subnets cannot connect via VIP.)
    In environments where VIP is not supported, VIPs created after the May 2025 maintenance are not deleted, but can no longer be viewed in the console.

<a id="log"></a>
### Log { #log }

You can view and download various log files from Log tab of DB instance. Log files are rotated to the settings set as below. Some log files can be enabled or disabled in the parameter group.

| Item               | Rotate settings   | Whether or not to change  | Related parameter                                                                |
|------------------|-----------|-------|------------------------------------------------------------------------|
| error.log        | 10 of 100MB | fixed    |                                                                        |
| slow_query.log   | 40 of 100MB | fixed    | `slow_query_log`                                                       |
| general_log.log  | 40 of 100MB | fixed    | `general_log`                                                          |
| server_audit.log | 30 of 20MB  | Changeable | `server_audit_logging`<br />`server_audit_file_rotations`              |
{{#if (eq engine.lowerCase "mysql")}}
| mysql-bin.xxxxxx | 5 days         | Changeable | `binlog_expire_logs_seconds` (8.X version)<br />`expire_logs_days` (5.X version) |
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}
| mysql-bin.xxxxxx | 5 days         | Changeable | `binlog_expire_logs_seconds` |
{{/if}}

![db-instance-detail-log_en]({{url.cdn}}/26.01.13/db-instance-detail-log_en.png)

❶ Click on **View Logs**, and you will see a pop-up window where you can check the contents of the log file. You can check logs up to 65,535 Bytes.
❷ When **Import** is clicked, the request is made to download the log file for DB instance.
❸ When download is ready, **Download** button will be exposed. Click to download the log.

!!! danger "Caution"
    When you click **Import**, the log file is uploaded to Backup Storage for about 5 minutes, and you will be charged for Backup Storage for the size of the log file.
    When you click **Download**, you will be charged for internet traffic for the size of the log file.

❹ For binary logs, you can download them in two forms. Click on **Import** and you will see a pop-up window where you can select the type of binary log.

![db-instance-detail-log-bin_en]({{url.cdn}}/24.03.12/db-instance-detail-log-bin_en.png)

❺ Select to use the mysqlbinlog utility to convert the binary log into SQL file and then download it.

<a id="db-instance-details-maintenance"></a>
### Maintenance { #db-instance-details-maintenance }

The Maintenance tab allows you to monitor settings and status, and manage maintenance operations for your DB instance.

![db-instance-detail-maintenance_en]({{url.cdn}}/26.01.13/db-instance-detail-maintenance_en.png)

<a id="db-instance-details-maintenance-maintenance-information"></a>
#### Maintenance Information

At the top of the Maintenance tab, you can view the maintenance configuration details for the current DB instance.

| Item | Description |
|------------------|-------------------------------------------------------------|
| Maintenance Start Day | The maintenance start day set for the DB instance. |
| Maintenance Duration | The maintenance duration range set for the DB instance. |
| Next Maintenance Duration | The date and time when the maintenance task is next scheduled to run. |
| Maintenance Status | Indicates the current maintenance status. This can be one of **None**, **Next Apply**, **Applying**, **Required**, or **Available**. |

!!! tip "Tip"
    Even if you have not set a maintenance window, you can check the randomly assigned maintenance window.

<a id="db-instance-details-maintenance-upcoming-maintenance"></a>
#### Upcoming Maintenance

Upcoming Maintenance is a list of tasks scheduled to be executed during the next maintenance duration. When you perform actions such as modifying a DB instance or upgrading the DB engine version and select **Apply in the Next Maintenance Duration**, the task is added to this list.

| Item | Description |
|------------|----------------------------------|
| Description | A description of the maintenance task. |
| Type | The type of maintenance task. |
| Status | The current status of the maintenance task. |
| Required | Indicates whether the maintenance task is required. |
| Registration Date | The date the maintenance task was registered. |
| Mandatory Date | If the task is required, it will be automatically applied after this date. |

Upcoming maintenance tasks can be excluded from the maintenance duration by selecting them and clicking **Delete** or **Hold**.
If deleted, these tasks are canceled. To apply them again in a future duration, you must perform the original action once more.
Provider maintenance tasks will be moved to the Pending Maintenance list. You can move them back to the Upcoming Maintenance list at any time from the Pending Maintenance list.

<a id="db-instance-details-maintenance-pending-maintenance"></a>
#### Pending Maintenance

Pending Maintenance is a list of Provider maintenance tasks provided by NHN Cloud. This includes operations such as applying parameter group changes and migrations for hypervisor maintenance.

| Item        | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Description | A description of the maintenance task.                                      |
| Type        | The type of maintenance task.                                               |
| Status      | The current status of the maintenance task.                                 |
| Mandatory   | Indicates whether the maintenance task is mandatory.                        |
| Forced Date | If the task is mandatory, it will be applied automatically after this date. |

You can select a pending maintenance task and then click **Next** to select the execution time.

**Apply Immediately**: apply immediately upon request. Click **Confirm** to execute immediately.
![db-instance-detail-maintenance-immediately_en]({{url.cdn}}/26.01.13/db-instance-detail-maintenance-immediately_en.png)

**Apply in the Next Maintenance Duration**: apply during the next maintenance duration. Click **Confirm** to move this task to the Upcoming Maintenance list.
![db-instance-detail-maintenance-schedule_en]({{url.cdn}}/26.01.13/db-instance-detail-maintenance-schedule_en.png)

!!! danger "Caution"
    For mandatory maintenance tasks, you can choose when to apply them before the enforcement time. After the enforcement time, the tasks are automatically performed during the next maintenance window.

!!! tip "Note"
    When a restart is required to apply a maintenance task, a popup screen appears where you can select additional options such as failover and backup. For highly available DB instances, you can use failover to restart and minimize service downtime.

<a id="db-schema-and-users"></a>
### DB Schema and Users { #db-schema-and-users }

DB instance's **DB Schema and User** tab allows you to query and control the schema and users created in the database.

<a id="db-schema-and-users-db-schema-created"></a>
#### DB schema created

![db-instance-detail-schema_en]({{url.cdn}}/26.01.13/db-instance-detail-schema_en.png)

❶ Click on **Create** and a pop-up window will appear where you can enter the name of DB schema.
❷ You can create a DB schema by entering the DB schema name and clicking on **Confirm**.

DB schema name has the following restrictions.

* You can only use alphabets, numbers, and _ from 1 to 64 characters and the first letter can only contain alphabetic characters.
* `information_schema`, `performance_schema`, `db_helper`, `sys`, `mysql`, `rds_maintenance` are not allowed to be used as DB schema name.

You cannot modify the name of the DB schema that has been created.

<a id="db-schema-and-users-db-schema-deleted"></a>
#### DB schema deleted

![db-instance-detail-schema-delete-en]({{url.cdn}}/26.01.13/db-instance-detail-schema-delete-en.png)

❶ Select DB schema you want to delete and click on the drop-down menu.
❷ Click on **Delete** menu and pop-up window will appear to confirm deletion. You can request to delete by clicking on **Confirm**.

<a id="db-schema-and-users-create-a-user"></a>
#### Create a user

![db-instance-detail-user-create-en]({{url.cdn}}/26.01.13/db-instance-detail-user-create-en.png)

❶ Click on **+Create** and you'll see the Add User pop-up window.
❷ Enter a user ID.

User ID has the following restrictions.

* It must be between 1 and 32 characters.
* `mysql.session`, `mysql.sys`, `mysql.infoschema`, `sqlgw`, `admin`, `etladm`, `alertman`, `prom`, `rds_admin`, `rds_mha`, `rds_repl` are not allowed to be used as User ID.

❸ Enter a password.
❹ Enter a Host IP to allow connection. Using `%` character lets you range the Host IPs you want to allow. For example, `1.1.1.%` means all IPs between `1.1.1.0` and `1.1.1.255`.
❺ Select the permissions that you want to grant to users. The permissions and descriptions that you can grant are as follows.

**READ**
* You have permission to view.

```sql
GRANT SELECT, SHOW VIEW, PROCESS, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO '{user_id}'@'{host}';
GRANT SELECT ON `mysql`.* TO '{user_id}'@'{host}';
GRANT SELECT, EXECUTE ON `sys`.* TO '{user_id}'@'{host}';
GRANT SELECT ON `performance_schema`.* TO '{user_id}'@'{host}';
```

**CRUD**
* Includes READ permission, and has permission to modify data.

```sql
GRANT INSERT, UPDATE, DELETE, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE ON *.* TO '{user_id}'@'{host}';
```

**DDL**
* Includes CRUD permissions and has permissions to execute DDL queries.

```sql
GRANT CREATE, DROP, INDEX, ALTER, CREATE VIEW, REFERENCES, EVENT, ALTER ROUTINE, CREATE ROUTINE, TRIGGER, RELOAD ON *.* TO '{user_id}'@'{host}';
GRANT EXECUTE ON `mysql`.* TO '{user_id}'@'{host}';
```

**CUSTOM**
* When restoring a DB instance from an external database backup, all users that exist in the database are represented with the CUSTOM permission.
* You cannot check what permissions are in the CUSTOM permission template.
* If you change from one CUSTOM permission template to another permission template, you cannot change back to a CUSTOM permission template.

{{#if (eq engine.lowerCase "mysql")}}
❻ Select the plug-in to apply to user authentication. The following plug-ins are available for each version.

| Authentication Plugin | Supported Versions                            |
|-----------------------|-----------------------------------------------|
| mysql_native_password | 8.4 version or below                          |
| sha256_password       | 5.7.33 version or later and below 8.0 version |
| caching_sha2_password | 8.0 version or later                          |

❼ Select the connection encryption option for DB instances.

| TLS Option | Description                                                                                                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| NONE       | Encrypted connections are not applied.                                                                                                               |
| SSL        | Encrypted connections are applied.                                                                                                                   |
| X509       | An encrypted connection is applied and a certificate is required for access. The certificate required for access can be downloaded from the console. |

!!! tip "Tip"
    The user authentication plugin and TLS Option are supported in MySQL 5.7.33 or later.

<a id="db-schema-and-users-download-authentication-certificate"></a>
#### Download Authentication Certificate

If you set TLS option for your account to X509, you need a certificate to access the DB instance.

![db-instance-detail-user-cert-en]({{url.cdn}}/26.01.13/db-instance-detail-user-cert-en.png)
![db-instance-detail-user-cert-down-en]({{url.cdn}}/24.03.12/db-instance-detail-user-cert-down-en.png)

❶ Select the DB instance to which you want to download the certificate.
❷ Click on drop-down menu.
❸ Click on **Download Certificate** and you will see a pop-up window where you can download the certificate.
❹ Click on **Import** at the bottom of the file you want to download.
❺ When you are ready to download, the **Download** button appears. Click to download the certificate file.

!!! danger "Caution"
    When you click **Import**, the certificate file is uploaded to Backup Storage for about 5 minutes, and you will be charged for Backup Storage by the size of the certificate file.
    When you click **Download**, you will be charged for internet traffic by the size of the certificate file.
{{/if}}

<a id="db-schema-and-users-edit-users"></a>
#### Edit users

![db-instance-detail-user-modify-en]({{url.cdn}}/26.01.13/db-instance-detail-user-modify-en.png)

❶ Click on **Modify** on the user row you want to modify and you will see a pop-up window where you can modify your information.
❷ If you do not enter Password, it will not be changed.
❸ If you want to change the plug-in that applies to user authentication, you must change the password.

<a id="db-schema-and-users-deleting-a-user"></a>
#### Deleting a user

![db-instance-detail-user-delete-en]({{url.cdn}}/26.01.13/db-instance-detail-user-delete-en.png)

❶ Select the user you want to delete and click on the drop-down menu.
❷ Click on **Delete** and **Confirm Delete** pop-up window will appear. You can request deletion by clicking on **Confirm**.

<a id="modify-db-instance"></a>
## Modify DB instance { #modify-db-instance }

You can easily change various items in DB instances created through console. Changes requested are applied to DB instances sequentially. If restarting is required during the application process, apply all changes and restart DB instance. The following are the items that cannot be changed and require restarting.

| Item           | Whether or not you can change  | Whether or not you need to restart                |
|--------------|----------|-------------------------|
| Availability Zone       | No      |                         |
| DB Engine        | Yes        | Yes                       |
| DB Instance Type   | Yes        | Yes                       |
| Data Storage Type  | No      |                         |
| Whether high availability or not      | Yes        | No                     |
| Ping interval      | Yes        | No                     |
| Ping method      | Yes        | No                     |
| Name           | Yes        | No                     |
| Description           | Yes        | No                     |
| DB port        | Yes        | Yes                       |
| VPC Subnet      | No      |                         |
| Floating IP       | Yes        | No                     |
| Parameter group      | Yes        | Determined by whether or not to restart changed parameters |
| DB Security Group     | Yes        | No                     |
| Backup Settings        | Yes        | No                     |
| Storage Auto Scale | Yes        | No                     | 
| Schema & User Control | Yes        | No                     |

For high-availability DB instances, if there are any changes to items that need to be restarted, it provides a restart capability using failover to increase stability and reduce disconnected time.

![modify-ha-popup-en]({{url.cdn}}/26.01.13/modify-ha-popup-en.png)


❶ Using the maintenance feature, you can modify a DB instance by selecting **Apply at next maintenance window** or **Apply immediately**.
❷ If you do not use restart with failover, changes are applied sequentially to the Primary and Standby before the DB instance is restarted. For more information, see [Manual Failover](db-instance/#manual-failover) of High Availability DB Instances.

<a id="db-schema-direct-user-control"></a>
### DB Schema & Direct User Control { #db-schema-direct-user-control }

RDS for {{engine.pascalCase}} provides management from the console to make it easier to manage DB schemas and users, but it also provides the feature to set up so that users can control themselves. Direct control grants all currently created users the following privileges.

```sql
GRANT CREATE,DROP,LOCK TABLES,REFERENCES,EVENT,ALTER,INDEX,INSERT,SELECT,UPDATE,DELETE,CREATE VIEW,SHOW VIEW,CREATE ROUTINE,ALTER ROUTINE,EXECUTE,CREATE USER,PROCESS,RELOAD,REPLICATION SLAVE,REPLICATION CLIENT,SHOW DATABASES, CREATE TEMPORARY TABLES,TRIGGER ON *.* TO '{user_id}'@'{host}' WITH GRANT OPTION;
```

!!! danger "Caution"
    If you disable Direct Control after enabling it:
    * Already granted permissions are not revoked. If you use the command to add DB schema or users at this time, the data in the console may not match.
    * All users that exist in the database, regardless of the permissions granted to them, are represented by CUSTOM permissions.

<a id="upgrade-db-instance-operating-system"></a>
## Upgrade DB instance operating system { #upgrade-db-instance-operating-system }
Supports DB instance operating system upgrades. By upgrading the operating system, you can resolve security vulnerabilities or respond to the end of life (EOL) of the operating system.
Caution is required when upgrading the operating system because it may result in service disruption. Highly available DB instances can minimize service disruption through failover.

You can check the operating system information of the current DB instance on the DB instance details screen.
![db-instance-os-upgrade-en.png]({{url.cdn}}/26.01.13/db-instance-os-upgrade-en.png)

❶ You can check the operating system information of the DB instance.
❷ If the operating system is eligible for a version upgrade, the **OS Version Upgrade** button appears.

Operating system version upgrades behave differently depending on whether you are in a highly available configuration. For high availability instance, the operating system version upgrade is performed using failover. For non-high availability, the operating system version upgrade is performed by restarting the DB instance.

When you click the OS Version Upgrade button for a single DB instance, the following pop-up screen appears.
The maintenance feature is also available when upgrading the operating system version of a single DB instance.
![db-instance-os-upgrade-single-popup-en.png]({{url.cdn}}/26.01.13/db-instance-os-upgrade-simple-popup-en.png)

When you click the Upgrade Operating System Version for High Availability DB Instance button, the pop-up screen shown below appears. For more information, see [Manual failover item](db-instance/#manual-failover) of High Availability DB Instances.
![os-upgrade-ha-popup-en.png]({{url.cdn}}/26.01.13/os-upgrade-ha-popup-en.png)

❶ You can use the maintenance feature through the Maintenance Application Method settings.
❷ Only the With Failover method is provided.

<a id="delete-db-instance"></a>
## Delete DB Instance { #delete-db-instance }

You can delete DB instances that you no longer use. Deleting a Primary also deletes all Standby and Read Replica instances belonging to the same replication group. A deleted DB instance cannot be recovered, so we recommend that you enable the deletion protection setting for important DB instances.

<a id="backup-2"></a>
## Backup { #backup-2 }

You can prepare in advance to recover the database of your DB instance in case of failure. You can perform backups from the console whenever necessary or you can set up periodic backups. Refer to [Backup](backup-and-restore/#overview) for more information.

<a id="restoration"></a>
## Restoration { #restoration }

You can use backups to restore data to any point in time. Restore always creates a new DB instance and cannot be restored to an existing DB instance. Refer to [Restore](backup-and-restore/#restore) for more information.

<a id="secure-capacity"></a>
## Secure Capacity { #secure-capacity }

If the capacity of the data storage is insufficient due to the excessive generation of binary logs from rapid load, you can delete the binary logs using Secure Capacity feature in console. When you select Secure Capacity in console, you will see a pop-up window where you can select the binary logs for DB instance.
Select the binary log and press **Confirm** to delete all binary logs created prior to the selected item. The Secure Capacity is a feature that temporarily secures capacity. If you keep running out of capacity, you must set the storage period for the binary log or expand the size of the data storage to match your service load.

{{#if (eq engine.lowerCase "mysql")}}
!!! tip "Note"
    For MySQL version 5.7 and earlier, you can set the binary log retention period using the `expire_logs_days` parameter. For MySQL version 5.8 and later, use the `binlog_expire_logs_seconds` parameter.
{{/if}}
{{#if (eq engine.lowerCase "mariadb")}}
!!! tip "Note"
    You can set the binary log retention period using the `binlog_expire_logs_seconds` parameter.
{{/if}}

!!! danger "Caution"
    Depending on the deleted binary logs, restoration to a specific point in time may not be available.

<a id="expand-storage-size"></a>
## Expand Storage Size { #expand-storage-size }

You can scale up the data storage size of a DB instance. The expansion takes effect immediately without restarting the DB instance.

<a id="auto-scale-storage"></a>
## Auto Scale Storage { #auto-scale-storage }

You can automatically scale the data storage size of a DB instance. With auto storage expansion, you can maintain the availability of your database by automatically scaling up when data storage runs out of capacity.

To use auto storage scaling, you must enable ** Auto Scale Storage** when creating and modifying DB instances. 

When you enable auto scale storage, you can set three options
* Storage Auto Scale Conditions: Automatically expand storage when storage utilization is above a set value for more than 5 minutes.
* Storage Auto Scale Max: The maximum size that storage auto-scale can grow to.
* Storage Auto Scale Cooldown: Set the amount of time after storage auto scale cooldown runs once before the feature is enabled again.

The amount of increase when the auto scale storage feature runs is set to the largest of the following values
* 10 GB
* 10% of storage size
* Data storage usage growth in the last hour * cooldown (in hours)

<a id="apply-parameter-group-changes"></a>
## Apply parameter group changes { #apply-parameter-group-changes }

Changes made to a parameter group linked to a DB instance are not automatically applied to that instance.
If the parameters currently applied to the DB instance differ from the settings in the linked parameter group, an **Apply Parameter Changes** maintenance task is created, and the maintenance status is updated.

You can apply parameter group changes to a single DB instance or multiple DB instances using the following methods:

![db-instance-list-parameter-en]({{url.cdn}}/26.01.13/db-instance-list-parameter-en.png)

❶ Select the target DB instance, then click **Apply Parameter Group Changes** from the dropdown menu.

You can apply parameter group changes by choosing either **Apply in the Next Maintenance Duration** or **Apply Immediately** through the maintenance feature.

If the parameters in the parameter group that require a restart are changed, the DB instance is restarted during the process of applying the changes.

High-availability DB instances provide a restart feature using failover to increase stability and reduce disconnected time.

![db-instance-parameter-ha-en]({{url.cdn}}/26.01.13/db-instance-parameter-ha-en.png)

If you do not use restart with failover, the changes are applied sequentially to the Primary and Standby, and then the DB instance is restarted. For more information, see [Manual Failover](db-instance/#manual-failover) of High Availability DB Instances.

<a id="recover-from-backup-in-object-storage"></a>
## Recover from backup in object storage { #recover-from-backup-in-object-storage }

You can upload an external {{engine.pascalCase}} backup file to NHN Cloud object storage and restore it to a DB instance of RDS for {{engine.pascalCase}}. For more information, see [Restore from external {{engine.pascalCase}} backup](backup-and-restore/#restore-from-external).

<a id="export-backup-files-to-the-object-storage-after-backup"></a>
## Export backup files to the object storage after backup { #export-backup-files-to-the-object-storage-after-backup }

After a backup, you can export the backup file to object storage. For more information, see [Backup export](backup-and-restore/#export).

<a id="read-replica"></a>
## Read Replica { #read-replica }

To improve read performance, you can create Read Replicas that can be used as read-only. You can create up to 5 Read Replicas per Primary. Read Replicas of a Read Replica cannot be created.

<a id="create-read-replications"></a>
### Create Read Replica { #create-read-replications }

To create a Read Replica, you need a backup file created with the table lock option and a binary log from one of the DB instances in the replication group. If you do not have a backup file, select the DB instance to perform the backup in the following order.

❶ Read Replicas with automatic backups enabled
❷ Standbys with automatic backups enabled
❸ Primaries with automatic backups enabled

If no DB instance meets the criteria, the request to create a Read Replica fails.

!!! danger "Caution"
    Read Replica creation time may increase in proportion to the size of the database on the Primary.
    For DB instances that are backed up, there might be a drop in storage I/O performance during the Read Replica creation process.

!!! tip "Note"
    You may be charged for backup storage by the size of the binary log required during the Read Replica creation process.

You need to create a Read Replica from the console.

![db-instance-replica-create-en]({{url.cdn}}/26.01.13/db-instance-replica-create-en.png)

❶ After selecting the original DB instance, click **Create Read Replica**

You can create a Read Replica with the following settings.

<a id="create-read-replications-non-editable-items"></a>
#### Non-Editable Items

When creating a Read Replica, the items listed below cannot be changed because they follow the settings of the original DB instance.

* DB Engine
* Data Storage Type
* User VPC Sub-nets

{{#if regions.[1]}}
<a id="create-read-replications-read-replica-region"></a>
#### Read Replica Region

When selecting a region in which to create a read replica, if region peering is supported, you can create a read replica on a subnet that belongs to a VPC in a different region by connecting region peering between VPCs that exist in different regions. However, if you select a region different from that of the source DB instance, replication lag may occur, and DB version upgrades are not supported.

!!! danger "Caution"
    Even if region peering is connected, if the route settings are incorrect, Read Replica creation might fail or replication might stop.
{{/if}}

<a id="create-read-replications-availability-zone"></a>
#### Availability Zone

Select the availability zone for the Read Replica. For more details, see the [Availability Zone](#_1) section.

<a id="create-read-replications-db-instance-type"></a>
#### DB Instance Type

It is recommended to create a Read Replica with the same specification as or a higher specification than the Primary. Using a lower specification may result in replication latency.

<a id="create-read-replications-data-storage-size"></a>
#### Data Storage Size

It is recommended to make it the same size as the source DB instance. If you set a smaller size, the replication process may be interrupted due to insufficient data storage capacity.

<a id="create-read-replications-floating-ip"></a>
#### Floating IP

Select whether to use a floating IP for the read replica. For more information, see [Floating IP](#ip).

<a id="create-read-replications-parameter-group"></a>
#### Parameter group

We recommend that you select the same parameter group as the source DB instance when selecting a parameter group for a Read Replica, unless replication-related setting changes are required. For more information about parameter groups, see [Parameter Group](parameter-group/).

<a id="create-read-replications-db-security-group"></a>
#### DB Security Group

Select the DB security group to apply to the Read Replica. Since the rules required for replication are applied automatically, you do not need to add replication-related rules separately to the DB security group. For more information about DB security groups, see [DB Security Group](db-security-group/).

<a id="create-read-replications-backup"></a>
#### Backup

Select the backup settings for the read replica. For more details, see [Backup and Restoration](backup-and-restore/).

<a id="create-read-replications-default-notification"></a>
#### Default notification

Select whether or not to enable default notifications, refer to [default notifications](#_7) for a detailed description.

<a id="create-read-replications-deletion-protection"></a>
#### Deletion Protection

Select whether or not to enable deletion protection. Refer to [Deletion Protection](#_8) for a detailed description.

<a id="promote-read-replication"></a>
### Promote Read Replica { #promote-read-replication }

The process of breaking the replication relationship with the Primary and converting a Read Replica into a standalone Primary is called promotion. A promoted Primary operates as a standalone DB instance. If replication latency exists between the Read Replica to promote and the Primary, it cannot be promoted until such latency is resolved. Once a DB instance is promoted, it cannot be reverted to its previous replication relationship.

!!! danger "Caution"
    Promotion cannot be performed when the primary DB instance is in an abnormal state.

!!! tip "알아두기"
    You can perform the promotion from the console in the same region where the Read Replica is located.

<a id="force-promotion-of-read-replicas"></a>
### Force Promote Read Replicas { #force-promotion-of-read-replicas }

Performs a forced promotion based on the current data of the Read Replica, regardless of the state of the Primary or source region. If there is replication lag, this can result in data loss. Therefore, we recommend that you do not use this feature unless you need to urgently put the Read Replica into service.

<a id="stop-replication-of-read-replicas"></a>
### Stop replication of read replicas { #stop-replication-of-read-replicas }

Replication on a Read Replica can stop for various reasons. If the status of a Read Replica is `Replication down`, you must quickly identify the cause and restore it to normal. If the `Replication down` status persists for an extended period, replication lag increases. If the binary log required for recovery is not available, you must rebuild the Read Replica. You can identify the cause of the replication failure by running the `SHOW SLAVE STATUS` command on the Read Replica. If the `Last_Errno` value is 1062, you can call the procedure below until the error disappears.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_skip_repl_error();
```

<a id="rebuild-read-replica"></a>
### Rebuild Read Replica { #rebuild-read-replica }

If a replication issue with a Read Replica cannot be resolved, you can restore it to a normal state by rebuilding it. During this process, all databases on the Read Replica are deleted and rebuilt from scratch based on the Primary database. The Read Replica is unavailable while it is being rebuilt. To rebuild a Read Replica, you need a backup file created with the table lock option and a binary log from one of the DB instances in the replication group. If you do not have a backup file, refer to [Create Read Replica](#create-read-replications) for the behavior and precautions.

!!! tip "Note"
    After rebuilding, the access information (domain, IP) remains unchanged.

<a id="restart-db-instance"></a>
## Restart DB instance { #restart-db-instance }

You can restart a DB instance to restart {{engine.pascalCase}} or to manually fail over a high-availability DB instance. We recommend that you perform the restart during periods of low service load to minimize restart time. For a high-availability DB instance, if you do not use restart with failover, the Standby server is restarted first, followed by the Primary server. For information about restarting using the failover feature, see [Manual Failover](#manual-failover).

To restart a DB instance from the console

![db-instance-restart-en]({{url.cdn}}/26.01.13/db-instance-restart-en.png)

❶ Select the DB instance you want to restart and click on **Restart DB instance** menu from the drop-down menu.

<a id="db-instance-force-restart"></a>
## DB instance force restart { #db-instance-force-restart }

If {{engine.pascalCase}} in the DB instance is not working properly, you can force a restart. For forced restart, issue a SIGTERM command in {{engine.pascalCase}} and wait 10 minutes for it to shut down normally. If {{engine.pascalCase}} shuts down normally within 10 minutes, reboot the virtual machine afterward. If it does not shut down normally within 10 minutes, force a reboot of the virtual machine. If the virtual machine is forced to reboot, some of the transactions you are working on might be lost and the data volume might be corrupted, making recovery impossible. After a forced restart, the state of the DB instance might not return to the available state. Contact Customer Support if this situation occurs.

!!! danger "Caution"
    Because there is a possibility of data loss or data volume corruption, this feature should not be used except in urgent and unavoidable circumstances.

!!! tip "Tip"
    High availability DB instances cannot be force restarted.

To force restart a DB instance, from the console

![db-instance-restart-force-en]({{url.cdn}}/26.01.13/db-instance-restart-force-en.png)

❶ Select the DB instance for which you want a forced restart and from the drop-down menu, click on **Force Restart DB instance** menu.

<a id="change-deletion-protection-settings"></a>
## Change Deletion Protection Settings { #change-deletion-protection-settings }

Enabling Delete Protection protects DB instances from being accidentally deleted. You cannot delete DB instances until Delete Protection is disabled. To change Delete Protection settings

![db-instance-deletion-protection-en]({{url.cdn}}/26.01.13/db-instance-deletion-protection-en.png)

❶ If you select the DB instance for which you want to change the Deletion Protection settings and click on **Change Deletion Protection Settings** menu from the drop-down menu, a pop-up window will appear.

![deletion-protection-popup-en]({{url.cdn}}/24.03.12/deletion-protection-popup-en.png)

❷ Change the Delete Protection settings and click on **Confirm**.

<a id="ha-db-instance"></a>
## High Availability DB Instances { #ha-db-instance }

High-availability DB instances increase availability and data durability, providing a fault-tolerant database. High-availability DB instances consist of a Primary and a Standby, and are created in different availability zones. The Standby is a DB instance for failover and is not normally available. For high-availability DB instances, backups are performed on the Standby.

!!! tip "Note"
    For highly available DB instances, if you use a {{engine.pascalCase}} query statement to force replication from another DB instance or from an external {{engine.pascalCase}} master, high availability and some features will not work properly.

<a id="failure-detection"></a>
### Failure Detection { #failure-detection }

The Standby has a process for detecting failures, which periodically detects the health of the Primary. These detection cycles are called ping intervals, and failover occurs if four consecutive health checks fail. The shorter the ping interval, the more sensitive it is to failures, and the longer the ping interval, the more insensitive it is to failures. It is important to set the appropriate ping interval for your service load.

!!! tip "Notice"
    Note that if the primary's data storage usage fills up, the high-availability watchdog process detects the failure and initiates failover.

<a id="automatic-failover"></a>
### Automatic Failover { #automatic-failover }

If the Standby fails four consecutive health checks on the Primary, it determines that the Primary is unable to provide service and automatically fails over. To prevent split-brain, all user security groups assigned to the failed Primary are unlinked to block external access, and the Standby assumes the role of the Primary. The A record for the internal domain used for connectivity is changed from the failed Primary to the Standby, so no changes to the application are required. When failover is complete, the failed Primary's type is changed to Failed Over Primary and the Standby's type is changed to Primary. Failover does not occur until the Failed Over Primary is recovered or rebuilt. The new Primary inherits all automatic backups from the Failed Over Primary. When the Primary changes during the failover process, all binary logs are deleted, so point-in-time restore using existing backups is not supported. You can perform a point-in-time restore from the time a new backup is taken on the new Primary.

!!! tip "Note"
    Since the high availability feature is based on domains, if the network environment is such that the client attempting to connect cannot reach the DNS server, the DB instance cannot be accessed through the domain, and normal access is not possible in the event of a failover.
    It takes approximately 3 seconds for the A record change of the internal domain to take effect. The time required may vary depending on the DNS cache policy of the client environment attempting to connect.

!!! danger "Caution"
    If the binary log position number difference between Primary and Standby is 100,000,000 or more, failover will not occur.
    If `replicate-ignore-db` or `replicate-ignore-table` is applied, changes to the corresponding DB or table are not replicated, which may cause failover to fail.

<a id="failed-over-master"></a>
### Failed Over Primary { #failed-over-master }

A Primary that fails and becomes a failover is called a Failed Over Primary. Automatic backups of a Failed Over Primary are not performed, and all other functions except recovering, rebuilding, detaching, and deleting a Failed Over Primary cannot be performed.

<a id="recover-failed-over-master"></a>
### Recover Failed Over Primary { #recover-failed-over-master }

If data integrity was not compromised during the failover process and no binary logs were lost between the time of the failure and the time that recovery is attempted, you can restore the Failed Over Primary and the new Primary to a high availability configuration again. Because the replication relationship with the new Primary is re-established using the Failed Over Primary's database as-is, recovery fails if data integrity has been compromised or if the binary logs required for recovery have been lost. If recovery of a Failed Over Primary fails, you can use rebuild to enable high availability again.

!!! tip "Tip"
    Recovery is not supported for DB instances that experienced a failover before April 11, 2023.

Failed Over Primary를 복구하려면 콘솔에서

![db-instance-failover-repair-en]({{url.cdn}}/26.01.13/db-instance-failover-repair-en.png)

❶ Select the Failed Over Primary you want to recover, and then click the **Recover Failed Over Primary** menu from the drop-down menu.

<a id="rebuild-failed-over-master"></a>
### Rebuild Failed Over Primary { #rebuild-failed-over-master }

If recovery of a Failed Over Primary fails, you can use rebuild to enable high availability again. Unlike recovery, rebuilding removes all of the Failed Over Primary's database and rebuilds it based on the new Primary's database. To rebuild a Failed Over Primary, you need a backup file created with the table lock option and a binary log from one of the DB instances in the replication group. If you do not have a backup file, select the DB instance to perform the backup in the following order.

❶ Read Replica with automatic backup enabled
❷ Primary with automatic backup enabled

If no DB instance meets the criteria, the request to rebuild the Failed Over Primary fails.

!!! danger "Caution"
    The time to rebuild a Failed Over Primary may increase proportionally to the size of the database on the Primary.
    For DB instances that are backed up, there might be a drop in storage I/O performance during the rebuilding of the Failed Over Primary.

!!! tip "Note"
    You may be charged for backup storage by the size of the binary log required for rebuilding the Failed Over Primary.

Failed Over Primary를 재구축하려면 콘솔에서

![db-instance-failover-rebuild-en]({{url.cdn}}/26.01.13/db-instance-failover-rebuild-en.png)

❶ Select the Failed Over Primary you want to rebuild, and then click the **Rebuild Failed Over Primary** menu from the drop-down menu.

<a id="separate-failed-over-master"></a>
### Separate Failed Over Primary { #separate-failed-over-master }

If recovery of the Failed Over Primary fails and data correction is needed, you can separate the Failed Over Primary to disable the high availability feature. The replication relationship between the separated Primary and the new Primary is severed, and each operates as a normal DB instance. Once separated, recovery to the original configuration is not possible.

Failed Over Primary를 분리하려면 콘솔에서

![db-instance-failover-split-en]({{url.cdn}}/26.01.13/db-instance-failover-split-en.png)

❶ Select the Failed Over Primary you want to detach, and then click the **Detach Failed Over Primary** menu from the drop-down menu.

<a id="manual-failover"></a>
### Manual Failover { #manual-failover }

For a high availability DB instance, you can select whether or not to restart with a failover when you perform an operation that accompanies a restart, which is as follows.

* Restart DB instance
* Changes items that need to be restarted
* Apply changes to parameters that require restart
* DB Instances migration for Hypervisor Check

When you restart with failover, the Standby is restarted first. Failover then promotes the Standby to Primary, and the existing Primary assumes the Standby role. At this point, the A record for the internal domain used for connectivity changes from the Primary to the Standby, so no changes to the application are required. The new Primary inherits all automatic backups from the old Primary. Because the Primary changes during the failover process and all binary logs are deleted, point-in-time restoration using existing backups is not supported. You can perform point-in-time restoration from the time a new backup is taken on the new Primary.

!!! tip "Note"
    Since the high availability feature is based on domains, if the network environment is such that the client attempting to connect cannot reach the DNS server, the DB instance cannot be accessed through the domain, and normal access is not possible in the event of a failover.
    It takes about 3 seconds for the A record change of the internal domain to take effect. The actual time may vary depending on the DNS cache policy of the client environment attempting to connect.

!!! danger "Caution"
    If the Seconds_Behind_Master value of the Standby and the Read Replicas included in the replication group is 1 or more, replication delay is considered to have occurred, and manual failover fails. We recommend that you perform manual failover during off-peak hours. Restart failures due to replication delay can be checked through the Events screen.

When restarting with a failover, you can select the following additional items to increase stability.

<a id="manual-failover-progress-current-point-in-time-backup"></a>
#### Progress current point-in-time backup

Because all binary logs are deleted during the failover process, you can proceed with manual backups immediately after the failover is complete.

<a id="manual-failover-manual-control-of-failover"></a>
#### Manual Control of Failover

You can either apply the changes to the Standby first and observe how they evolve, or you can control the timing of the failover directly from the console if you want to execute the failover at a precise time. If you choose to manually control failover, a **Failover** button appears in the console ❶ after the Standby restarts. Clicking this button triggers a failover, which can wait up to five days to execute. If you do not run the failover within 5 days, the action is automatically canceled.

![db-instance-ha-wait-manual-failover-en]({{url.cdn}}/26.01.13/db-instance-ha-wait-manual-failover-en.png)

!!! danger "Caution"
    There is no automatic failover while waiting for failover.

<a id="manual-failover-waiting-for-resolve-replication-delay"></a>
#### Waiting for Resolve Replication Delay

Enabling the Wait for replication latency to clear option allows you to wait for replication latency to clear for the Standby and the Read Replicas included in the replication group.

<a id="manual-failover-block-write-load"></a>
#### Block write load

You have the option to additionally block write loads while resolving replication delays. Blocking the write load puts the Primary into read-only mode just before failover, setting all change queries to fail.

<a id="high-availability-suspended"></a>
### High availability suspended { #high-availability-suspended }

High availability features can be temporarily stopped in situations where a temporary operation can cause a connection outage or heavy load. When a high availability feature is suspended, it does not detect a failure and does not perform a failover action. When a high availability feature is suspended, performing an operation that requires a restart does not restart the suspended high availability feature. It is not recommended to leave data replication in a pause state for an extended period of time because high availability feature is paused and data replication is successful or failure is not detected.

<a id="rebuild-candidate-master"></a>
### Rebuild Standby { #rebuild-candidate-master }

Replication on a Standby can be interrupted for various reasons, such as a network disconnection, improper use of the FEDERATED engine, or the initiation of replication from another Primary. A Standby with a replication interruption does not perform automatic failover. To resolve a replication interruption on a Standby, you must rebuild the Standby. Rebuilding a Standby removes all data from the Standby and rebuilds it from the Primary's database. During this process, if the backup files required for the rebuild do not exist in the Primary database, a backup of the Primary is performed, which can cause performance degradation.

<a id="enginepascalcase-procedure"></a>
## {{engine.pascalCase}} Procedure { #enginepascalcase-procedure }

RDS for {{engine.pascalCase}} provides its own procedures for performing some of the features that are restricted from user accounts to provide user convenience.

<a id="tcrdsactiveprocess"></a>
### tcrds_active_process { #tcrdsactiveprocess }

* Make inquiry of Process list for ACTIVE status, not Sleep status.
* Data output is displayed in order of longest performance time to shortest, and the query value (SQL) is displayed up to a hundred digits.

```
{{engine.lowerCase}}> CALL mysql.tcrds_active_process();
```

<a id="tcrdsprocesskill"></a>
### tcrds_process_kill { #tcrdsprocesskill }

* Forces to end a specific process.
* Process ID to end can be checked in information_schema.processlist, and the process information can be checked using the tcrds_active_process and tcrds_current_lock procedures.

```
{{engine.lowerCase}}> CALL mysql.tcrds_process_kill(processlist_id );
```

<a id="tcrdscurrentlock"></a>
### tcrds_current_lock { #tcrdscurrentlock }

* Check the processes currently waiting for a lock and the process information occupying the lock.
* (w) Process information that column information waits to obtain locks
* (B) Process information that column information occupies locks
* To force shutdown a process that occupies a lock, check the (B)PROCESS column and perform call tcrds_process_kill(process_id).

```
{{engine.lowerCase}}> CALL mysql.tcrds_current_lock();
```

<a id="tcrdsreplchangemaster-prior-to-84"></a>
### tcrds_repl_changemaster (prior to 8.4) { #tcrdsreplchangemaster-prior-to-84 }

* Used to import external {{engine.pascalCase}} DBs into NHN Cloud RDS using replication.
* Replication configuration of NHN Cloud RDS is done with **Create replication** of the console.

```
{{engine.lowerCase}}> CALL mysql. tcrds_repl_changemaster (master_instance_ip, master_instance_port, user_id_for_replication, password_for_replication_user, MASTER_LOG_FILE, MASTER_LOG_POS);
```

* Explaining parameter
    * master_instance_ip : IP of replication target (Master) server
    * master_instance_port: {{engine.pascalCase}} port on the replication target (Master) server
    * user_id_for_replication: an account for replication to access {{engine.pascalCase}} on the replication target (Master) server
    * password_for_replication_user : Password of account for replication
    * MASTER_LOG_FILE : Binary log file name of replication target (Master)
    * MASTER_LOG_POS : Binary log file position of replication target (Master)

```
ex) call mysql.tcrds_repl_changemaster('10.162.1.1',10000,'db_repl','password','mysql-bin.000001',4);
```

!!! danger "Caution"
    The replication account must be created in the replication target (Master) {{engine.pascalCase}}.

<a id="tcrdsreplchangesource-after-84"></a>
### tcrds_repl_changesource (after 8.4) { #tcrdsreplchangesource-after-84 }

* Used when importing an external {{engine.pascalCase}} DB to NHN Cloud RDS using replication.
* Replication configuration for NHN Cloud RDS can be done through **Create Replica** in the console.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_changesource (master_instance_ip, master_instance_port, user_id_for_replication, password_for_replication_user, SOURCE_LOG_FILE, SOURCE_LOG_POS);
```

* Parameter Details
      * master_instance_ip: IP of the replication target (Master) server
      * master_instance_port: {{engine.pascalCase}} port on the replication target (Master) server
      * user_id_for_replication: Replication account to connect to {{engine.pascalCase}} on the replication target (Master) server
      * password_for_replication_user: account passowrd for replication
      * SOURCE_LOG_FILE: Binary log file name of the replication target (Master)
      * SOURCE_LOG_POS: binary log position of the replication target (Master)

```
ex) call mysql.tcrds_repl_changesource('10.162.1.1',10000,'db_repl','password','mysql-bin.000001',4);
```

!!! danger "Caution"
    The replication account must be created in the replication target (Master) {{engine.pascalCase}}.

<a id="tcrdsreplinit"></a>
### tcrds_repl_init { #tcrdsreplinit }

* Reset {{engine.pascalCase}} replication information.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_init();
```

<a id="tcrdsreplslavestop-before-84"></a>
### tcrds_repl_slave_stop (before 8.4) { #tcrdsreplslavestop-before-84 }

* Stop {{engine.pascalCase}} replication.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_slave_stop();
```

<a id="tcrdsreplreplicastop-after-84"></a>
### tcrds_repl_replica_stop (after 8.4) { #tcrdsreplreplicastop-after-84 }

* Stop {{engine.pascalCase}} replication.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_replica_stop();
```

<a id="tcrdsreplslavestart-before-84"></a>
### tcrds_repl_slave_start (before 8.4) { #tcrdsreplslavestart-before-84 }

* Start {{engine.pascalCase}} replication.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_slave_start();

```

<a id="tcrdsreplreplicastart-after-84"></a>
### tcrds_repl_replica_start (after 8.4) { #tcrdsreplreplicastart-after-84 }

* Start {{engine.pascalCase}} replication.

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_replica_start();

```

<a id="tcrdsreplskipreplerror"></a>
### tcrds_repl_skip_repl_error { #tcrdsreplskipreplerror }

* If you run the TCRDS_REPL_SKIP_REPL_ERROR procedure when the Duplicate Key error occurs, you can address the replica error.
      * Before 8.4: perform SQL_SLAVE_SKIP_COUNTER=1.
      * After 8.4: perform SQL_REPLICA_SKIP_COUNTER=1.
* `{{engine.pascalCase}} error code 1062: 'Duplicate entry ? for key ?'`

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_skip_repl_error();
```

<a id="tcrdsreplnextchangemaster-before-84"></a>
### tcrds_repl_next_changemaster (before 8.4) { #tcrdsreplnextchangemaster-before-84 }

* Changes replication information to read the next binary log of master.
* When the following replication errors happens, run tcrds_repl_next_changemaster procedure to resolve the replication errors.

e.g. {{engine.pascalCase}} error code 1236 (ER_MASTER_FATAL_ERROR_READING_BINLOG): Got fatal error from master when reading data from binary log

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_next_changemaster();
```

<a id="tcrdsreplnextchangesource-after-84"></a>
### tcrds_repl_next_changesource (after 8.4) { #tcrdsreplnextchangesource-after-84 }

* Change the replication information so that you can read the next binary log log.
* If you run the TCRDS_REXT_CHANGESOURCE procedure when the following replication error occurs, you can issue the replication error.

e.g. {{engine.pascalCase}} error code 1236 (ER_SOURCE_FATAL_ERROR_READING_BINLOG): Got fatal error from source when reading data from binary log

```
{{engine.lowerCase}}> CALL mysql.tcrds_repl_next_changesource();
```

<a id="tcrdsinnodbmonitorreset"></a>
### tcrds_innodb_monitor_reset { #tcrdsinnodbmonitorreset }

* A procedure that runs innodb_monitor_reset variables that reset the counter in Information_schema.INNODB_METRICS table to zero.
* Run the following query: `SET GLOBAL innodb_monitor_reset = '{counter-name|module_name|pattern|all}';`.
* innodb_monitor_enable, innodb_monitor_disable provides RDS parameter.

```
{{engine.lowerCase}}> CALL mysql.tcrds_innodb_monitor_reset('{counter-name|module_name|pattern|all}');
```

```
ex) CALL mysql.tcrds_innodb_monitor_reset('dml_reads');
CALL mysql.tcrds_innodb_monitor_reset('module_dml');
```

<a id="tcrdsinnodbmonitorresetall"></a>
### tcrds_innodb_monitor_reset_all { #tcrdsinnodbmonitorresetall }

* A procedure to run innodb_monitor_reset_all variables to reset counter value.
* To use innodb_monitor_reset_all, the counter should be in disable state.
* Run the following query: `SET GLOBAL innodb_monitor_reset_all = '{counter-name|module_name|pattern|all}';`.

```
{{engine.lowerCase}}> CALL mysql.tcrds_innodb_monitor_reset_all('{counter-name|module_name|pattern|all}');
```

<a id="tcrdsforeignkeychecks"></a>
### tcrds_foreign_key_checks { #tcrdsforeignkeychecks }
* A procedure that controls the `foreign_key_checks` variable that checks for foreign key constraints.
* Run the following query: `SET GLOBAL foreign_key_checks ='ON|OFF';`.

```
{{engine.lowerCase}}> CALL mysql.tcrds_foreign_key_checks('{0|1|'OFF'|'ON'}');
```

<a id="data-migration"></a>
## Data Migration { #data-migration }

* RDS can be exported as data to or imported from NHN Cloud RDS using mysqldump.
* The mysqldump utility is provided by default when {{engine.pascalCase}} is installed.

<a id="export-using-mysqldump"></a>
### Export using mysqldump { #export-using-mysqldump }

* Prepare and use an instance of NHN Cloud RDS.
* Check that the external instance on which you want to store the data to be exported, or the computer on which the local client is installed, has sufficient capacity.
* If you need to export data outside of NHN Cloud, create Floating IP and connect it to the RDS instance where you want to export the data.
* Export data externally using the mysqldump command below.

<a id="export-using-mysqldump-when-exporting-files"></a>
#### When exporting files

```
mysqldump -h{rds_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

<a id="export-using-mysqldump-exporting-in-enginelowercase-db-out-of-nhn-cloud-rds"></a>
#### Exporting in {{engine.lowerCase}} db out of NHN Cloud RDS

```
mysqldump -h{rds_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --routines --events --triggers --databases {database_name1, database_name2, ...} | mysql -h{external_db_host} -u{external_db_id} -p{external_db_password} --port={external_db_port}
```

<a id="import-by-using-mysqldump"></a>
### Import by using mysqldump { #import-by-using-mysqldump }


* Prepare db outside NHN Cloud RDS to import data.
* Check that the NHN Cloud RDS instance that you import has sufficient capacity.
* Create a Floating IP to connect to the NHN Cloud RDS instance.
* Import data from outside using the mysqldump command below.

```
mysqldump -h{external_db_host} -u{external_db_id} -p{external_db_password} --port={external_db_port} --single-transaction --set-gtid-purged=off --routines --events --triggers --databases {database_name1, database_name2, ...} | mysql -h{rds_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port}
```

<a id="import-by-using-mysqldump-when-error-1227-occurs-during-data-importing"></a>
#### When `ERROR 1227` occurs during data importing

* `ERROR 1227` occurs when a stored object (trigger, view, function, or event) in the mysqldump file has DEFINER definition.
* To resolve the error, delete the `DEFINER` part of the mysqldump file and proceed.

<a id="import-by-using-mysqldump-when-error-1418-occurs-during-data-importing"></a>
#### When `ERROR 1418` occurs during data importing

* `ERROR 1418` occurs when the function declaration in the mysqldump file does not contain NO SQL, READS SQL DATA, or DETERMINISTIC and binary logging is enabled.
    * For detailed information, refer to [The Binary Log](https://dev.mysql.com/doc/refman/8.0/en/binary-log.html) MySQL document.
* To resolve the error, Parameter value of `log_bin_trust_function_creators` of DB instance to which you want to apply mysqldump file should be changed to `1`.

<a id="export-by-using-replication"></a>
### Export by using replication { #export-by-using-replication }

* NHN Cloud RDS data can be exported to an external database by using replication.
* The external database must have the same or later version than NHN Cloud RDS.
* Prepare the NHN Cloud RDS Primary or Read Replica instance from which you want to export data.
* Create and associate a floating IP with the NHN Cloud RDS instance from which you want to export data.
* Use the command below to export data from the NHN Cloud RDS instance to a file.
* When exporting from a Primary RDS instance

```
mysqldump -h{rds_master_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --master-data=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* Exporting out of Read Replica RDS Instances

```
mysqldump -h{rds_read_only_slave_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --dump-slave=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* Open the backed up file and record the MASTER_LOG_FILE and MASTER_LOG_POS written in the annotation separately.
* Check that the external local client or computer on which db is installed has sufficient capacity to back up data from the NHN Cloud RDS instance.
* Add the following options to my.cnf (for winodws my.ini) file in external DB.
* For server-id, enter a value different from the server-id of the parameter entry for the NHN Cloud RDS instance.

```
...
[mysqld]
...
server-id={server_id}
replicate-ignore-db=rds_maintenance
...
```

* Restart external DB.
* Enter the backed up file into an external DB using the command below.

```
mysql -h{external_db_host} -u{external_db_id} -p{external_db_password} --port={external_db_port} < {local_path_and_file_name}
```

* Create an account for replication on the NHN Cloud RDS instance.
* Before setting up a new replication, run the query below to initialize existing replication information that may exist. When you run RESET SLAVE, the existing replication information is initialized.

##### Before 8.4
```
STOP SLAVE;

RESET SLAVE;
```

##### After 8.4
```
STOP REPLICA;

RESET REPLICA;
```

* Run the query on the external DB as shown below, using the account information to be used for replication and the MASTER_LOG_FILE and MASTER_LOG_POS that recorded earlier.

##### Before 8.4
```
CHANGE MASTER TO master_host = '{rds_master_instance_floating_ip}', master_user='{user_id_for_replication}', master_password='{password_forreplication_user}', master_port ={rds_master_instance_port}, master_log_file ='{MASTER_LOG_FILE}', master_log_pos = {MASTER_LOG_POS};

START SLAVE;
```

##### After 8.4
```
CHANGE REPLICATION SOURCE TO source_host = '{rds_master_instance_floating_ip}', source_user='{user_id_for_replication}', source_password='{password_forreplication_user}', source_port ={rds_master_instance_port}, source_log_file ='{SOURCE_LOG_FILE}', source_log_pos = {SOURCE_LOG_POS};

START REPLICA;
```

* If the source data of the external DB and the NHN Cloud RDS instance are identical, use the STOP SLAVE command to the external DB to terminate the replication

<a id="import-with-replication"></a>
### Import with Replication { #import-with-replication }

* You can import external DBs into NHN Cloud RDS using replication.
* NHN Cloud RDS version has to be the same as or later than the external DB version.
* Connect the data to an external {{engine.pascalCase}} instance to which it is exported.
* Use the command below to back up data from an external {{engine.pascalCase}} instance.
* To import data from external {{engine.pascalCase}} instance (master)

```
mysqldump -h{master_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --master-data=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* To import data from external MySQL instance (slave)

```
mysqldump -h{slave_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} --single-transaction --dump-slave=2 --routines --events --triggers --databases {database_name1, database_name2, ...} > {local_path_and_file_name}
```

* Open the backup file to record MASTER_LOG_FILE and MASTER_LOG_POS from the footnote.
* Verify that there is enough capacity on the client or computer to back up data from NHN Cloud RDS instance.
* Add the following option to the my.cnf (or my.ini for Windows) file of the external database.
* Put a different value for Server ID, from the Server ID of parameter of NHN Cloud RDS Instance.

```
...
[mysqld]
...
server-id={server_id}
replicate-ignore-db=rds_maintenance
...
```

* Restart external DB.
* As importing over an external network can take a long time,
* We recommend that you create an internal NHN Cloud Image, copy the backup file, and import it into NHN Cloud.
* Enter the backed up file into NHN Cloud RDS with the following command.
* Replication configuration does not support DNS, so convert to IP and run.

```
mysql -h{rds_master_instance_floating_ip} -u{db_id} -p{db_password} --port={db_port} < {local_path_and_file_name}
```

* Create an account for replication on an external {{engine.pascalCase}} instance.

##### Before 8.4
```
{{engine.lowerCase}}> CREATE USER 'user_id_for_replication'@'{external_db_host}' IDENTIFIED BY '<password_forreplication_user>';
{{engine.lowerCase}}> GRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'user_id_for_replication'@'{external_db_host}';
```

##### After 8.4
```
{{engine.lowerCase}}> CREATE USER 'user_id_for_replication'@'{external_db_host}' IDENTIFIED BY '<password_forreplication_user>';
{{engine.lowerCase}}> GRANT REPLICATION CLIENT, REPLICATION REPLICA ON *.* TO 'user_id_for_replication'@'{external_db_host}';
```

* Run a query on NHN Cloud RDS as follows, using the account information to be used for replication and the MASTER_LOG_FILE and MASTER_LOG_POS that recorded earlier.

##### Before 8.4
```
{{engine.lowerCase}}> call mysql.tcrds_repl_changemaster ('rds_master_instance_floating_ip',rds_master_instance_port,'user_id_for_replication','password_forreplication_user','MASTER_LOG_FILE',MASTER_LOG_POS );
```

##### After 8.4
```
{{engine.lowerCase}}> call mysql.tcrds_repl_changesource ('rds_master_instance_floating_ip',rds_master_instance_port,'user_id_for_replication','password_forreplication_user','SOURCE_LOG_FILE',SOURCE_LOG_POS );
```

* To start replication, execute the following procedure.

##### Before 8.4
```
{{engine.lowerCase}}> call mysql.tcrds_repl_slave_start;
```

##### After 8.4
```
{{engine.lowerCase}}> call mysql.tcrds_repl_replica_start;
```

* When original data of NHN Cloud RDS instance become same as the external database, close replication by using the following command:

```
{{engine.lowerCase}}> call mysql.tcrds_repl_init();
```

<a id="appendix"></a>
## Appendix { #appendix }

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance"></a>
### Appendix 1. DB Instance Migration Guide for Hypervisor Maintenance { #appendix-1-db-instance-migration-guide-for-hypervisor-maintenance }

NHN Cloud periodically updates the hypervisor software of the DB instance to improve security and stability.
DB instances running on a hypervisor that requires maintenance must be migrated to the hypervisor where maintenance has been completed.

You can start DB instance migration from the NHN Cloud console.
Depending on the database configuration, when you select a particular DB instance to migrate, any associated DB instances (e.g., Read Replica instances) that are also designated as maintenance targets will be migrated together.
Follow the guide below to use the migration feature in the console.
Go to the project where the DB instance requiring maintenance is located.

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-check-the-db-instance-that-requires-maintenance"></a>
#### 1. Check the DB instance that requires maintenance.

In the **DB Instance** tab list, check the DB instance that requires maintenance. You can click **Required** in **Maintenance** or check whether there is a hypervisor migration maintenance task in the **Maintenance** tab of **DB Instance Details**.
Click **View** on the hypervisor migration maintenance task to check the detailed inspection information for the hypervisor migration.

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-make-sure-you-close-any-running-applications-on-the-db-instance"></a>
#### 2. Make sure you close any running applications on the DB instance.

Take appropriate measures to avoid affecting services connected to the DB.
If it is inevitable to affect the service, please contact NHN Cloud Customer Support, and we will guide you on appropriate measures.

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-you-can-apply-migration-to-db-instances-targeted-for-maintenance"></a>
#### 3. You can apply migration to DB instances targeted for maintenance.

Select the DB instance to which you want to apply the migration, and then click **Apply Immediately** to apply the hypervisor migration right away.
Click **Apply at Next Maintenance Window** to apply the hypervisor migration during your preferred maintenance window.

<a id="appendix-1-db-instance-migration-guide-for-hypervisor-maintenance-wait-for-the-db-instance-migration-to-finish"></a>
#### 4. Wait for the DB instance migration to finish.

If instance status remains the same, try refreshing.
While migration is underway, operation is not permitted.
An abnormal closure of DB instance migration shall be automatically reported to administrator, and in such case, you'll be contacted by NHN Cloud.

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds"></a>
### Appendix 2. Configuration guide for using Federated Storage Engine with RDS { #appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds }

When using Federated Storage Engine, make sure you consider the following.

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds-for-configuration-using-rds-as-a-local-node"></a>
#### For configuration using RDS as a local node

* Make sure you need to allow the outbound direction to remote nodes.
    * You can add rules in the DB security group.
    * For more information, see the [DB Security Group](db-security-group/) section.
* When using a configuration that adds Read Replica to RDS that serves as a local node, you need to specify a federated table in replicate-ignore-table of the parameter.
    * When configuring Read Replica, the federated table is also replicated so that Primary and Read Replica look at the remote nodes together.
    * In this case, the data input performed in Primary is performed in the remote nodes according to the federated settings, and the same input is also performed in Read Replica, so replication may be suspended due to a duplicate key error, etc.
    * Make sure you need to configure the settings of replicate-ignore-table so that Read Replica does not replicate a federated table.

<a id="appendix-2-configuration-guide-for-using-federated-storage-engine-with-rds-for-configuration-using-rds-as-a-remote-node"></a>
#### For configuration using RDS as a remote node

* Make sure you need to allow the inbound direction to local nodes.
    * You can add rules from DB security group.
    * Refer to [DB Security Group](db-security-group/) for more information.

<a id="security-patch"></a>
### Appendix 3. Security Patch { #security-patch }

NHN Cloud periodically manages security vulnerabilities (CVEs) found in the operating systems of DB instances and provides security patch maintenance tasks for affected DB instances.
Security patches work by applying the latest security updates that resolve the current vulnerabilities of DB instances.
Follow the guide below to use the security patch feature in the console.
Navigate to the project that contains the DB instances designated as security patch targets.

<a id="security-patch-check-the-db-instances-targeted-for-security-patching"></a>
#### 1. Check the DB instances targeted for security patching.

You can check whether a security patch maintenance task exists by clicking **Required** or **Available** under **Maintenance**, or by checking the **Maintenance** tab in **DB Instance Details**.

![patch-security-list-en]({{url.cdn}}/26.05.12/patch-security-list-en.png)

❶ Click the **View** button for the security patch maintenance task.
❷ You can check information on security vulnerabilities applicable to the current DB image.

![patch-security-detail-en]({{url.cdn}}/26.05.12/patch-security-detail-en.png)

You can check information on security vulnerabilities that can be resolved by proceeding with the security patch.

![patch-security-popup-en]({{url.cdn}}/26.05.12/patch-security-popup-en.png)

!!! tip "Note"
    Vulnerability degree is classified as CRITICAL, HIGH, MEDIUM, and LOW.

<a id="security-patch-check-the-applications-connected-to-the-db-instances-targeted-for-security-patching"></a>
#### 2. Check the applications connected to the DB instances targeted for security patching.

Security patching may cause a brief service interruption on the DB instance.
For high-availability DB instances, service interruptions can be minimized through failover. For single DB instances, the security patch is applied through a restart.
Take appropriate measures to avoid affecting services connected to the DB.

<a id="security-patch-select-when-to-apply-the-security-patch"></a>
#### 3. Select when to apply the security patch.

![patch-security-maintenance-en]({{url.cdn}}/26.05.12/patch-security-maintenance-en.png)

❶ Click **Apply immediately** to apply the security patch right away.
❷ Click **Apply at next maintenance window** to apply the security patch during the scheduled maintenance window.

When applying to a high-availability DB instance, the following options can also be selected:

* **Run pre-backup**: Automatically runs a backup before performing the security patch.
* **Select failover method**: Selects whether to use online failover or manual failover.
* **Wait for replication lag**: Waits until replication lag is resolved before proceeding with the security patch.
* **Read Only mode**: Uses read-only mode while the security patch is being performed.

<a id="security-patch-wait-until-the-security-patch-is-complete"></a>
#### 4. Wait until the security patch is complete.

If the DB instance status does not change, refresh the page.

![patch-security-running-en]({{url.cdn}}/26.05.12/patch-security-running-en.png)

No operations can be performed while a security patch is in progress on a DB instance.
If the security patch does not complete successfully, it is automatically retried. If it fails repeatedly, the issue is reported to an administrator and NHN Cloud will contact you separately.