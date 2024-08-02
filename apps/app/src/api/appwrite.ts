import { Client, Databases } from "appwrite";
import { Server } from "./server";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(Server.ProjectId);

export const database = new Databases(client);
