import { Horse } from "./horses.model.js";

export const postHorse = async (req, res) => {
  try {
    const horse = new Horse(req.body);
    await horse.save();
    res.status(201).json(horse);
  } catch (error) {
    res.status(500).end();
  }
};

export const getHorses = async (req, res) => {
  try {
    const horses = await Horse.find();
    res.status(200).json(horses);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteHorse = async (req, res) => {
  try {
    const { _id } = req.body;
    await Horse.findByIdAndDelete({ _id: _id });
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
};

export const putHorse = async (req, res) => {
  try {
    const { newHorseData } = req.body;
    const horseId = newHorseData._id;
    const updatedHorse = await Horse.findByIdAndUpdate(horseId, newHorseData, {
      new: true,
    });

    if (!updatedHorse) {
      return res.status(404).json({ message: "Horse not found" });
    }

    res.status(201).json(newHorseData);
  } catch (error) {
    console.log(error.message);
  }
};
