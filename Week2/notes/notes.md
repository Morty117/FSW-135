# Relational database
    - examples of Relational databases:
        1. Amazon Aurora
        2. Oracle
        3. MS SQL
        4. MySQL
        5. PostgreSQL

# Non-Relational Databases
    - examples of Non-Relational databases:
        1. AWS Dynamo
        2. Cloudant
        3. Mongo
        4. Cosmos
        5. Google Cloud Data

# Relational Database concepts
    - data is stored in tables and rows
    - restict data to high controlled data types and constraints to ensure integrity

# Non-Relational Database concepts
    - data is stored in collections [] and corresponds to a column or documents/pages {} and corresponds to a single row
    - no restrictions but have to install mongoose 
    - mongoose provides the controls to enforce data rigidity

# Mongoose Schemas
    - the structure mongoose uses for establishing the contents of collection is called a schema(blueprint)
    
    const mongoose = require('mongoose')
    const Schema = mongoose Schema

    const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        eMail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        insert_dt: {
            type: date,
            required: true
        },
        mod_dt: {
            type: date,
            required: true
        }
    })