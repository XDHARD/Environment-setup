## Student
- Name: <Гіцевич Ярослав Геннадійович>
- Group: <232.1>
 
## Практичне заняття №4 — DTO + class-validator + Pipes
 
### Структура репозиторію
```
.
├── dist
├── node_modules
├── src/
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
├── tsconfig.build.json
└── tsconfig.json
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
[3:58:08 PM] Starting compilation in watch mode...
app-1  | 
app-1  | [3:58:12 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +69ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] CacheModule dependencies initialized +11ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +59ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RoutesResolver] AppController {/}: +4ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +2ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +3ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +2ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +2ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RoutesResolver] ProductsController {/api/products}: +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +1ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +0ms
app-1  | [Nest] 34  - 04/26/2026, 3:58:14 PM     LOG [NestApplication] Nest application successfully started +5ms
```
 
### Тест валідації — порожнє ім'я категорії
```text
<{"message":["name must be longer than or equal to 2 characters"],"error":"Bad Request","statusCode":400}>
```
 
### Тест валідації — від'ємна ціна продукту
```text
<{"message":["price must not be less than 0.01"],"error":"Bad Request","statusCode":400}>
```
 
### Тест валідації — зайве поле
```text
<{"message":["property isAdmin should not exist"],"error":"Bad Request","statusCode":400}>
```
 
### Тест TrimPipe
```text
<{"id":3,"name":"Trimmed","description":null,"createdAt":"2026-04-26T16:07:43.564Z"}>
```
 
### Тест валідне створення продукту
```text
<{"id":1,"name":"iPhone 16","description":null,"price":999.99,"stock":50,"isActive":true,"category":{"id":1},"createdAt":"2026-04-26T15:38:41.138Z","updatedAt":"2026-04-26T15:38:41.138Z"}>
```
