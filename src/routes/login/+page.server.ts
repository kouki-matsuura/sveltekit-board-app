import { prisma } from "../../../prisma/prisma";
import type { Actions } from "@sveltejs/kit";
import { goto } from "$app/navigation";
/** @type {import('./$types').Actions} */
export const actions: Actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get("name")?.toString();
        const password = data.get("password")?.toString();
    
        const user = await prisma.user.findFirst({
            where: {
                name,
                password
            }
        })

        if (!user) {
            return {
                errorMessage: "名前またはパスワードが間違えています。"
            }
        }
        goto("/routes/2")
  
    }
}