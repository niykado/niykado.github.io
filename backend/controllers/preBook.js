const PreBook = require("../model/PreBook");
const createError = require("../utils/createError");
const UserModel = require("../model/User");

const addProduct = async (req, res, next) => {
  try {
    const newProduct = new PreBook(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await PreBook.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await PreBook.findById(id);
    if (!product) {
      throw createError(404, "Product not found");
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const productBooking = async (req, res, next) => {
  const userId = req.params.userid;
  const productId = req.params.id; // Assuming 'id' refers to the product ID to be booked

  try {
    // Use findByIdAndUpdate to update the user document
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $addToSet: { prebook: productId } }, // Using $addToSet to avoid duplicate entries
      { new: true } // Return the updated user document
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

const unBooking = async (req, res, next) => {
  const userId = req.params.userid;
  const productId = req.params.id; // Assuming 'id' refers to the product ID to be booked

  try {
    // Use findByIdAndUpdate to update the user document
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { prebook: productId } }, // Using $addToSet to avoid duplicate entries
      { new: true } // Return the updated user document
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

const getProductByType=async (req, res) => {
  const types = req.query.type;
  try {
    const list = await PreBook.find({"type":types})
    res.status(200).json({list});
  } catch (error) {
   next(error);
  }
}
const getProductByCategory=async (req,res)=>{
  const category=req.query.category;
  try {
    const list=await PreBook.find({"category":category});
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }

}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  productBooking,
  unBooking,
  getProductByType,
  getProductByCategory
};