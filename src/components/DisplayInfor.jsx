import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUser, handleDeleteUser } = this.props;

        return (
            <div>
                {listUser.map((user) => (
                    <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                        <div>My name is: {user.Name}</div>
                        <div>My Age: {user.Age}</div>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default DisplayInfor;
