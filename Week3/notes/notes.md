# Authentication
    - the first part of authentication is to validate the users credentials, verifying that no other user has the same user
    - if no error is returned, the server returns a JSON Web Token (JWT)
    - JWT are more than just a random string of characters, its comprised of a header that identifies the token type and algorithm, a payload consisting of various parts that may include the token issuer, expiration and other information along with a signature that verifies that the token has not changed in transmission
    - When the user gets this token back, it's saved either in SessionStorage or LocalStorage for easy access by the client app
    - Then each time a subsequent HTTP request is made by the client this token is sent back to the server
    - The server will validate the authenticity of the token, if it is not valid or expired, the server will send back an error message