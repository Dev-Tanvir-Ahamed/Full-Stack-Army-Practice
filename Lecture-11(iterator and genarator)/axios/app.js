const axios = require('axios').default;


async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data: users } = await axios.get(url);
    return users;
}


async function * getPostByUser(users) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    for(let i = 0; i < users.length; i++){
        const {data : posts} = await axios.get(`${url}?userId=${users[i].id}`);
        yield posts;
    }

}

getUsers().then(async (users) => {
        const userIterator = await getPostByUser(users)
        // await userIterator.next()
        // await userIterator.next()
        // console.log(await userIterator.next());
        for await (let post of userIterator){
            console.log(post.map((p) => p.id));
        }
}).catch((err) => {
    console.log(err);
})

console.log(getUsers());