import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions'

class ToDoList extends React.Component {
    state = { content: "" }
    render() {
        return (<React.Fragment>
            <ul>
                {this.props.todos.map((todo) => {
                    return (

                        <li
                         key={todo.id}> 
                           <input type="checkbox" checked={todo.checked} 
                           onClick={() => this.props.toggleToDo(todo.id)}/>
                            <span onClick={() => { this.props.selectToDo(todo.id) }}>{todo.content}</span>
                            <button onClick={() => this.props.removeToDo(todo.id)}>X</button>
                        </li>
                    )

                })}
            </ul>
            <input type="text" onChange={(e) => { this.setState({ content: e.target.value }) }} />

            <button onClick={() => { this.props.addToDo(this.state.content) }}>Press me</button>
            <div>
                <button onClick={() => {
                    this.props.updateToDo({id: this.props.selectedToDoId, content: this.state.content})
                }}>Update Selected</button>
            </div>
            {this.props.selectedToDoId === -1 && <div>'no item selected'</div>}
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        selectedToDoId: state.selectedToDoId
    }
}

const mapDispatchToProps = {
    addToDo: actions.addToDo,
    removeToDo: actions.removeToDo,
    selectToDo: actions.selectToDo,
    updateToDo: actions.updateToDo,
    toggleToDo: actions.toggleToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)