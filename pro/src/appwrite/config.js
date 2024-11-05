import { Client, Databases } from "appwrite";
const client = new Client();
client.setEndpoint(import.meta.env.VITE_ENDPOINT);
client.setProject(import.meta.env.VITE_PROJECT_ID);

const database = new Databases(client);

export { client, database };
