const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3004;

// Serve static React build
app.use(express.static(path.join(__dirname, "dist"))); // change "dist" if your build folder is named differently

// Fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ React app is running at http://localhost:${PORT}`);
});
