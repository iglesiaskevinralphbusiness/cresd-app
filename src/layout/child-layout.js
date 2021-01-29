import React from "react";
import { useHistory } from 'react-router-dom';

const ChildLayout = (props) => {
    const history = useHistory();
    
    return (
        <div className="wrap">
            <button type="button" className="btn btn-primary mb-5"  onClick={() => history.goBack()}>Go Back</button>
            {props.children}
        </div>
    )
}

export default ChildLayout;
