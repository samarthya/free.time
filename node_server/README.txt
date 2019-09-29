This separate folder(node_server) is to keep all server realted code together and its routes.
The motive was to replace inmemorydb of angular to a real time DB server.
The express server is used to control connection and further querying to remote mysql server.

PRE-REQ:
Install express, mysql, ts-node, typescript 

CODE-WALKTHROUGH:

"server.ts" file contains the DB details. It connects to DB and runs the express server on http://localhost:4000.

"routes.ts' file contains the routes(eg /login) and corresponding queries. Corresponding to each route,it queries & 
fetch the result from DB and returns to Front-end component(login.service.ts) i.e. from where the HTTP calls were made.

HOW TO USE:

Start the server with following command from location('free.time\node_server'): "nodemon server.ts"
'nodemon' command is used to pick any runtime code changes in server side.

CURRENT SCOPE/SUPPORT OF DB:
Till now, only login feature has been updated with backend DB. 

So, when a genuine user(say dummy1@gmail.com, dummy@1) logs in, 
it will update the loggedin user with this username on UI and we can see its profile details.

In case of any error(wrong pwd, user doesn't exist etc), 
for now, it will return the DUMMY_PROFILE (of saurabh_sharma). 
Error Handling needs to be improvised in coming days.

NEXT TODO'S:
1) Error Handling for DB responses
2) Storing the password hashes and not plain texts
3) Using JWT based auth scheme and not basic one.
4) For register, profile updates etc