const UUID = require('uuid');

const posts = new Map();

const createPost = ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        datePosted: new Date()
    }

    posts.set(post.id,post);
}

const getPosts = () => {
    return [...posts.values()];
}

const getPost = id => {
    return posts.get(id);
}

module.exports = createPost;
module.exports = getPosts;
module.exports = getPost;
