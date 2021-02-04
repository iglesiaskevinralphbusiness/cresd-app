import React from "react";
import { IAny } from '../models/models';
import { API_URL } from '../utils/constant/index';

const RecipeCardsPhoto = ({ image }) => {
    return image ? <img src={`${API_URL}${image?.full}`} className="card-img-top" alt="..." /> : <p  className="card-img-top"><span>No image</span></p>;
}

RecipeCardsPhoto.propTypes  = {
    image: IAny,
}

export default RecipeCardsPhoto;
