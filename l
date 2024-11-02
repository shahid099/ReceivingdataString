[1mdiff --git a/apiconfirmation.rest b/apiconfirmation.rest[m
[1mindex da98158..f964593 100644[m
[1m--- a/apiconfirmation.rest[m
[1m+++ b/apiconfirmation.rest[m
[36m@@ -3,9 +3,9 @@[m [mPOST http://localhost:5000/users/signup HTTP/1.1[m
 content-type: application/json[m
 [m
 {[m
[31m-    "name": "Muhammad Shahid",[m
[31m-    "email": "shahidking@gmail.com",[m
[31m-    "password": "shahidking"[m
[32m+[m[32m    "name": "Muhammd Shahid",[m
[32m+[m[32m    "email": "shahiking@gmail.com",[m
[32m+[m[32m    "password": "shaidking"[m
 }[m
 [m
 ###[m
[36m@@ -14,8 +14,8 @@[m [mPOST http://localhost:5000/users/login HTTP/1.1[m
 content-type: application/json[m
 [m
 {[m
[31m-    "email": "shahidking@gmail.com",[m
[31m-    "password": "shahidking"[m
[32m+[m[32m    "email": "shahiking@gmail.com",[m
[32m+[m[32m    "password": "shaidking"[m
 }[m
 [m
 ###[m
[1mdiff --git a/routes/signuplogin.js b/routes/signuplogin.js[m
[1mindex f7505ce..f2a4d74 100644[m
[1m--- a/routes/signuplogin.js[m
[1m+++ b/routes/signuplogin.js[m
[36m@@ -24,7 +24,7 @@[m [mrouter.post('/signup', async (req, res)=> {[m
 [m
         const savedUser =  await user.save();[m
         console.log("Successfully Saved user", savedUser);[m
[31m-        res.send({savedUser});[m
[32m+[m[32m        res.status(200).send({savedUser, message: "Successfully Saved user"});[m
     } catch (error) {[m
         console.error(error.message);[m
         res.status(500).send({ error: "Internal Server error." });[m
[36m@@ -43,7 +43,7 @@[m [mrouter.post("/login", async (req, res)=> {[m
             }[m
         // If user Exists then[m
         if(password == user.password) {[m
[31m-            res.send("User login Successfully.")[m
[32m+[m[32m            res.status(200).send({ user, message:  " User login Successfully." });[m
         } else {[m
             return res.status(401).send({ success, error: "Please try to login with correct credentials" });[m
         }[m
