import React from "react";

// Styles
import { Wrapper } from "./ButtonMore.styles";

const ButtonMore = ({text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

export default ButtonMore;