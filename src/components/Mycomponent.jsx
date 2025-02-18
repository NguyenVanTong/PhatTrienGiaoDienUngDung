import React from "react";
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 17 },
            { id: 3, Name: "Chien", Age: 32 },
        ]
    };

    handleAddnewUser = (userObject) => {
        // Correct usage of setState
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        });
    };

    handleDeleteUser = (userID) => {
        // Avoid mutating state directly
        const listUserClone = this.state.listUser.filter(item => item.id !== userID);
        this.setState({
            listUser: listUserClone
        });
    };

    render() {
        return (
            <div>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
                <hr />
                <DisplayInfor 
                    listUser={this.state.listUser} 
                    handleDeleteUser={this.handleDeleteUser} 
                />
            </div>
        );
    }
}

export default Mycomponent;
