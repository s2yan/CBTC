import React from 'react';

const TaskList = ({ index, task, handleDelete, handleMarkCompleted }) => {
    const { text, completed } = task;

    return (
        <tr>
            <td>
                <input type="checkbox" checked={completed} onChange={handleMarkCompleted} />
            </td>
            <td>{text}</td>
            <td>
                <span
                    style={
                        completed
                            ? { backgroundColor: "#3B71CA", color: "white", padding: "2.4px", borderRadius: "5px" }
                            : { backgroundColor: "#f06c6c", color: "white", padding: "2.4px", borderRadius: "5px" }
                    }
                >
                    {completed ? "Finished" : "In Progress"}
                </span>
            </td>
            <td>
                <i
                    className="fa-solid fa-trash"
                    onClick={handleDelete}
                    style={{ marginRight: "50px" }}
                ></i>
            </td>
        </tr>
    );
};

export default TaskList;
