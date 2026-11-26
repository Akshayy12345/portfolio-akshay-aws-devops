const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const publicDir = path.join(__dirname, "public");

app.disable("x-powered-by");
app.use(express.static(publicDir, {
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0
}));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "healthy", application: "Akshay Portfolio" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio listening on port ${PORT}`);
});
