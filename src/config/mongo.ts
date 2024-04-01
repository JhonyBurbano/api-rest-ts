import mogoose from "mongoose";

async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI;
    console.log("--", DB_URI);
    await mogoose.connect(DB_URI, {
      retryWrites: true,
      w: "majority",
      authSource: "admin",
      user: "jbmongo",
      pass: "jbmongo",
    });
  } catch (error) {
    console.log("Mirar ", error);
  }
}

export default dbConnect;
