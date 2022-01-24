# GET the authentication 
    - We get the token from the object
    -- open api endpoint that will get all of the information from the entire todo DB
    -- go over to the headers tab
    1) key Authorization    value Bear TOKEN FROM OBJECT POSTED HERE
    2) key Content-Type     value application/json

# Projects and Assignments
    - we are focusing on the One-to-Many relationship from the users
    - We want the user (one) to be attached to their todos (many)

# Needed for authentication
    - npm install jsonwebtoken
    - npm install dotenv
    - npm install express-jwt