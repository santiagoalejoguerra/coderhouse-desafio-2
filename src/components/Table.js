import React from 'react'
import Item from './Item.js'

export default ({ tasks, deleteTask, onChange }) => {
  return (
    <div>
        { ( tasks && tasks.length) ? 
        <table className="Table">
            <tbody>
                    { 
                        tasks.map(task => 
                            <Item key={ task.id } task={ task } deleteTask={ deleteTask } 
                                onChange={ onChange }/>) 
                    }
                    </tbody>
            </table>
        :
        <div>No hay tareas que mostrar</div>
        }
    </div>
  )
}
