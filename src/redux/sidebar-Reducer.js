const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT';
const SEND_COMMENT = 'SEND-COMMENT';


export const sidebarReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_COMMENT:
            state.newComment = action.comment
            return state;
        case SEND_COMMENT:
            let newComment = state.newComment
            state.popularPosts.push({id:6, title:newComment, viewesCount:1})
            state.newComment =''
            return state;
        default:
            return state;
    }
}

export const updateCommentCreator = (comment) => ({ type: UPDATE_NEW_COMMENT,comment:comment })
export const sendCommentCreator = () => ({ type: SEND_COMMENT })
