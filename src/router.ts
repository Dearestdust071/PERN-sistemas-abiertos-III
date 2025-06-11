import  Router  from "express";

const router = Router();


router.use('/', (req, res, next) => {
  console.log("Instancia de router llamada?");
  next();
}); 

router.get("/", (req, res) => {
res.send("Get");
});

router.post("/", (req, res) => {
  res.send("Post")
});

router.put("/", (req,res) => {
    res.send("put")
})

router.delete("/", (req,res) =>{
    res.send("delete")
})


export default router;

