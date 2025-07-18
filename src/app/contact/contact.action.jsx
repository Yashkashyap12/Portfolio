'use server';
import { db } from "../../../config/db";

export const contactAction = async (formData) => {
     console.log(formData.get("name"))

     const {name, email, message} = Object.fromEntries(formData.entries());
     console.log(name,email,message);

     await db.execute(`insert into contact_messages(name,email,message) values (?,?,?)`,[name,email,message])
}