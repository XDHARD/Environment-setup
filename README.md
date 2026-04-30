## Student
- Name: <Гіцевич Ярослав Геннадійович>
- Group: <232.1>
 
## Практичне заняття №3 — CRUD REST API для MiniShop
 
### Структура репозиторію
```
├── dist
├── node_modules
├── src/
│   ├── categories/
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── migrations/
│   │   ├── 1775655274575-CreateTables.ts
│   │   └── 1775655787462-AddIsActiveToProducts.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── data-source.ts
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
├── tsconfig.build.json
└── tsconfig.json
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
Starting compilation in watch mode...
app-1  | 
app-1  | [4:55:14 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +102ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] CacheModule dependencies initialized +15ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +87ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +2ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RoutesResolver] AppController {/}: +6ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/, GET} route +4ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +5ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +2ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RoutesResolver] ProductsController {/api/products}: +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +1ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +0ms
app-1  | [Nest] 29  - 04/08/2026, 4:55:16 PM     LOG [NestApplication] Nest application successfully started +4ms
```
 
### API Endpoints
| Method | URL | Опис |
|--------|-----|------|
| GET | /api/categories | Список категорій |
| GET | /api/categories/:id | Одна категорія |
| POST | /api/categories | Створити категорію |
| PATCH | /api/categories/:id | Оновити категорію |
| DELETE | /api/categories/:id | Видалити категорію |
| GET | /api/products | Список продуктів |
| GET | /api/products/:id | Один продукт |
| POST | /api/products | Створити продукт |
| PATCH | /api/products/:id | Оновити продукт |
| DELETE | /api/products/:id | Видалити продукт |
 
### Перевірка міграцій
```text
           List of relations
 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser
(3 rows)
```
 
### Тест створення категорії
```text
"id":7,"name":"Accessories","description":null,"createdA
```
 
### Тест створення продукту
```text
{"id":4,"name":"iPhone 15","description":null,"price":999.99,"stock":50,"isActive":true,"category":{"id":4},"createdAt":"2026-04-08T17:50:11.813Z","updatedAt":"2026-04-08T17:50:11.813Z"}
```
 
### Тест отримання продуктів
```text
{"id":4,"name":"iPhone 15","description":null,"price":"999.99","stock":50,"isActive":true,"category":{"id":4,"name":"Electronics","description":"Gadgets and devices","createdAt":"2026-04-08T15:36:25.415Z"},"createdAt":"2026-04-08T17:50:11.813Z","updatedAt":"2026-04-08T17:50:11.813Z"},{"id":5,"name":"USB Cable","description":null,"price":"9.99","stock":200,"isActive":true,"category":null,"createdAt":"2026-04-08T17:50:23.081Z","updatedAt":"2026-04-08T17:50:23.081Z"}
```
 
### Тест 404
```text
{"message":"Product #999 not found","error":"Not Found","statusCode":404}
```