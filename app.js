const db = require('./db')
const { Movie } = db.models

void (async () => {
  await db.sequelize.sync({ force: true })

  try {
    const movie = await Movie.create({
      title: 'Toy Story'
    })

    const movie2 = await Movie.create({
      title: 'The Incredibles'
    })
  } catch (err) {
    console.error('Error connecting to the database: ', err)
  }
})()
