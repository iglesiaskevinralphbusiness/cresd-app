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