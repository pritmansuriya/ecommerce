import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            requried: true,
        },

        email: {
            type: String,
            requried: true,
            unique: true,
        },

        password: {
            type: String,
            requried: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = 
    models.User || mongoose.model("User", userSchema);

export default User;