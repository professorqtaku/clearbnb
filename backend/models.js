const mongoose = global.mongoose

const User = mongoose.model("User", {
  email: {
    type: String,
    require: true,
    unique: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: Number
  }
})

const Address = mongoose.model("Address", {
  street: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  county: {
    type: String
  },
  country: {
    type: String,
    required: true,
  },
})

const Amenity = mongoose.model("Amenity", {
  description: {
    type: String,
    unique: true,
    required: true
  },
  icon: {
    type: String
  }
});

const Hosting = mongoose.model("Hosting", {
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  amenities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Amenity"
  }],
  galleries: [{
    type: String
  }]

});

const Booking = mongoose.model("Booking", {
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hosting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hosting",
    required: true,
  },
  timePeriod: [{
      type: Number,
      required: true,
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  guestAmount: {
    type: Number,
    required: true
  }
});

const Availability = mongoose.model("Availability", {
  timePeriod: [
    {
      type: Number,
      required: true
    },
  ],
  hosting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hosting",
    required: true
  },
});

module.exports = {
  users: User,
  addresses: Address,
  amenities: Amenity,
  hostings: Hosting,
  bookings: Booking,
  availabilities: Availability
}