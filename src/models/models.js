import PropTypes from 'prop-types';

export const IRecipe = PropTypes.shape({
    uuid: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.object,
    servings: PropTypes.number,
    prepTime: PropTypes.number,
    cookTime: PropTypes.number,
    postDate: PropTypes.string,
    editDate: PropTypes.string,
    ingredients: PropTypes.array,
    directions: PropTypes.array,
});

export const ISpecial = PropTypes.shape({
    uuid: PropTypes.string,
    ingredientId: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    geo: PropTypes.string,
    text: PropTypes.string,
});

export const IFunc = PropTypes.func;
export const IString = PropTypes.string;
export const IArray = PropTypes.array;
export const IAny = PropTypes.any;