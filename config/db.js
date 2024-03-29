import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
 const conn= await mongoose.connect(process.env.MONGO_URL)
 console.log(`Connected to MongoDB Database ${conn.connection.host}`);
    } catch(err){
        console.log(`error in MongoDB ${err}`)
    }
}
export default connectDB;