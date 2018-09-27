class Comment {
    constructor(text) {
        this.id = Comment.id;
        this.text = text
        Comment.id++
    }
}

Comment.id = 0
export default Comment;