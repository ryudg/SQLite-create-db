const express = require("express");
const app = express();
const ejs = require("ejs");

const { sequelize, Posts } = require("./database");

// DB 연결
sequelize.sync().then(function (res) {
  console.log("데이터 모델 연결됨");
});

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", async function (req, res) {
  // db 불러오기
  const posts = await Posts.findAll();
  console.log(JSON.stringify(posts));
  res.render("pages/index.ejs", { posts });
});

// about
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
