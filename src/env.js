import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		APIKEYSUPABASE: z.string(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaHVucmpjY3p0cmt6bmhiY2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMTM2NjYsImV4cCI6MjAzMDc4OTY2Nn0.oDjDFH84aSS6nCqWJ0JpclI5Cy4fWkgOaao6v0M0kL8"
		),
		EMAILJSPUBLICKEY: z.string("Y1unP1oWpwcmvdmn1"),
		EMAILJSSERVICEID: z.string("service_okbl3ew"),
		EMAILJSTEMPLATEID: z.string("template_b54056f"),
	},
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
	},
});
