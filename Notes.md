dynamic (request time) data -> fetch in component
static (build time) data -> export fetched data from a component\
Route segments (folder names) wrapped in parentheses are not visible in the URL, but are used to generate the path for the route.
Route segments (folder names) wrapped in square brackets are used to generate routes dynamically based on the data in the request, like an [id].

revalidatePath -> revalidates the underlying data on a route for a specific path, use when updating, creating, or deleting data on the route where that data is used. Generally, this is used for dynamic routes before calling redirect.

use UUIDs for security

pass parameters to server actions with `.bind()`.

