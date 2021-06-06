const express = require('express');
const router = express.Router();

const { Film } = require("../../db");


router.get("/", async (req, res) => {
  res.send("funcionaaa!!");
  const films = await Film.find();
  res.json(films);
});


router.post("/", async (req, res) => {
  const film = await Film.create(req.body);
  res.json(film);
});


router.put('/:filmId', async (req, res) => {
    await Film.update(req.body,{
        where: { id: req.params.filmId }
    })
    res.json({success: 'se ha modificado'})
})


router.delete('/:filmId', async (req,res) =>{
    await Film.destroy({
        where: {id: req.params.filmId}
    })
    res.json({ success: 'se ha borrado la pelicula'})
})


module.exports = router;
