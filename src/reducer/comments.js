import { normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from '../helpers'
import { ADD_COMMENT } from '../constants';



export default (commentsState = arrToMap(defaultComments), action) => {
    const {type, payload, randomId} = action
    switch (type){
        case ADD_COMMENT:
        debugger;
            return {...commentsState, [randomId]: payload.comment}
        
        default: return commentsState
    }
}