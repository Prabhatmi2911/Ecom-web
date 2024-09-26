const express=require("express");
const getconnect1=require("./dbconnect");

const app=express();
app.set("view engine","ejs");
app.use(express.static(__dirname+'/public'));
app.get("/cart",async(req,res)=>{
    let collection= await getconnect1();
    let records=await collection.find({}).toArray();
    console.log(records);
    res.render("cart",{records});
});
app.get("/home",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/cart",(req,res)=>{
    res.render("cart");

});
app.get("/delete",(req,res)=>{
    res.render("delete");
    });

    app.get("/deleterec",async(req,res)=>{
        let grollno=req.query.grollno;
        console.log(grollno);
        let collection=await getconnect1();
        let r=await collection.deleteOne({rollno:grollno});
        let records=await collection.find({}).toArray();
        res.render("cart",{records});
    
    });
    
    app.get("/deletedata",async(req,res)=>
    {
        let grollno=req.query.grollno;
        console.log("Id.No "+grollno + " records deleted");
        let collection=await getconnect1();
        let r=await collection.deleteOne({rollno:grollno});
        let records=await collection.find({}).toArray();
        res.render("cart",{records});
    });
    
    app.get("/update",(req,res)=>{
        res.render("update");
        });
    
    app.get("/updatedata",async (req,res)=>
    {
        let grollno=req.query.grollno;
        console.log("Id No. "+grollno+" to be updated");
        let collection=await getconnect1();
        let records=await collection.find({rollno:grollno}).toArray();
        console.log(records);
        res.render("cart",{records});
    });
    
    app.get("/updateres",async(req,res)=>{
        let grollno=req.query.grollno;
        let gproduct=req.query.gproduct;
        let gimg=req.query.gimg;
        let gprice=req.query.gprice;
        let collection=await getconnect1();
        let r=collection.updateOne
        ({rollno:grollno},{$set:{product:gproduct,img:gimg,price:gprice}});
        // res.redirect("/show");
        let records=await collection.find({}).toArray();
        res.render("cart",{records});
        
    });
    app.get("/insert",(req,res)=>{
        res.render("insert");
    });
    app.get("/insertres",async(req,res)=>{
        let grollno=req.query.grollno;
        let gproduct=req.query.gproduct;
        let gimg=req.query.gimg;
        let gprice=req.query.gprice;
        let collection=await getconnect1();
        let r=collection.insertOne
        ({rollno:grollno,product:gproduct,img:gimg,price:gprice});
        // res.redirect("/show");
        let records=await collection.find({}).toArray();
        console.log("Id.No "+grollno + " record inserted");
        res.render("cart",{records});
        
    
    
    });


    
    
    
app.get("/account",async(req,res)=>{
    
    res.render("account");
    
});



app.get("/collections",(req,res)=>{
    res.render("collections");
});
app.get("/thank",(req,res)=>{
    res.render("thank");
});


app.listen(5000,()=>console.log("server is running"));