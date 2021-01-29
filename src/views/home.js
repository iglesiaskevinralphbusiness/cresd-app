import React from "react";
import FullLayout from '../layout/full-layout';
import { PAGE_URL } from '../utils/constant/index';

class Home extends React.Component {

    render() {
        return (
            <FullLayout>
                <a 
                    className="btn btn-primary" 
                    href={PAGE_URL.addRecipe}
                >
                    Add Recipe
                </a>
            </FullLayout>
        );
    }
}

export default Home;
