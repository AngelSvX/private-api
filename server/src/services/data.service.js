import { privateApiDB } from "../db/privateApi.js";
import { programmerData, designerData, analisticData } from "../mocks/Data.js";

const showProgrammerData = () => {

  return programmerData;

}

const showDesignerData = () => {

  return designerData;

}

const showAnalisticData = () => {

  return analisticData;

}

export {
  showProgrammerData,
  showDesignerData,
  showAnalisticData
}