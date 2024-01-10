import { Horse } from "./horses.model";

export const postHorse = async (req, res) => {
  const horse = new Horse(req.body);
  try {
    await horse.save();
    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
};

export const getHorses = async (req, res) => {
  const horses = await Horse.find();
  res.json(horses);
};

export const deleteHorse = async (req, res) => {
  const { _id } = req.body;
  await Horse.findByIdAndDelete({ _id: _id });
  res.send();
};
