import React, { Component } from 'react';

class Messaging extends Component {
    //Where does URL fit into this?
    state = {
        text: {
            user: '',
            textmessage: ''
        }
    }

    sendText = _ => {
        const { text } = this.state;
        //pass text message GET variables via query string
        fetch()
            .catch(err => console.error(err))
    }

    render() {
        const { text } = this.state;
        const spacer = {
            margin: 8
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="App">
                <div style={{ marginTop: 10 }} >
                    <h2> Message </h2>
                    <br />
                    <input value={text.recipient}
                        onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
                    <div style={spacer} />
                    <label> Message </label>
                    <br />
                    <textarea rows={3} value={text.textmessage} style={textArea}
                        onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
                    <div style={spacer} />
                    <button onClick={this.sendText}> Send Text </button>
                </div>
            </div>
        );
    }
}

export default Messaging;