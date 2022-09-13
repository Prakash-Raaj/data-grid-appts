import axios from "axios";

const url: string =
  "https://api.stackexchange.com/2.3/questions?pagesize=100&order=desc&sort=activity&site=stackoverflow";

const fetchData: any = async () => {
  const response: any = await axios.get(url);

  return response.data.items;
};

export default fetchData;
