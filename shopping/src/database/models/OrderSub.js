const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSubSchema = new Schema(
  {
    payment_mode: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    payment_method: {
      type: String,
      enum: ["upi", "card", "cash"],
      required: function () {
        return this.payment_mode === "online";
      },
    },
    payment_done: {
      type: Boolean,
      default: false,
      required: true,
    },
    products: [
      {
        _id: String,
        banner: String,
        brand: String,
        category: String,
        name: String,
        price: Number,
        quantity: Number,
        regular_price: Number,
        store: String,
        subcategory: String,
        unit: String,
        weight: String,
        subscriptionType: {
          type: String,
          enum: ["Weekly", "Monthly", "Daily", "Alternate days"],
          required: true,
        },
        dates: [String],
        startDate: String,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    address: {
      type: {
        type: String,
        enum: ["restaurant", "hotel", "cafe", "other"],
        required: true,
      },
      completeAddress: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("orderSub", OrderSubSchema);