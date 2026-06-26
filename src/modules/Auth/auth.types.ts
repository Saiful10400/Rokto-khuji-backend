import mongoose from "mongoose";

export type authType = {
    _id?: mongoose.Schema.Types.ObjectId;
    phone_number: string;
    first_name: string;
    last_name: string;
    blood_group:
    "A+" |
    "A-" |
    "B+" |
    "B-" |
    "AB+" |
    "AB-" |
    "O+" |
    "O-"
    ;
    gender: "Male" | "Female" | "Other";
    division: string;
    district: string;
    upazila: string;
    last_donation_date: Date;
    status: "Available" | "Unavailable";
    role: "Donor" | "Volunteer" | "Admin";

}