const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// // const port = 9999

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const cloudbase = require("@cloudbase/node-sdk");

// // // const init = cloudbase.init({env:'magic-7gmqd9iafbefa003',secretId:'699d3072-ed7d-440e-a7d5-fe0b0a654891',secretKey:'-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQDOTFhIxKsz8+F3al0ZT9dH+iwgBpxQVb148dZD1arzoa3TrjZs\noB5dVSf5Np5E92RxkP9n7zmmPh0RsJ5qQw7pnOLSIFZauiFVEziJmxkP1YMOIUIT\nYufd4OZDHaR/XHiZpZj3E4m+J3fTdaN+J5Z/Lo316TCLD0+QFOhG4RvBzwIDAQAB\nAoGBALnecUCG6ZVyazbzPxQ6KkXwcecc7aM3zPF2Os19anv9tKbe9KwkC5edzNkt\ny6VpnDbyJBvZnwBYQEqa7e/hoUFd+0kASHSn28jMpUwn2FEwKoaRNbWfy2o8jNdl\n6YvBmsV8Ozct2KLFMpeBuzzpja6O+NxvWEq6QxkeQSj5hy3hAkEA5TriXv9CGJoz\n0Z/ov+Qu8iSoc7tI1zvgykqdVEttpdJcBFQeU2B0wdBRDS+7/Wzw6IAkr5OiWTLp\nzl6mHFqUPwJBAOZj4trFPHwD01cvzOnOe1bcHIEA95XRGcJiuyK/LTr9NyTcuieP\nY9ykMI5gTD08b76NyY8WzVfWKkg+njZDLnECQQDE7bd4ATbZR/BokEY2RGQIZnHJ\nKwZC0hAl+b/7oOlL4dJnbZS38E+eCcb32yBXcXXtZ9kcdWqt0s2GG039YdulAkBk\n6QE280bvxrktqfklu1PYkqZFdsf6rdCLjLUMnhHQkZIyqh87Lpn9zUibQ+CAvdTv\n8KiE7ObZ/ysb45lmiPxxAkAD7dmlxJvxhDojEPGoSnfxop02xKU6/D4h/aHV8KQQ\ndx4UfqEuHSNbFk3bnTRT5W2lc9XdVz5uSAo/D87wZBfc\n-----END RSA PRIVATE KEY-----\n","env_id":"magic-7gmqd9iafbefa003'});
// // // const tcb = require('@cloudbase/node-sdk');
// // // 1. 直接使用下载的私钥文件
// const init = cloudbase.init({
//   env: 'magic-7gmqd9iafbefa003', // 您的环境id
//   credentials: require('./tcb_custom_login_key(magic-7gmqd9iafbefa003).json')
// });
// // // 2. 开发者自有账号体系下的唯一用户ID
// const customUserId = '100029144787';
// // // 3. 创建ticket
// const ticket = init.auth().createTicket(customUserId, {
//   refresh: 10 * 60 * 1000 // 每十分钟刷新一次登录态， 默认为一小时
// });
// // // 4. 将ticket返回客户端
// // return ticket;

const tcb = require("@cloudbase/node-sdk");

const init = tcb.init({
  env: "magic-7gmqd9iafbefa003", // 您的环境id
  secretId: "AKIDGSVSEpW1IKhrpY3fCg5IKCvlNmyxiNr9",
  secretKey:"GJ9lALI6LRL3hIn7FCwSmw42nNsGd1GH",
  credentials: {
    private_key_id: "699d3072-ed7d-440e-a7d5-fe0b0a654891", // 私钥文件中获取
    private_key:
      '"-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQDOTFhIxKsz8+F3al0ZT9dH+iwgBpxQVb148dZD1arzoa3TrjZs\noB5dVSf5Np5E92RxkP9n7zmmPh0RsJ5qQw7pnOLSIFZauiFVEziJmxkP1YMOIUIT\nYufd4OZDHaR/XHiZpZj3E4m+J3fTdaN+J5Z/Lo316TCLD0+QFOhG4RvBzwIDAQAB\nAoGBALnecUCG6ZVyazbzPxQ6KkXwcecc7aM3zPF2Os19anv9tKbe9KwkC5edzNkt\ny6VpnDbyJBvZnwBYQEqa7e/hoUFd+0kASHSn28jMpUwn2FEwKoaRNbWfy2o8jNdl\n6YvBmsV8Ozct2KLFMpeBuzzpja6O+NxvWEq6QxkeQSj5hy3hAkEA5TriXv9CGJoz\n0Z/ov+Qu8iSoc7tI1zvgykqdVEttpdJcBFQeU2B0wdBRDS+7/Wzw6IAkr5OiWTLp\nzl6mHFqUPwJBAOZj4trFPHwD01cvzOnOe1bcHIEA95XRGcJiuyK/LTr9NyTcuieP\nY9ykMI5gTD08b76NyY8WzVfWKkg+njZDLnECQQDE7bd4ATbZR/BokEY2RGQIZnHJ\nKwZC0hAl+b/7oOlL4dJnbZS38E+eCcb32yBXcXXtZ9kcdWqt0s2GG039YdulAkBk\n6QE280bvxrktqfklu1PYkqZFdsf6rdCLjLUMnhHQkZIyqh87Lpn9zUibQ+CAvdTv\n8KiE7ObZ/ysb45lmiPxxAkAD7dmlxJvxhDojEPGoSnfxop02xKU6/D4h/aHV8KQQ\ndx4UfqEuHSNbFk3bnTRT5W2lc9XdVz5uSAo/D87wZBfc\n-----END RSA PRIVATE KEY-----\n', // 私钥文件中获取
    env_id: "magic-7gmqd9iafbefa003", // 私钥文件中获取
  },
});

// 1. 获取数据库引用
var db = init.database();

app.post("/post", (req, response) => {
  const { name, pwd } = req.body;
  response.send({ name, pwd });
  const post = async (event, context) => {
    const res = await db
      .collection("chat_online_user")
      .add({ name: name, pwd: pwd });
    return {
      res,
    };
  };
  const postRes = post();
  console.log(postRes);
  // db.collection('chat_online_user').add({name:name,pwd:pwd}).then(res=>{
  //     // console.log(res);
  //     res.send(response)
  // })
});

// const auth = app.auth();

// async function login(){
//   const loginState = await auth.getLoginState();
//   // 1. 建议登录前检查当前是否已经登录
//   if(!loginState){
//     // 2. 请求开发者自有服务接口获取ticket
//     const ticket = await fetch('https://service-9opt9dia-1316423047.gz.apigw.tencentcs.com/release/helloworld-1672823154')
//     // 3. 登录 Cloudbase
//     await auth.signInWithTicket(ticket);
//   }
// }
// login();
// https://service-9opt9dia-1316423047.gz.apigw.tencentcs.com/release/helloworld-1672823154


const getUser = async (name) => {
    const res = await db
      .collection("chat_online_user")
      .where({
        name:name
      })
      .get();
  console.log(res);
    return res
  };
  app.get('/getName',(req,response)=>{
    const name = req.query.name
    console.log(req.query);

    getUser(name).then(res=>{
        console.log('res',res.data[0]);
        response.send(res.data[0])
    })
  })
module.exports = app;
