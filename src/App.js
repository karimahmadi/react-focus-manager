import React from 'react'
import FocusWithin from './FocusWithin';
import FocusTrap from './FocusTrap';
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <FocusTrap className="PartOne">                    
                    <h1>Welcome</h1>
                    <div><input /></div>
                    <FocusWithin className="div-input">
                        <div className="div-input-container">
                            <input />
                            <input />
                        </div>
                    </FocusWithin>
                    <FocusWithin className="div-tabbable-within">
                        <div className="inline">
                            <div>
                                Hellow, just click on me!
                    </div>
                            <div className="div-tabbable" tabIndex="0">
                                Tabbable div
                    </div>
                        </div>
                    </FocusWithin>
                    <div className="div-tabbable" tabIndex="0">
                        Tabbable div
                    </div>
                    <div className="div-button">
                        <button>Test Button</button>
                    </div>
                    <FocusWithin>
                        <input />
                    </FocusWithin>
                </FocusTrap>
                <FocusTrap className="PartOne">
                    <h1>Welcome</h1>
                    <div><input /></div>
                    <FocusWithin className="div-input">
                        <div className="div-input-container">
                            <input />
                            <input />
                        </div>
                    </FocusWithin>
                    <FocusWithin className="div-tabbable-within">
                        <div className="inline">
                            <div>
                                Hellow, just click on me!
                        </div>
                            <div className="div-tabbable" tabIndex="0">
                                Tabbable div
                        </div>
                        </div>
                    </FocusWithin>
                    <div className="div-tabbable" tabIndex="0">
                        Tabbable div
                </div>
                    <div className="div-button">
                        <button>Test Button</button>
                    </div>
                    <FocusWithin>
                        <input />
                    </FocusWithin>
                </FocusTrap>
            </div>
        )
    }
}

export default App;