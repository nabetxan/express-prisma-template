// seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Example seed data
  const users = [
    {
      name: "Alice",
      email: "alice@example.com",
    },
    {
      name: "Bob",
      email: "bob@example.com",
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Seed data inserted successfully.");

  // Disconnect Prisma Client
  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error("Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Ensure Prisma Client is disconnected
    await prisma.$disconnect();
  });
