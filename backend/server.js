const express = require("express");
const app = express();

// public フォルダを静的ファイルとして使う
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
