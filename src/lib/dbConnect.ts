import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  //importent to check if we are already connected to the database
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI! || ""
    );
    console.log("connectionInstance", connectionInstance);

    connection.isConnected = connectionInstance.connections[0].readyState;
    console.log("connection.isConnected", connection.isConnected);

    console.log("Db Connected successfully");
  } catch (error) {
    console.log("Error connecting to the database:", error);
    process.exit(1);
  }
}

export default dbConnect;
