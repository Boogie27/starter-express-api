# Technology
Nodejs
MongoDB

# Project
The project is a nodejs crudapp with mongoDB database that performs crud operation like Create, Read, Update and Delete on user table.

 # Design Choice
 I made use of Model, View and controller approach (MVC)

# implementation
The API is developedusing Nodejs framework. This framework will provide all the neccessary toolds needed to create a RestfulAPI. A MongoDB database is used to store user information. The API will be able to create, read, update and delete users from database.
# PostMan
Postman is an API platform for developers to design, build, test and iterate their APIs. In this project we made us of Postman to perform the neccessary Crud operation

# Error Handling
Error Handling is being implemented using Nodejs. its uses the catch block to catch any errors that might occour during the API operation. The API will also validate the data sent by users, to ensure that all required fields are present. If any error occurs during the operation, an appropriate error message will be retruned to the users. 
 # Important Links
To fetch all users, open postman, set the url to GET, insert the link bellow and then click Send
```
https://puzzled-slug-sunbonnet.cyclic.app/api/fetch-users/all
```

To create a user \\
Goto Postman, set the Url to Post because user is required to put into the database, insert the link as the link bellow.. \\

on the body section, insert user values as 
{ \\
    "first_name": "John", \\
    "last_name": "Doe", \\
    "email": "johndoe@gmail.com", \\
} \\
\\
click Send
```
https://puzzled-slug-sunbonnet.cyclic.app/api/create
```