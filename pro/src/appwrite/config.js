import { Client, Databases } from "appwrite";
const client = new Client();
client.setEndpoint(import.meta.env.VITE_ENDPOINT);
client.setProject("67288cd7001e2e5ac80a");

const database = new Databases(client);

export { client, database };
