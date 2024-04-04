import mogoose from "mongoose";

async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI;
    await mogoose.connect(DB_URI, {
      retryWrites: true,
      w: "majority",
      authSource: "admin",
      user: "jbmongo",
      pass: "jbmongo",
    });
  } catch (error) {
    console.log("Error of Mongo ", error);
  }
}

export default dbConnect;
