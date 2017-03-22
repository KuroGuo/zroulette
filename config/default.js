module.exports = {
  siteURL: 'https://zspin.zcoin.io/',
  port: 80,
  admin: {
    port: 3001,
    password: 'password'
  },
  cookieSession: {
    name: 'session',
    secret: 'secret',
    maxAge: 100 * 365 * 24 * 60 * 60 * 1000
  },
  static: {
    maxAge: 10 * 60 * 1000
  },
  database: {
    uri: 'postgres://zspin:password@localhost:5432/zspin',

    // options: {
    //   logging: false
    // }
  },
  transporter: {
    service: 'outlook',
    port: 587,
    auth: {
      user: 'your@email.com',
      pass: 'password'
    }
  },
  jsonWebTokenSecret: 'secret',
  spinInterval: 12 * 60 * 60 * 1000
}
