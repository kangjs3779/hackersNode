// 필요한 모듈 가져오기
import express from "express";
import morgan from "morgan";

// 최상위 함수를 인스턴스로 만들어 상수에 담기
const app = express();

// 요청으로 들어올 때, express.json을 통해야지 해석이 가능함
app.use(express.json());
// dev모드로 하여 자세한 로그를 확인 할 수 있음
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("running"));

let port = 4000;
app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);
})