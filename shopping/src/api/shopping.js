const ShoppingService = require("../services/shopping-service");
const UserAuth = require("./middlewares/auth");
const { SubscribeMessage, PublishMessage } = require("../utils");
const { CUSTOMER_BINDING_KEY } = require("../config");

module.exports = (app,channel) => {

  const service = new ShoppingService();
  SubscribeMessage(channel,service);

  app.post("/order", UserAuth, async (req, res, next) => {
    console.log("Processing Order...");

    try {
        const { _id } = req.user;
        const orderData = {
            customer_id: _id,
            ...req.body
        };

        console.log("Received Order Data:", orderData); 
        
        const { data } = await service.PlaceOrder(orderData);
        const payload = await service.GetOrderPayload(_id, data, "CREATE_ORDER");
        
        PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(payload));
        res.status(200).json(data);
    } catch (error) {
        console.error("Order Processing Error:", error);
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong while processing the order",
            errors: error.errors || {}
        });
    }
});

app.post("/orderSub", UserAuth, async (req, res, next) => {
  console.log("Processing Subscription Order...");

  try {
      const { _id } = req.user;
      const orderSubData = {
          customer_id: _id,
          ...req.body
      };

      console.log("Received Subscription Order Data:", orderSubData);

      const { data } = await service.PlaceOrderSub(orderSubData);
      const payload = await service.GetOrderPayload(_id, data, "CREATE_ORDER_SUB");

      PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(payload));
      res.status(200).json(data);
  } catch (error) {
      console.error("Subscription Order Processing Error:", error);
      res.status(400).json({
          success: false,
          message: error.message || "Something went wrong while processing the subscription order",
          errors: error.errors || {}
      });
  }
});


  app.get("/orders", UserAuth, async (req, res, next) => {
    console.log("aaaaaayelllloooo");
    
    const { _id } = req.user;

    const { data } = await service.GetOrders(_id);

    res.status(200).json(data);
  });

  app.put("/cart", UserAuth, async (req, res, next) => {
    const { _id } = req.user;

    const { data } = await service.AddToCart(_id, req.body._id);

    res.status(200).json(data);
  });

  app.delete("/cart/:id", UserAuth, async (req, res, next) => {
    const { _id } = req.user;

    const { data } = await service.AddToCart(_id, req.body._id);

    res.status(200).json(data);
  });

  app.get("/cart", UserAuth, async (req, res, next) => {
    const { _id } = req.user;

    const { data } = await service.GetCart({ _id });

    return res.status(200).json(data);
  });

  //payment
  app.post("/pay",async(req,res,next) => {
    const amount = req.body.total;
    const { data } = await service.CompletePayment({amount});

    if(data.error) {
      
      return res.status(500).json({
        message: 'failed payment',
      });
    }

    return res.status(200).json(data);
  });

  app.get("/getAll",async(req,res,next) => {
    const { data } = await service.GetAll();
    if(data.error) {
      return res.status(500).json({
        message: 'failed to get orders',
      });
    }
    return res.status(200).json(data);
  } )

  app.get("/whoami", (req, res, next) => {
    return res.status(200).json({ msg: "/shoping : I am Shopping Service" });
  });
};
