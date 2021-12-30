import { getUser } from "@vitalbadjo/pack2/src"

export function showHello(): string {
	const user = getUser("Carl")
	return `Hello ${user} v24`
}
