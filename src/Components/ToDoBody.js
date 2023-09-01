import React, { useState } from 'react';
import '../Styles/ToDoList_style.css';
import TaskList from './TaskList';
import CompletedTasks from './CompletedTasks';

const ToDoBody = () => {
    const [newTaskText, setNewTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [showInProgressTasks, setShowInProgressTasks] = useState(true);

    const handleNewTaskTextChange = (e) => {
        setNewTaskText(e.target.value);
    };

    const addNewTask = () => {
        if (newTaskText.trim() !== '') {
            setTasks([...tasks, { text: newTaskText, completed: false }]);
            setNewTaskText('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const markTaskAsCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    };

    const showInProgress = () => {
        setShowInProgressTasks(true);
    };

    const showCompletedTasks = () => {
        setShowInProgressTasks(false);
    };

    return (
        <div className="container">
            <h3><i className="fa-solid fa-circle-check"></i> My Todo List</h3>
            <div className="Box-header">
                <form onSubmit={(e) => { e.preventDefault(); addNewTask(); }}>
                    <textarea
                        id="add"
                        name="add"
                        rows="4"
                        cols="100"
                        placeholder="Add your task here...."
                        value={newTaskText}
                        onChange={handleNewTaskTextChange}
                    ></textarea>
                    <button id="btn" type="submit">Add Task</button>
                </form>
            </div>
            <div className="task-list">
                <div className="tasks">
                    <button type="button" id='task-btn' onClick={showInProgress}>My Tasks</button>
                    <button type="button" id='completed-task-btn' onClick={showCompletedTasks}>Completed Tasks</button>
                </div>
                {showInProgressTasks ? (
                    tasks.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tasks</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <TaskList
                                        key={index}
                                        index={index}
                                        task={task}
                                        handleDelete={() => deleteTask(index)}
                                        handleMarkCompleted={() => markTaskAsCompleted(index)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )
                ) : (
                    <CompletedTasks completedTasks={tasks.filter(task => task.completed)} />
                )}
            </div>
        </div>
    );
};

export default ToDoBody;
