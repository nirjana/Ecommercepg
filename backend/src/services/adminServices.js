import Boom from "@hapi/boom";
import { registerAdmin } from "../controllers/adminController.js";

import Admin from "../models/admin.js"
import { hash, compare, createToken } from '../utils/crypt.js';

/**
 * 
 * @param {Object} data - details of admin to save admin
 * @returns 
 */
export async function saveAdmin(data) {
    const { id ,name,username,address,password,email} =data;
    const existingUser = await new Admin().findByParams({name:name ,username:username,email:email});

    if (existingUser) {
        console.log("user already exist")
        throw Boom.badRequest('User already exist');
    }
    const hashedPassword = hash(password);

    const insertedData = await new Admin().save({name:name ,username:username,email:email,password:hashedPassword});
    console.log("enset",insertedData)

    return {
        data: insertedData,
        message: 'Added Admin sucessfully'
    }
}

/**
 * Details of all admins
 * 
 * @returns {Object} {data: returnedData ,message: 'Succesfully fetched all data'}
 */
export async function getAllAdmins() {
    const returnedData = await new Admin().getAll();

    return {
        data: returnedData,
        message: 'Succesfully fetched all data'
    }
}

/**
 * Update data of Admin
 * 
 * @param {Number} id - id to update data of admin
 * @param {Object} data - data that needs to be updated
 * @returns {Object}{data: returnedData,message: 'Succesfully updated admin'}
 */
export async function updateAdminById(id,data) {
    const returnedData = await new Admin().updateById(id,data);

    return {
        data: returnedData,
        message: 'Succesfully updated admin'
    }
}

/**
 * Deletion of admin by id
 * 
 * @param {Number} id - id of admin to delete
 * @returns {Object} { data: 1,message: 'Succesfully deleted admin'}
 */
export async function deleteAdminById(id) {
    const returnedData = await new Admin().removeById(id);

    return {
        data: returnedData,
        message: 'Succesfully deleted admin'
    }
}

  /**
 * Login validation and token generation.
 *
 * @param {Object} params - details for login
 * @return {Object}  { data: { token, user }, message: "Admin Logged in succesfully",};
 */
export async function login(params) {
    const { username, password } = params;
   console.log("uu",username,password,params)

     if (!username || !password) {
       return {
         message: "Please enter username and password",
       };
          }


    const existingUser = await new Admin().findByParams({username:params.username});
    console.log("exist",existingUser);
    if (!existingUser) {
   
      throw new Boom.badRequest('Invalid credentials');
    }
    const doesPasswordMatch = compare(password, existingUser.password);
    console.log("ehat",doesPasswordMatch);
  
    if (!doesPasswordMatch) {
      logger.error('Invalid credentials: Password does not match');
  
      throw new Boom.badRequest('Invalid credentials');
    }

    const user = {
   
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      currentUser: 'admin'
    };
    console.log("this is user",user)
  
    const token = createToken(user);

    console.log("token",token)
  
    return {
      data: { token, user },
      message: "Admin Logged in succesfully",
    };
  }

