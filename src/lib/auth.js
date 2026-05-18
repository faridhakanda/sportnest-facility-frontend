import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
//import { jwt } from "better-auth/plugins";

//import { client } from "@/db";
const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db('SportNestDB');

export const auth = betterAuth({
    
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client
    }),
    // socialProviders: {
    //     google: {
    //         clientId: process.env.GOOGLE_CLIENT_ID,
    //         clientSecret: process.env.GOOGLE_CLIENT_SECRET
    //     }
    // },
    // plugins: [
    //     jwt(),
    // ]
});
