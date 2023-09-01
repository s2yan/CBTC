import React from 'react';
import '../Styles/ToDoList_style.css';

const CompletedTasks = ({ completedTasks }) => {
    return (
        <div className='task-list'>
            <table>
                <tbody>
                    {completedTasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedTasks;
