import React from "react";

class AddUserInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Age: ''
        };
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.state.Name && this.state.Age) {
            // Pass the new user to the parent
            this.props.handleAddnewUser({
                id: Math.floor((Math.random() * 100) + 1) + "user",
                Name: this.state.Name,
                Age: parseInt(this.state.Age)
            });

            // Reset the input fields after submission
            this.setState({
                Name: '',
                Age: ''
            });
        }
    };

    handleNameChange = (event) => {
        this.setState({
            Name: event.target.value
        });
    };

    handleAgeChange = (event) => {
        this.setState({
            Age: event.target.value
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={this.state.Name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Age"
                            value={this.state.Age}
                            onChange={this.handleAgeChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default AddUserInfor;
