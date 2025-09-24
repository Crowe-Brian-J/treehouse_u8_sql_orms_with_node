const db = require('./db')
const { Movie } = db.models

void (async () => {
  await db.sequelize.sync({ force: true })

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
      runtime: 81,
      releaseDate: '1995-11-22',
      isAvailableOnVHS: true
    })

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnVHS: true
    })
  } catch (err) {
    console.error('Error connecting to the database: ', err)
  }
})()
