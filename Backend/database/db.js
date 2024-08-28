import mongoose from "mongoose";

const connectdb  = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://anshdarock222:codeinair@cluster0.njzm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("connect mongodb");
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connectdb;