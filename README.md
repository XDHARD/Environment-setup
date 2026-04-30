## Student
- Name: <Гіцевич Ярослав Геннадійович>
- Group: <232.1>
 
## Практичне заняття №5 — JWT Authentication + Guards + RBAC
 
### Структура репозиторію
```
.
├── dist
├── node_modules
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   └── login.dto.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── auth.controller.ts
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── categories/
│   │   ├── dto/
│   │   │   ├── create-category.dto.ts
│   │   │   └── update-category.dto.ts
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── common/
│   │   ├── enums/
│   │   │   ├── role.enum.ts
│   │   │   └── user.entity.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── migrations/
│   │   ├── 1775655274575-CreateTables.ts
│   │   └── 1775655787462-AddIsActiveToProducts.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── data-source.ts
│   └── main.ts
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
├── README1.md
├── README2.md
├── README3.md
├── README4.md
├── README5.md
├── tsconfig.build.json
└── tsconfig.json
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
[5:35:13 PM] Starting compilation in watch mode...
app-1  | 
app-1  | [5:35:19 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +92ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] AppModule dependencies initialized +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] JwtModule dependencies initialized +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] CacheModule dependencies initialized +33ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +77ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] UsersModule dependencies initialized +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] AuthModule dependencies initialized +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RoutesResolver] AppController {/}: +14ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/, GET} route +7ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RoutesResolver] AuthController {/auth}: +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/auth/register, POST} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/auth/login, POST} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +2ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RoutesResolver] ProductsController {/api/products}: +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +3ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +0ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +1ms
app-1  | [Nest] 29  - 04/30/2026, 5:35:21 PM     LOG [NestApplication] Nest application successfully started +4ms
```
 
### API Endpoints
| Method | URL | Auth | Role |
|--------|-----|------|------|
| POST | /auth/register | - | - |
| POST | /auth/login | - | - |
| GET | /api/categories | - | - |
| POST | /api/categories | JWT | admin |
| GET | /api/products | - | - |
| POST | /api/products | JWT | admin |
| PATCH | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |
 
### Тест реєстрації
```text
{"id":2,"email":"user@test.com","name":"Test User","role":"user","createdAt":"2026-04-30T17:10:22.394Z"}
```
 
### Тест логіну
```text
{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoidXNlckB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc3NTY5MDM4LCJleHAiOjE3Nzc1NzI2Mzh9.yq1ccDb7MOuTH7YhSDHVDHFyGvF7eEq3x1tZ5IQ2iEE"}
```
 
### Тест 401 — запит без токена
```text
{"message":"Missing authorization token","error":"Unauthorized","statusCode":401}
```
 
### Тест 403 — запит з роллю user
```text
{"message":"Insufficient permissions","error":"Forbidden","statusCode":403}
```
 
### Тест успішного створення від admin
```text
{"id":2,"name":"MacBook Pro","description":null,"price":2499.99,"stock":10,"isActive":true,"createdAt":"2026-04-30T17:21:23.892Z","updatedAt":"2026-04-30T17:21:23.892Z"}
```