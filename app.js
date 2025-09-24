const db = require('./db')
const { Movie, Person } = db.models

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

    const person = await Person.create({
      firstName: 'Craig T.',
      lastName: 'Nelson'
    })
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map((err) => err.message)
      console.error('Validation errors: ', errors)
    } else {
      throw error
    }
  }
})()
