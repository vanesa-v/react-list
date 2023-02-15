import { Component } from "react";

export default class EditForm extends Component {
    state = {
        text: this.props.text,
        id: this.props.id,
    };

    handleOnChange = (e) => {
        this.setState({ text: e.target.value });
    };

    sendData = (e) => {
        if (e.type === "click" || e.key === "Enter") {
            const type = e.target.dataset.type;
            this.props.onSave(this.state, type);
            this.props.onCancel();
        }
        if (e.key === "Escape") {
            this.props.onCancel();
        }
    };

    render() {
        const { text } = this.state;
        const { onCancel, type } = this.props;

        return (
            <div className="input-group">
                <input
                    type="text"
                    value={text}
                    data-type={type}
                    className="form-control"
                    onChange={this.handleOnChange}
                    onKeyUp={this.sendData}
                    autoFocus
                />
                <button
                    data-type={type}
                    className="btn btn-success btn-sm"
                    onClick={this.sendData}
                >
                    &#10003;
                </button>
                <button className="btn btn-danger btn-sm" onClick={onCancel}>
                    X
                </button>
            </div>
        );
    }
}
