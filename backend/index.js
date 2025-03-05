const express = require("express")
const collection = require("./mongoschema")
const feedbackCollection=require("./feedbackSchema")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const mongoose=require("mongoose")

// mongoose.connect("mongodb+srv://jayanagarakshith:Tiru%4012345@cluster0.k0chl.mongodb.net/Student_alumni?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect("mongodb+srv://jayanagarakshith:HzBu15b0gRwZ320g@cluster0.k0chl.mongodb.net/rakshithusers")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
app.get("/login",cors(),(req,res)=>{

})

//login
app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


//signup
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
            console.log(collection)
        }

    }
    catch(e){
        res.json("fail")
    }

})
//feedback
app.post("/feedback", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
  
    const feedbackData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };
  
    try {
      // Check if the email has already submitted feedback (optional)
      const check = await feedbackCollection.findOne({ email: email });
  
      if (check) {
        // If the email has already submitted feedback
        res.json("feedback_exists");
      } else {
        // Insert the new feedback
        await feedbackCollection.insertMany([feedbackData]);
        res.json("feedback_received");
      }
    } catch (e) {
      console.log(e);
      res.json("feedback_failed");
    }
  });
  

app.listen(8000,()=>{
    console.log("port connected");
})
