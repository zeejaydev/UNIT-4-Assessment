const express = require("express");
const cors = require("cors");

const app = express();
let name2 = ''

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/name", (req, res) => {
  res.status(200).send(name2);
});

app.delete("/api/delete", (req, res) => {
  name2=''
  res.status(200).send(name2);
});

app.post("/api/name/:name", (req, res) => {
  const { name } = req.params
  name2 = name
  res.status(200).send(name2);  
});

app.put("/api/name/:newname", (req, res) => {
  const { newname } = req.params
  name2 = newname
  res.status(200).send(name2);  
});

app.get("/api/fortunes",(req,res)=>{
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air. (2)",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
    "A friend is a present you give yourself."
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
})

app.listen(4000, () => console.log("Server running on 4000"));
