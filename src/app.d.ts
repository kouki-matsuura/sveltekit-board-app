// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Roles } from "@prisma/client"



// and what to do when importing types
declare namespace App {
	interface Locals {
		user: {
			name: string
			role: Roles
		}
	}
}
