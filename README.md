## Student
- Name: <Гіцевич Ярослав Геннадійович>
- Group: <232.1>
 
## Практичне заняття №2 — NestJS + PostgreSQL + Redis
 
## Структура репозиторію
```
.
├── dist/
├── node_modules/
├── src/
├── test/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── README1.md
├── tsconfig.build.json
└── tsconfig.json
```
 
## Запуск проекту
```bash
cp .env.example .env
docker compose up --build
[12:40:28 PM] Starting compilation in watch mode...
app-1  | 
app-1  | [12:40:35 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +114ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] CacheModule dependencies initialized +15ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +74ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [RoutesResolver] AppController {/}: +5ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [RouterExplorer] Mapped {/, GET} route +4ms
app-1  | [Nest] 29  - 04/08/2026, 12:40:37 PM     LOG [NestApplication] Nest application successfully started +4ms
```
 
## Перевірка сервісів
```text
NAME                                IMAGE                        COMMAND                  SERVICE    CREATED              STATUS                   PORTS
environment-setup-main-app-1        environment-setup-main-app   "docker-entrypoint.s…"   app        About a minute ago   Up 9 seconds             0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp
environment-setup-main-postgres-1   postgres:16-alpine           "docker-entrypoint.s…"   postgres   20 minutes ago       Up 9 seconds (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp
environment-setup-main-redis-1      redis:7-alpine               "docker-entrypoint.s…"   redis      20 minutes ago       Up 9 seconds (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp
```
 
## Перевірка PostgreSQL
```text
                                                      List of databases
   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges   
-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 nestdb    | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 postgres  | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 template0 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
 template1 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
(4 rows)
```
 
## Перевірка Redis
```text
PONG
```
 
## Перевірка застосунку
```text
Hello World!
```
 
## Логи NestJS (фрагмент)
```text
Starting compilation in watch mode...
app-1  | 
app-1  | [12:43:42 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +91ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] CacheModule dependencies initialized +12ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +54ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [RoutesResolver] AppController {/}: +5ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [RouterExplorer] Mapped {/, GET} route +3ms
app-1  | [Nest] 29  - 04/08/2026, 12:43:43 PM     LOG [NestApplication] Nest application successfully started +3ms
```
