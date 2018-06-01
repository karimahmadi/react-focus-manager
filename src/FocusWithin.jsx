import React from 'react';
import ReactDOM from 'react-dom';
import tabbable from 'tabbable';

class FocusWithin extends React.PureComponent {
    static defaultProps = {
        autoFocusElement: "input",
    }

    childRef = React.createRef();

    isKeyboard = false;

    state = {
        isFocused: false,
    };

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
        document.addEventListener('keydown', this.handleKeyDown, true);        

        this.node.addEventListener('focusin', this.handleFocusIn, true);        
        this.node.addEventListener('focusout', this.handleFocusOut, true);

        document.addEventListener('mousedown', this.handleMouseDown);
    }

    handleMouseDown = (ev) => {
        this.isKeyboard = false;

        // Focus on container, allowing next tab to focus on inner element
        if (ev.target === this.node) {
            this.node.focus();
        }

        this.setState({
            isFocused: false
        });
    }

    handleKeyDown = (ev) => {        
        this.isKeyboard = true;
    }

    handleFocusIn = (ev) => {        
        if (this.isKeyboard && !this.state.isFocused) {
            this.setState({
                isFocused: true
            });
     
            const tabbableNodes = tabbable(this.node);            

            if (tabbableNodes.length && !this.node.contains(document.activeElement)) {                   
                tabbableNodes[0].focus();
            }
        }
    }

    handleFocusOut = (ev) => {
        if (this.isKeyboard && !this.node.contains(document.activeElement)) {            
            this.setState({
                isFocused: false
            });
        }
    }

    render() {
        let classes = ['focus-within', this.props.className];
        if (this.state.isFocused) {
            classes.push('focus-visible');            
        }

        return <div className={classes.join(' ')} tabIndex="-1">{this.props.children}</div>;
    }
}

export default FocusWithin;