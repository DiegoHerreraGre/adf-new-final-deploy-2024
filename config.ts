const getEnvironmentVariable = (environmentVariable: string): string => {
	const unvalidatedEnvironmentVariable = process.env[environmentVariable];
	if (!unvalidatedEnvironmentVariable) {
		throw new Error(
			`Couldn't find environment variable: ${environmentVariable}`
		);
	} else {
		return unvalidatedEnvironmentVariable;
	}
};

export const config = {
	apiKeySupabase: getEnvironmentVariable(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaHVucmpjY3p0cmt6bmhiY2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMTM2NjYsImV4cCI6MjAzMDc4OTY2Nn0.oDjDFH84aSS6nCqWJ0JpclI5Cy4fWkgOaao6v0M0kL8"
	),
	apiUrlSupabase: getEnvironmentVariable(
		"https://lfnhunrjccztrkznbclf.supabase.co"
	),
	emailjsPublicKey: getEnvironmentVariable("Y1unP1oWpwcmvdmn1"),
	emailjsTemplateId: getEnvironmentVariable("template_b54056f"),
	emailjsPrivateKey: getEnvironmentVariable("I8Lf0OuLtHnENJg8FScDD"),
	emailjsServiceId: getEnvironmentVariable("service_okbl3ew"),
};
