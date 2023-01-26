# Technology
Nodejs
MongoDB
PostMan

# Project
The project is a nodejs crudapp with mongoDB database that performs crud operation like Create, Read, Update and Delete on user table.

 # Design Choice
 I made use of Models, Routs and Controllers because it makes implementation easy, code neat and easy to read. every operation has its own Route, and controllers where different functions relating to that operation is located. this means that to implement a feature about users, there is going to be a userController, userRoute and User model. Route specifies the different routes, it can be a get route, post route or put route. there is also the Model, Model specified database Schemas. this Schema is a template that specifies how data will be stored or retrieved from the database.

# PostMan
Postman is an API platform for developers to design, build, test and iterate their APIs. In this project I made us of Postman to perform the neccessary Crud operation

# Error Handling
Error Handling is being implemented using Nodejs. its uses the catch block to catch any errors that might occour during the API operation. The API will also validate the data sent by users, to ensure that all required fields are present. If any error occurs during the operation, an appropriate error message will be retruned to the users. 

# implementation
The API is developedusing Nodejs framework. This framework will provide all the neccessary tools needed to create a RestfulAPI. A MongoDB database is used to store user information. The API will be able to create, read, update and delete users from database.

To fetch all users, open postman, set the url to GET, insert the link bellow and then click Send
```
https://puzzled-slug-sunbonnet.cyclic.app/api/fetch-users/all
```

To create a user,
Goto Postman, set the Url to Post because user is required to put into the database, insert the link as the link bellow..
```
https://puzzled-slug-sunbonnet.cyclic.app/api/create
``` 
on the body section, insert user values as 
```
{ 
    "first_name": "John", 
    "last_name": "Doe", 
    "email": "johndoe@gmail.com", 
} 
```
click Send



To Update user, set the post man url to post, insert the link as the link bellow..
```
https://puzzled-slug-sunbonnet.cyclic.app/api/update
``` 
on the body section, insert user values as 
```
{ 
    "id": "[USER_ID_HERE]"
    "first_name": "John", 
    "last_name": "Doe", 
    "email": "johndoe@gmail.com", 
} 
```
click Send

To Delete user, set the post man url to post, insert the link as the link bellow..
```
https://puzzled-slug-sunbonnet.cyclic.app/api/delete
``` 
on the body section, insert user id as shown bellow. the post event will search through the database and the delete user with the specified ID, if there isnt any user, it will return a message.
```
{ 
    "id": "[USER_ID_HERE]" 
} 
```
click Send