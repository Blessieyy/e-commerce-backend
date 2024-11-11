const { mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema(

    {
        name:{
            type:String,
            required:[true, 'command']
        },
        description:{
            type: String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        quantity:{
            type: Number,
            required:true,
            default: 0,
        },
        price:{
            type: Number,
            required:true,
            default: 0,
        },
        Image:{
            type: String,
            required:false,
            
        },
    },
    {
        timestamps:true,
    }
);

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product