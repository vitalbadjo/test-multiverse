import { showHello } from "./index"

describe("Hello test", () => {
	test("Shold success say hello", () => {
		expect(showHello()).toEqual("Hello Carl v4")
	})
})
