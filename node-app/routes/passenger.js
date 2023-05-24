const request = require('request');
const http = require("http");
// var mongo = require('mongodb').MongoClient;
var POST = function (url, body) {
    return {
        url: url,
        headers: {
            "Content-Type": "application/json",
            "Content-Length": JSON.stringify(body).length
        },
        method: "POST",
        json: body
    }
}
// const MONGO_URL = "mongodb://49.205.193.195:47017";

// var client;
// async function getConnection() {
//   if (client == null) {
//     client = new MongoClient(MONGO_URL);
//   }
//   let conn = await client.connect();
//   return await conn.db("apptest");
// }

module.exports = {
    getAllRoles:(req, res)=>{
        try {
            const roles = [
                {
                    "name":"admin", 
                    "description":"admin",
                    "applicationRoleName":"admin"
                },
                {
                    "name":"SoS-Admin", 
                    "description":"Admin role for the sos application",
                    "applicationRoleName":"Admin-Role"
                },
                {   
                    "name":"billing-module-admin", 
                    "description":"Admin role for the sos application billing module",
                    "applicationRoleName":"admin"
                },
                {   
                    "name":"customer", 
                    "description":"Admin role for the sos application billing module",
                    "applicationRoleName":"customer"
                }
            ];
            var data = {
                roles : roles
            };
            console.log(data)
            return res.send(data.roles).status(200)
        } catch (error) {
            res.status(500).json({ error: "Critical error occured, Please Contact Admin" });
        }
    },

    getHealthCheck:(req, res)=>{
        try {
            var health = {
                "status" : "healthy"
            }
            console.log(health)
            return res.send(health).status(200)
        } catch (error) {
            res.status(500).json({ error: "Critical error occured, Please Contact Admin" });
        }
    },

    proxyTest:(req, res) =>{
        try{
            console.log("request receivied => ", req.body)
            var data={
                "_msg":"success",
                "_status":200,
                "data":req.body
            }
            console.log("response => ", data)
            return res.send(data).status(200)
        }catch(error){
            res.status(500).json({ error: "Critical error occured, Please Contact Admin" });   
        }
    },

    // getApplications:(req, res) => {
    //     try{
    //         var name = req.query.name
    //         var db = getConnection()
    //         console.log(db)
    //         const appDb = db.application.find({"name":{"$regex":name, "$options":"i"}}).itcou
    //         console.log("appDb", appDb)

    //     }catch(error){
    //         console.log(error)
    //     }   
    // }
}
