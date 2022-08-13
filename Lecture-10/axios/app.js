const axios = require('axios').default;

const user_url = 'https://jsonplaceholder.typicode.com/users';

const post_url = 'https://jsonplaceholder.typicode.com/posts'

const comment_url = 'https://jsonplaceholder.typicode.com/comments'

async function getUser(username){
  const {data : user} =  await axios.get(`${user_url}?username=${username}`);
  console.log(user);
    // const {data : posts} = await axios.get(`${post_url}?userId=${user[0].id}`);
    // console.log(posts);
}

getUser('Bret');

