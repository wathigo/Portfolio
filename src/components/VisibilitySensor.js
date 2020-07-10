import React, { useState } from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

const VisibilitySensor = (props) => {
    const [state, setState] = useState({active: true})
    const { active } = state;
    const { once, children, ...theRest } = props;
    return (
        <VSensor
            active={active}
            onChange={isVisible =>
                once &&
                isVisible &&
                setState({ active: false })
            }
            {...theRest}
        >
            {({ isVisible }) => children({ isVisible })}
        </VSensor>
    );
}

VisibilitySensor.propTypes = {
    once: PropTypes.bool,
    children: PropTypes.func.isRequired
};

VisibilitySensor.defaultProps = {
    once: false
};

export default VisibilitySensor;