import React from "react";
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from "./ButtonMore.styles";

const ButtonMore = ({text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

ButtonMore.propTypes ={
    text: PropTypes.string,
    callback: PropTypes.func
};

export default ButtonMore;