module.exports = {

    posts: [
        {
            id: "thththth",
            tittle: "Teste do mural",
            description:"descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(tittle,description){
        this.posts.push({id:generateID(),tittle,description});
    }

}
function generateID(){
    return Math.random().toString(36).substr(2,9);
}