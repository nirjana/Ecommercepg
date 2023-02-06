import {Router} from 'express';
// import * as bookController from "./controllers/books.js"
import * as adminController from "./controllers/adminController.js";
import * as userController from "./controllers/userController.js";
import * as productController from "./controllers/productController.js";
import addAdminSchema from "./schemas/addAdmin.js";
import addUserSchema from "./schemas/addUser.js";
import addProductSchema from "./schemas/addProduct.js";
import { validateBody } from './middleware/validation.js';
import authenticate from './middleware/authenticate.js';
import * as dotenv from "dotenv";
dotenv.config({path : '.env'});

console.log("router",process.env.PORT)

const router = Router();

router.get('/',adminController.getAllAdmins)

// router.post('/',authenticate,validateBody(addAdminSchema),adminController.addAdmin)
router.post('/login',adminController.login)

router.post('/register',
// validateBody(addAdminSchema),
adminController.registerAdmin)

router.put('/:adminIdentifier',adminController.updateAdmin)

router.delete('/:adminIdentifier',adminController.deleteAdmin)

router.post('/userLogin',authenticate,validateBody(addUserSchema),userController.login)

router.post('/userRegister',userController.registerUser)

router.get("/users", userController.getAllUsers);

router.put('/users/:userIdentifier',userController.updateUser)

router.delete('/users/:userIdentifier',userController.deleteUser)

router.get("/users/:id", userController.getUserDetails);
router.post("/userRegister/checkout", userController.checkoutUser);

router.get("/products", productController.getAllProducts);

router.post(
    "/products",
    authenticate,
    validateBody(addProductSchema),
    productController.createProduct
  );
  router.get("/products/:id",productController.getProductDetails);

  router.put("/products/:id",authenticate,productController.updateProduct);

  router.delete("/products/:id", productController.deleteProduct);

  router.get("/cart", productController.deleteProduct);


export default router;