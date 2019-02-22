const express = require("express");

const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
	const response = {
		message: "We have launched",
		code: 200
	};
	return res.status(200).json(response);
});

app.listen(port, () => {
	console.log(`Server is running ${port}`);
});
