const mongoose = global.mongoose

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number
  },
  birthDate: {
    type: String
  }
})

const Address = mongoose.model("Address", {
  street: {
    type: String,
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
const Accommodation = mongoose.model("Accommodation", {
  description: {
    type: String,
    unique: true,
    required: true
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
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Accommodation",
    required: true
  },
  galleries: [{
    type: String,
    required: true
  }],
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  guestAmount: {
    type: Number,
    required: true
  },
  bedAmount: {
    type: Number,
    required: true
  },
  bedroomAmount: {
    type: Number,
    required: true
  },


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
  accommodations: Accommodation,
  hostings: Hosting,
  bookings: Booking,
  availabilities: Availability
}