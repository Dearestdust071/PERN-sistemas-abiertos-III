import  Router  from "express";
import { createProduct } from "./handlers/product";
import { handleInputErrors } from "middleware";
const router = Router();


router.use('/', handleInputErrors ,(req, res, next) => {
  console.log("Instancia de router llamada?");
  next();
}); 

router.get("/", handleInputErrors ,(req, res) => {
res.send("Get");
});

router.post("/", handleInputErrors,createProduct);

router.put("/",  handleInputErrors,(req,res) => {
    res.send("put")
})

router.delete("/", handleInputErrors ,(req,res) =>{
    res.send("delete")
})


export default router;

