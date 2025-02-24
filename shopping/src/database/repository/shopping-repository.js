const mongoose = require("mongoose");
const { OrderModel, OrderSubModel, CartModel } = require("../models");
const { v4: uuidv4 } = require("uuid");

//Dealing with data base operations
class ShoppingRepository {
  async Orders(customer_id) {
    const orders = await OrderModel.find({ customer_id:customer_id});

    return orders;
  }

  async Cart(customerId) {
    const cartItems = await CartModel.find({ customerId: customerId });

    if (cartItems) {
      return cartItems;
    }

    throw new Error("Data Not found!");
  }



  async AddCartItem(customerId, item, qty, isRemove) {
    // return await CartModel.deleteMany();

    const cart = await CartModel.findOne({ customerId: customerId });

    const { _id } = item;

    if (cart) {
      let isExist = false;

      let cartItems = cart.items;

      if (cartItems.length > 0) {
        cartItems.map((item) => {
          if (item.product._id.toString() === _id.toString()) {
            if (isRemove) {
              cartItems.splice(cartItems.indexOf(item), 1);
            } else {
              item.unit = qty;
            }
            isExist = true;
          }
        });
      }

      if (!isExist && !isRemove) {
        cartItems.push({ product: { ...item }, unit: qty });
      }

      cart.items = cartItems;

      return await cart.save();
    } else {
      return await CartModel.create({
        customerId,
        items: [{ product: { ...item }, unit: qty }],
      });
    }
  }

  async GetOrders() {
    try {
      const all = await OrderModel.find();
      return all;
    } catch (error) {
      return {
        "error" : error
      }
    }
  }

  async CreateNewOrder(orderData) {
    try {
        const order = new OrderModel({ ...orderData });
        return await order.save();
    } catch (error) {
        console.error("Error Creating Order:", error);
        throw error;
    }
}

async CreateNewOrderSub(orderSubData) {
  try {
      const orderSub = new OrderSubModel({ ...orderSubData });
      return await orderSub.save();
  } catch (error) {
      console.error("Error Creating Subscription Order:", error);
      throw error;
  }
}


}

module.exports = ShoppingRepository;
