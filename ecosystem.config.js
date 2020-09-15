module.exports = {
  apps : [{
    name: "Sudoku helper",
    script: "build/server",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}