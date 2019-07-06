import React from 'react'

export default ({ task, deleteTask }) => {
  return (
    <tr key={ task.id }>
        <td>
        { task.description } -
        {/* <EditInput
            onChange={this.props.onChange} 
            handleEdit={this.props.handleEdit} />
            input={task} */}
        <button onClick={() => deleteTask(task.id)}>Borrar tarea</button>
        </td>
    </tr>
  )
}
