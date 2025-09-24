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

    // New instance
    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false
    })

    await movie3.save()

    const person = await Person.create({
      firstName: 'Craig T.',
      lastName: 'Nelson'
    })

    // findByPk()
    // const movieById = await Movie.findByPk(2)
    // console.log(movieById.toJSON())

    // findOne()
    // const movieByRuntime = await Movie.findOne({ where: { runtime: 103 } })
    // console.log(movieByRuntime.toJSON())

    // findAll()
    const movies = await Movie.findAll()
    console.log(movies.map((movie) => movie.toJSON()))

    // findAll() but filter results
    const people = await Person.findAll({
      where: {
        lastName: 'Nelson'
      }
    })

    console.log(people.map((person) => person.toJSON()))
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map((err) => err.message)
      console.error('Validation errors: ', errors)
    } else {
      throw error
    }
  }
})()
