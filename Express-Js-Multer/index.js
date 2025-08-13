const express = require("express");
var hbs = require("hbs");
const path = require("path");
const fs = require("fs");

const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix+ext);
  },
});

const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

/// TEMPLATE ENGINE USING HBS

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.get("/", (req, res) => {
  res.render("home.hbs", {
    firstname: "Upload",
    lastname: "Resume",
  });
});

app.get("/products", (req, res) => {
  res.render("products.hbs", {
    products: ["Watch", "Shirts", "Sunglasses"],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
