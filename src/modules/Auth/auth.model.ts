import mongoose, { Schema } from "mongoose";
import { authType } from "./auth.types";

const authSchema = new Schema<authType>({

    phone_number: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    blood_group: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    division: { type: String, required: true },
    district: { type: String, required: true },
    upazila: { type: String, required: true },
    last_donation_date: { type: Date },
    status: { type: String, enum: ["Available", "Unavailable"], required: false,default: "Unavailable" },
    role: { type: String, enum: ["Donor", "Volunteer", "Admin"], required: false,default:"Donor" }
}, { timestamps: true });

const authModel = mongoose.model<authType>("auth", authSchema)

export default authModel  