import React from "react";
import { IAny, IString } from '../models/models';
import { API_URL, IMAGE_SIZE } from '../utils/constant/index';

const RecipeCardsPhoto = ({ image, size }) => {
    return image ? <img src={`${API_URL}${GetSize(image, size)}`} className="card-img-top" alt="..." /> : <p  className="card-img-top"><span>No image</span></p>;
}

const GetSize = (image, size) => {
    switch(size){
        case IMAGE_SIZE.l:
            return image.full;
        case IMAGE_SIZE.m:
            return image.medium;
        case IMAGE_SIZE.s:
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
