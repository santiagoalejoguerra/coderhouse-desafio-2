import React, { Component } from 'react'
import Table from './Table.js'

class Main extends Component {

    state = {
        task: '',
        id: 1,
        tasks: [{id: 0, description: 'Primera tarea'}] 
    }

    onChange = name => event => this.setState({[name]: event.target.value})

    addTask = () => {

        /*
            const newArr = [ ... this.state.tasks ]
            newArr.push(task)
            this.setState(bla bla)
        */

        if (this.state.task !== '') {
            this.setState( state => {
                let newId = state.id + 1;
                let newTask = {description: state.task, id: newId}
                const newTasks = state.tasks.concat(newTask);

                return {
                    tasks: newTasks,
                    task: '',
                    id: newId
                }
            });
        } else {
            console.log('La entrada no puede estar vacía.')
        }
        this.focusOnInput();
    }

    changeDescription = event => {
        this.setState({ task: event.target.value })
    }

    deleteTask = id => {
        console.log('Borrando ', id);
        this.setState(state => {
            let newTasks = state.tasks.filter( task => task.id !== id)

            return {
                tasks: newTasks
            }

        });
        this.focusOnInput();
    }

    focusOnInput = () => {
        this.refs.input.focus();
    }

    handleEdit = (id, description) => {
        const taskFound = this.state.tasks.find(task => task.id === id)
        // taskFound
    }

    render() {
        return (
        <div>

            <input 
                ref='input'
                type='text' 
                placeholder='Ingresar nueva tarea' 
                value={this.state.task} 
                onChange={this.changeDescription} 
            />
            <button onClick={this.addTask}>Agregar tarea</button>

            <p />

            <h2>Lista de tareas</h2>
            
            <Table
                tasks={this.state.tasks}
                deleteTask={this.deleteTask} 
                onChange={this.onChange} />

        </div>
        )
    }
}

export default Main