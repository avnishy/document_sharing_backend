module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "4624",
    DB: "docs",
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };