const config = require('config')

const databaseConfig = config.get('database')

module.exports = () => {
  const Sequelize = require('sequelize')

  const sequelize = new Sequelize(
    databaseConfig.uri,
    databaseConfig.options || {}
  )

  const User = sequelize.define('user', {
    email: { type: Sequelize.STRING }
  })

  sequelize.sync()

  return {
    sequelize,
    User
  }
}
