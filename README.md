# SQLite create DB

# Desc
- SQLite를 이용해 데이터 테이블을 만들고 데이터를 생성

```javscript
// index.js
const { sequelize, Posts } = require("./database");

// DB 연결
sequelize.sync().then(function (res) {
  console.log("데이터 모델 연결됨");
});
```

```javascript
// data.js
// SQL ORM 모듈 추가
const { Sequelize, DataTypes } = require("sequelize");

// DB 생성
const sequelize = new Sequelize({
  dialect: "sqlite", // db 종류
  storage: "database.sqlite", // 파일명
});

// Model(테이블) 생성
const Posts = sequelize.define("Posts", {
  // Model 속성 정의 (create)
  id: {
    type: DataTypes.INTEGER, // 문자형
    autoIncrement: true, // 빈값 허용을 NOT NULL(필수값)
    allowNull: false,
    primaryKey: true,
  },
  post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, Posts };
```

## Install
```bash
$ npm i
```
- sequelize
- sqlite3

