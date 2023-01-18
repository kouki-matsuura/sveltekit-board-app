import { prisma } from "../../../prisma/prisma"
import type { Actions } from "./$types";

/** @type {import('./$types').Actions} */
export const actions: Actions = {
    register: async ({request}) => {
        //TODO: 登録処理を記述する
        const data = await request.formData();
        const name = data.get("name")?.toString();
        const password = data.get("password")?.toString();
        
        if (!name || !password) {
            return {
                message: "名前とパスワードは必須入力です"
            }
        }
        await prisma.user.create({
            data: {
                name,
                password,
                created_at: new Date(),
                updated_at: new Date(),
            },
        })

        await prisma.$disconnect();
    }
}