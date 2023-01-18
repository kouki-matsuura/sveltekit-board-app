import { PrismaClient } from "@prisma/client";
import type { Actions } from "./$types";

/** @type {import('./$types').Actions} */
export const actions: Actions = {
    register: async ({request}) => {
        //TODO: 登録処理を記述する
        const prisma = new PrismaClient();
        const data = await request.formData();
        const userName = data.get("name")?.toString()

        const result = await prisma.user.create({
            data: {
                name: userName ?? "noName",
                created_at: new Date(),
                updated_at: new Date(),
            },
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        })
        console.log("result:", result);
    }
}