import React from "react";
import { IAny, IString } from '../models/models';
import { API_URL } from '../utils/constant/index';

const RecipeCardsPhoto = ({ image, size }) => {
    return image ? <img src={`${API_URL}${GetSize(image, size)}`} className="card-img-top" alt="..." /> : <p  className="card-img-top"><span>No image</span></p>;
}

const GetSize = (image, size) => {
    switch(size){
        case "L":
            return image.full;
        case "M":
            return image.medium;
        case "S":
            return image.small;
        default:
            return image.full;
    }
}

RecipeCardsPhoto.propTypes  = {
    image: IAny,
    size: IString,
}

export default RecipeCardsPhoto;
