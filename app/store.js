/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import { 
    applyMiddleware, 
    legacy_createStore as createStore 
} from 'redux';
import { createLogger } from 'redux-logger'
import { List } from 'immutable';

// Logger middleware
const logger = createLogger({
    stateTransformer: state => state.toArray()
})

// Action types
const CREATE_TODO = 'CREATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

// Action functions
export const createTodo = text => ({ type: CREATE_TODO, text })
export const deleteTodo = index => ({ type: DELETE_TODO, index })

/**
 * Reducer update list of todos
 * 
 * @param {List} todos current list of todos
 * @param {object} action update action
 * 
 * @returns updated list
 */
function reducer(todos=new List(), action) {
    switch (action.type) {
        case CREATE_TODO:
            return todos.push(action.text)
        case DELETE_TODO:
            return todos.delete(action.index)
        default:
            return todos;
    }
}

// Redux store
export const store = createStore(
    reducer, 
    applyMiddleware(logger))