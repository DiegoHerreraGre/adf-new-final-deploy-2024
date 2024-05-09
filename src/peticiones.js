import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lfnhunrjccztrkznbclfl.supabase.co";
const supabaseKey = process.env.APIKEYSUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchBlogs = async (req, res) => {
	try {
		// Parse the request body only if it's a POST request and has a JSON content type
		if (
			req.method === "GET" &&
			req.headers["content-type"] === "application/json"
		) {
			req.body = JSON.parse(req.body);
		}
		const { data, error } = await supabase.from("blogs").select("*");
		if (error) {
			res.status(400).json({ error: error.message });
			return;
		}
		res.status(200).json({ data });
	} catch (err) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export async function getBlogs() {
	let { data: blogs, error } = await supabase
		.from("blogs")
		.select("*")
		.range(0, 9);

	if (error) {
		console.error(error);
		return;
	}

	// Do something with the blogs data
	console.log(blogs);
}

// This export doesn't make sense as it stands, it needs to be within a function
// and you would need to construct the URL properly
// export const blogs_to_fetch = `/api/${process.env.SUPABASE_URL}/${data}`;

/*Please note the following:

- The `fetchBlogs` function is an example of how you might structure an API route handler.
- The `getFirstTenBlogs` function is an example of how to fetch the first ten blog posts from the "blogs" table, and it should be called from within an appropriate context (like another API route handler or server-side code).
- The `blogs_to_fetch` export has been commented out because it's unclear what its purpose is. If you want to construct a URL to fetch blogs, you'll need to do it within a function after you've fetched the data you want to include in the URL.

Remember to replace `console.log(blogs)` and `console.error(error)` with your actual logic for handling the fetched data and errors, respectively.
 */
