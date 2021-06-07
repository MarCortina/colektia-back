const Film = require('./database/models/Film')

const film1 ={
    title:"1",
    description:"fdhsjdhfkjd"
}

const film2 ={
    title:"2",
    description:"fdhsjdhfkjd"
}

const film3 ={
    title:"3",
    description:"fdhsjdhfkjd"
}

const film4 ={
    title:"saracarf",
    description:"fdhsjdhfkjd"
}

const filmArray = [film1,film2,film3,film4]



let filmPromise = () => Film.bulkCreate(filmArray)
  .then(res => {
    console.log(`-->pelis agregadas`);
    return res;
  });

  filmPromise()
  .then(() => console.log(`----Seed terminado----`));