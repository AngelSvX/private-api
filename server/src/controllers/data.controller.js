import { showAnalisticData, showDesignerData, showProgrammerData } from "../services/data.service.js";

export const getDataProController = async (req, res) => {
  try {
    const response = showProgrammerData();
    res.status(200).json({response});
  } catch (error) {
    console.log("Ocurrió un error en getDataProController");
    console.log("-----------------------------------")
    console.log(error)
    res.status(500).json(error);
  }
};

export const getDataDesController = async (req, res) => {
  try {
    const response = showDesignerData();
    res.status(200).json({response});
  } catch (error) {
    console.log("Ocurrió un error en getDataProController");
    res.status(500).json(error);
  }
};

export const getDataAnController = async (req, res) => {
  try {
    const response = showAnalisticData();
    res.status(200).json({response});
  } catch (error) {
    console.log("Ocurrió un error en getDataProController");
    res.status(500).json(error);
  }
};
