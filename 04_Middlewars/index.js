import express from "express";
const app = express();

function middleware (req , res , next){
    console.log("Method is" + req.method);
    console.log("URL is" + req.url);
    console.log("Date is" + new Date());
}

app.use(middleware)

app.get("/sum/:a/:b", function (req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({
    answer: Number(a) + Number(b),
  });
});

app.get("/subract/:a/:b", function (req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({
    answer: Number(a) + Number(b),
  });
});

app.get("/multiply/:a/:b", function (req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({
    answer: Number(a) + Number(b),
  });
});

app.get("/divide/:a/:b", function (req, res) {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({
    answer: Number(a) + Number(b),
  });
});

app.listen(3000, () => {
  console.log("Server is Running on Port: 3000");
});
