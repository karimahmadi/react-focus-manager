import React from 'react';
import ReactDOM from 'react-dom';
import tabbable from 'tabbable';

/**
 * Focus trapping with only keyboard driven focus management.
 * Uses div guards at the beginning and end. It helps with edge case where
 * last focus change that exist window is hard to prevent otherwise.
 * It also simplifies logics immensly, as we don't need to have to do additional checks,
 * and we can use native div ordering for separate focus traps.
 */
class FocusTrap extends React.PureComponent {
    isKeyboard = false;

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);

        document.addEventListener('keydown', this.handleKeyDown);        
        document.addEventListener('mousedown', this.handleMouseDown);

        this.node.addEventListener('focusin', this.handleFocusIn);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);        
        this.node.removeEventListener('focusin', this.handleFocusIn);
    }

    focusVisibleElement(element) {
        element.setAttribute('data-focus-visible-added', '');
        element.classList.add('focus-visible');
        element.focus();
    }

    handleKeyDown = (ev) => {
        if (ev.code === 'Escape') {
            console.log('[debug] cancel focus: ', document.activeElement);      
            document.activeElement.blur();            
        }
        this.isKeyboard = true;
    }

    handleMouseDown = (ev) => {
        this.isKeyboard = false;
    }

    handleFocusIn = (ev) => {
        if (!this.isKeyboard) {
            return;
        }
        const focused = document.querySelector(".focus-visible");

        if (!focused) {
            return;
        }

        if (focused.hasAttribute('data-focus-guard-end')) {
            const tabbableNodes = tabbable(this.node);

            // First tabbable excluding guards
            const firstTabbable = tabbableNodes[1];
            this.focusVisibleElement(firstTabbable);
            return;
        }

        if (focused.hasAttribute('data-focus-guard-start')) {
            const tabbableNodes = tabbable(this.node);

            // Last tabbable excluding guards
            const lastTabbable = tabbableNodes[tabbableNodes.length - 2];
            this.focusVisibleElement(lastTabbable);
            return;
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="focus-guard-start" data-focus-guard-start tabIndex="0" />
                {this.props.children}
                <div className="focus-guard-end" data-focus-guard-end tabIndex="0" />
            </div>
        );
    }
}

export default FocusTrap;