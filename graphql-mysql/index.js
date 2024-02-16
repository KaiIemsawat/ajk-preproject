import dotenv from "dotenv";
import server from "./api/server";

dotenv.config();

const port = process.env.PORT || 3300;

process.on("uncaughtException", (err) => {
    console.error(`${new Date().toUTCString()} uncaughtException : `, err);
    process.exit(0);
});

process.on("unhandledRejection", (err) => {
    console.error(`${new Date().toUTCString()} unhandledRejection`, err);
});

server.listen({ port }, () =>
    console.log(`SERVER HAS LAUNCH 🚀 ON PORT : ${port}/api`)
);
