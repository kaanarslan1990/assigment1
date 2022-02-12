import axios from "axios";

async function getData(number) {
  const { data } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + number
  );

  let posts = [post];
  let a = { posts };
  let c = { ...data, ...a };  
  console.log(c);
};

export default getData;
