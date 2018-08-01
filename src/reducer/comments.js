import { normalizedComments as defaultComments} from '../fixtures';
import {} from '../constants';

const commetnsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {})

export default (commentsState = commetnsMap, action) => {
    const {type} = action

    switch (type){
    }

    return commentsState
}