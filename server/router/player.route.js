const PlayerController = require("../controller/player.controller");

module.exports = (app) => {
  app.get("/api/test", PlayerController.test);
  app.get("/api/", PlayerController.getAllPlayers);
  app.post("/api/", PlayerController.addPlayer);
  app.get("/api/:id", PlayerController.getPlayerById);
  app.delete("/api/:id", PlayerController.removePlayer);
  app.put("/api/:id", PlayerController.updatePlayer);
};
