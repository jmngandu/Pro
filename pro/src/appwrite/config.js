import { Client, Databases } from "appwrite";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("67288cd7001e2e5ac80a");

const database = new Databases(client);

export { client, database };
