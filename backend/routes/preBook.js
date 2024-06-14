const router = require("express").Router();
const {
  addProduct,
  getProducts,
  getProduct,
  productBooking,
  unBooking,
  getProductByType,
  getProductByCategory
} = require("../controllers/preBook");
const { verifyUser}=require("../utils/tokenVerification");


router.get("/type", getProductByType);
router.get("/category",getProductByCategory)
router.post("/", addProduct);

router.get("/", getProducts);
router.get("/:id", getProduct); 
router.post('/:id/:userid',verifyUser ,productBooking);
router.delete('/:id/:userid',verifyUser,unBooking);



module.exports = router;
