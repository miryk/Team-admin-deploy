const { Player } = require("../model/player.model");

module.exports.test = (req, res) => {
  res.json({ message: "Backend is functioning" });
};

module.exports.getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Player.find({});
    res.json(allPlayers);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

module.exports.addPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.json(newPlayer);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

module.exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findOne({ _id: req.params.id });
    res.json(player);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

module.exports.removePlayer = async (req, res) => {
  try {
    const deleted = await Player.findOneAndDelete({ _id: req.params.id });
    res.json({ "Player deleted": deleted });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

module.exports.updatePlayer = async (req, res) => {
  try {
    const update = await Player.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true }
    );
    res.json(update);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
