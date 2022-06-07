import { 
    applyMiddleware, 
    legacy_createStore as createStore 
} from 'redux';
import { createLogger } from 'redux-logger'
import { List } from 'immutable';

const INITIAL_STATE = new List()

const logger = createLogger({
    stateTransformer: state => state.toArray()
})

const CREATE_TODO = 'CREATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

export const createTodo = text => ({ type: CREATE_TODO, text })
export const deleteTodo = index => ({ type: DELETE_TODO, index })

function reducer(todos=INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_TODO:
            return todos.push(action.text)
        case DELETE_TODO:
            return todos.delete(action.index)
        default:
            return todos;
    }
}

export const store = createStore(
    reducer, 
    applyMiddleware(logger))