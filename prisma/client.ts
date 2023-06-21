import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

//add prisma to node global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

//Prevent multiple prisma instances
declare const global: CustomNodeJsGlobal;

const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = client;

export default client;
