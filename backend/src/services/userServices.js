import Boom from "@hapi/boom";

import User from "../models/user.js"
import { hash, compare, createToken } from '../utils/crypt.js';

export async function registerUser(data) {
    const {name,password,email,avatar} =data;
   console.log(data)
    const existingUser = await new User().findByParams(data);
    console.log("esi",existingUser)
    if (existingUser) {
        console.log("user already exist")
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new User().save(data);
    console.log("enset",insertedData)

    return {
        data: insertedData,
        message: 'Added User sucessfully',
    }
}

export async function saveUser(data) {
    const { id ,name,username,address,password,email} =data;

    const existingUser = await new User().findByParams(data);
    console.log("esi",existingUser)
    if (existingUser) {
        console.log("user already exist")
        throw Boom.badRequest('User already exist');
    }

    const insertedData = await new User().save(data);
    console.log("enset",insertedData)

    return {
        data: insertedData,
        message: 'Added User/customer sucessfully'
    }
}

export async function getAllUsers() {
    const returnedData = await new User().getAll();

    return {
        data: returnedData,
        message: 'Succesfully fetched all data'
    }
}

export async function getUserDetails(id) {
    const insertedData = await new User().findById(id);
    console.log("enset", insertedData);
    console.log(insertedData);
    if (!insertedData) {
      console.log("User not Found");
      throw Boom.badRequest("User not Found");
    }
    return {
      data: insertedData,
      message: "Find U{ser} sucessfully",
    };
  }
  

export async function updateUserById(id,data) {
  const oldData = await new User().findByParams({id:id});

  const updatedData = {
    name:data.name || oldData.name,
    email:data.email || oldData.email,
    username:data.username || oldData.username,
    password:data.password || oldData.password,
}
console.log("updateduser srvice",updatedData)
    const returnedData = await new User().updateById(id,updatedData);

    return {
        data: returnedData,
        message: 'Succesfully updated user'
    }
}

export async function deleteUserById(id) {
    const returnedData = await new User().removeById(id);

    return {
        data: returnedData,
        message: 'Succesfully deleted customer/user'
    }
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function login(params) {
    const { username, password } = params;
   console.log("uu",username,password,params)
    const existingUser = await new User().findByParams(params);
    console.log("exist",existingUser);
    if (!existingUser) {
   
      throw new Boom.badRequest('Invalid credentials');
    }
    // const isPasswordMatched = await existingUser.comparePassword(password); //to check the input password with database ma vayeko password
    // console.log(isPasswordMatched + `PasswordMatched`);
 
    // if (!isPasswordMatched) {
    //   return {
    //     message: "Invalid email or (password)",
    //   };}
      
    const user = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'user'
    };
  
    console.log("ayore",user)
    return {
      data: { user },
      message: 'User/Customer Logged in succesfully',
    };
  }





 
