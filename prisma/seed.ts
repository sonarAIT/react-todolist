import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    await prisma.todo.create({
        data: {
            title: "ウホウホミッドナイト",
            detail: "俺はもうウホウホすることに疲れた。",
            date: "2021-10-10",
        },
    });

    console.log(`Database has been seeded. 🌱`);
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
