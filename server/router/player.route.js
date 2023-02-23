const PlayerController = require("../controller/player.controller");

module.exports = (app) => {
  app.get("/test", PlayerController.test);
  app.get("/", PlayerController.getAllPlayers);
  app.post("/", PlayerController.addPlayer);
  app.get("/:id", PlayerController.getPlayerById);
  app.delete("/:id", PlayerController.removePlayer);
  app.put("/:id", PlayerController.updatePlayer);
};
