import React from "react";
import FullLayout from '../layout/full-layout';
import { PAGE_URL } from '../utils/constant/index';
import { getRecipes } from '../services/services';

class Home extends React.Component {

    componentDidMount(){
        getRecipes().then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

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
