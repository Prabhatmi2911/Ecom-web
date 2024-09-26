
const {MongoClient}=require("mongodb");
let client1= new MongoClient("mongodb://127.0.0.1:27017");
async function getconnect1()
{
    let con=await client1.connect();
    let db=con.db("training2024");
    let collection=db.collection("Ecomproducts");
    
    return collection;
    
}
module.exports=getconnect1;


                