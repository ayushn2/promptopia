import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        unique:[true,'Email already exists gay ass nigga!!'],//if it already exists
        required:[true,'Email is required']//if email is required
    },
    username:{
        type:String,
        required:[true,'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image:{
        type:String,
    }
});

// ---------------------------This is used when we use express in backend-------------------//

// const User = model("User",UserSchema);

// export default User;

const User = models.User || model("User",UserSchema);//Check if model is there if not then only create a new model bcoz this route gets called everytime and the connection is re extablish everytime

// The "models" object is provided by the mongoose library and stores all the registered models.
// If a model named "User" already exists in the "models" object, it assigns that existing model to the "User" variable.
// This prevents redefining the model and ensures that the existing model is reuesed.

export default User;