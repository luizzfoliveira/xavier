import { BASE_URL } from "./Dropdown";
import axios from "axios";

var i;

export const getCidades = async (app) => {
  if (app.estadosExecute.length === 0) {
    app.setState({ cidades: [] });
    return;
  }
  const response = await axios.get(
    BASE_URL + "/cidades?state=" + app.estadosExecute
  );
  const data = await response.json();
  var opt = [];
  for (i = 0; i < data.length; i++) {
    opt.push({ label: data[i], value: data[i] });
  }
  app.setState({ cidades: opt });
};
