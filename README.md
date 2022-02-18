# Adding Data Persistence Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Data Persistence**. During this sprint, you studied **RDBMS, including SQL, multi-table queries, and data modeling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a database based on given specifications**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers a few days after the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Run `npm install` to install your dependencies.
- [x] Run tests locally executing `npm test`.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js` inside `api/project`, `api/resource` and `api/task`
5. `router.js` inside `api/project`, `api/resource` and `api/task`
6. migration file(s)
7. seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file. The tests depend on these scripts being correct!

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [x] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [x] `project_id` - primary key
  - [x] `project_name` - required
  - [x] `project_description` - optional
  - [x] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [x] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [x] `resource_id` - primary key
  - [x] `resource_name` - required and unique
  - [x] `resource_description` - optional

- [x] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [x] `task_id` - primary key
  - [x] `task_description` - required
  - [x] `task_notes` - optional
  - [x] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [x] `project_id` - required and points to an actual `project_id` in the `projects` table

- [x] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [x] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [x] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [x] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Important Notes (READ!)**

- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- Delete `test.db3` and `database.db3` and re-run migrations and tests, if you suspect half-finished code left your databases in a broken state.
- In your solution, it is essential that you follow best practices and produce clean and professional results.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between Relational Databases and SQL.
A database is a systematic collection of information, or data.

A relational database is a database that stores data in a table form, containing columns and rows. It has one or more data categories in columns. Each row, or record, contains a set of data defined by the category, or column.
A relational database typically has more than one table and they might have interrelation and this relationship will be set via the use of the foreign key.

SQL, or Structured Query Language, is the standard language for dealing with Relational Databases. It’s used to perform data interacting tasks such as:

Creating a table and inserting data into it.
Querying and filtering data.
Modifying and updating data.
Delete data or table.

RDBMS is a database management system. SQL is the language used for communicating with data in an RDBMS.

2. Why do tables need a Primary Key?
Primary keys are a central element in SQL databases. They provide a unique value that can identify a specific row in a table. Primary keys are important to give your table uniqueness and thus assist in indexing, sorting, retrieving records, solving data integrity issues.

3. What is the name given to a table column that references the Primary Key on another table?
When you create two tables that are related to each other, they are often related by a column in one table referencing the primary key of the other table - that column is called the "foreign key". They allow developers to maintain referential integrity across their database. Foreign keys also help end-users by preventing errors and improving the performance of any operation that’s pulling data from tables linked by indexed foreign keys.

4. What do we need in order to have a _many to many_ relationship between two tables?
A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers.