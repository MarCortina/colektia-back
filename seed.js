const Film = require('./database/models/Film')

const film1 ={
    title:"Guardianes de las galaxias",
    description:"Me la recomendo Julia"
}

const film2 ={
    title:"Avengers",
    description:"VEr todas el finde que llueve"
}

const film3 ={
    title:"Los puentes de Madison",
    description:"Para llorar"
}

const film4 ={
    title:"La bruja de Blairwitch",
    description:"Terror y panico"
}

const filmArray = [film1,film2,film3,film4]



let filmPromise = () => Film.bulkCreate(filmArray)
  .then(res => {
    console.log(`-->pelis agregadas`);
    return res;
  });

  filmPromise()
  .then(() => console.log(`----Seed terminado----`));