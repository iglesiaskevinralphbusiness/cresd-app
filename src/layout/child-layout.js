import React from "react";
import { useHistory } from 'react-router-dom';

const ChildLayout = (props) => {
    const history = useHistory();
    
    return (
        <div className="wrap">
            <button type="button" className="btn btn-primary"  onClick={() => history.goBack()}>Return</button>
            {props.children}
        </div>
    )
}

export default ChildLayout;
