import connectdb from "../config/mongodb.js";
import Property from "../models/propertymodel.js"; // make sure the path matches

const seedProperties = async () => {
  try {
    await connectdb();

    console.log("Clearing old property data...");
    await Property.deleteMany();

    console.log("Inserting sample properties...");
    const properties = [
      {
        title: "Luxury Apartment in New York",
        location: "New York, USA",
        price: 750000,
        image: [
          "https://example.com/images/nyc-apartment1.jpg",
          "https://example.com/images/nyc-apartment2.jpg",
        ],
        beds: 3,
        baths: 2,
        sqft: 1500,
        type: "Apartment",
        availability: "Available",
        description:
          "A stunning luxury apartment with city views, modern design, and premium amenities.",
        amenities: ["Pool", "Gym", "Parking", "Elevator"],
        phone: "+1-555-123-4567",
      },
      {
        title: "Cozy Beach House",
        location: "Miami, USA",
        price: 850000,
        image: [
          "https://example.com/images/beach-house1.jpg",
          "https://example.com/images/beach-house2.jpg",
        ],
        beds: 4,
        baths: 3,
        sqft: 2000,
        type: "House",
        availability: "Available",
        description:
          "A cozy beach house with private access to the beach, perfect for family getaways.",
        amenities: ["Beach Access", "Deck", "Outdoor Shower", "Grill"],
        phone: "+1-555-987-6543",
      },
      {
        title: "Modern Condo",
        location: "San Francisco, USA",
        price: 950000,
        image: [
          "https://example.com/images/sf-condo1.jpg",
          "https://example.com/images/sf-condo2.jpg",
        ],
        beds: 2,
        baths: 2,
        sqft: 1200,
        type: "Condo",
        availability: "Available",
        description:
          "A modern condo located in the heart of the city with stunning skyline views.",
        amenities: ["Rooftop", "Doorman", "Parking", "Gym"],
        phone: "+1-555-246-8101",
      },
    ];

    await Property.insertMany(properties);

    console.log("✅ Seed data inserted successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedProperties();
