import { Arcade } from "@arcadeai/arcadejs"
import { executeOrAuthorizeZodTool, toZodToolSet } from "@arcadeai/arcadejs/lib"

// Initialize Arcade
const arcade = new Arcade()

// Get Arcade GoogleHotels Toolkit
// Toolkit names can be found in the Arcade dashboard via Tools > view > Toolkit or via the CLI `arcade workers list`
const hotelToolkit = await arcade.tools.list({ toolkit: "GoogleHotels", limit: 30 })

/**
 * Mastra requires tools to be defined using Zod, a TypeScript-first schema validation library
 * that has become the standard for runtime type checking. Zod is particularly valuable because it:
 * - Provides runtime type safety and validation
 * - Offers excellent TypeScript integration with automatic type inference
 * - Has a simple, declarative API for defining schemas
 * - Is widely adopted in the TypeScript ecosystem
 *
 * Arcade provides `toZodToolSet` to convert our tools into Zod format, making them compatible
 * with Mastra.
 *
 * The `executeOrAuthorizeZodTool` helper function simplifies authorization.
 * It checks if the tool requires authorization: if so, it returns an authorization URL,
 * otherwise, it runs the tool directly without extra boilerplate.
 *
 * Learn more: https://docs.arcade.dev/home/use-tools/get-tool-definitions#get-zod-tool-definitions
 */
export const hotelTools = toZodToolSet({
    tools: hotelToolkit.items,
    client: arcade,
    userId: "rayjsmets@gmail.com", // Your app's internal ID for the user (an email, UUID, etc). It's used internally to identify your user in Arcade
    executeFactory: executeOrAuthorizeZodTool, // Checks if tool is authorized and executes it, or returns authorization URL if needed
})
