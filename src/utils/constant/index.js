
const API_URL = 'http://localhost:3001/';

const PAGE_URL = {
    home: '/',
    addRecipe:'/add',
    updateRecipe: '/update',
    detailsRecipe: '/view',
    pageNotFound: '/not-found',
};

const FORM_ACTION = {
    add: 'add',
    update: 'update',
};

const FORM_TYPES = {
    text: 'text',
    number: 'number',
    group: 'group',
};

const FORM_RECIPE_INPUTS = [
    {
        name: 'title',
        label: 'Title',
        type: FORM_TYPES.text,
    },
    {
        name: 'description',
        label: 'Description',
        type: FORM_TYPES.text,
    },
    {
        name: 'cookTime',
        label: 'Cooking Time',
        type: FORM_TYPES.number,
    },
    {
        name: 'prepTime',
        label: 'Preperation Time',
        type: FORM_TYPES.number,
    },
    {
        name: 'servings',
        label: 'Servings',
        type: FORM_TYPES.number,
    },
    {
        name: 'ingredients',
        label: 'Ingredients',
        type: FORM_TYPES.group,
        inputs: [
            {
                name: 'name',
                label: 'Name',
                type: FORM_TYPES.text,
            },
            {
                name: 'measurement',
                label: 'Measurement',
                type: FORM_TYPES.text,
            },
            {
                name: 'amount',
                label: 'Amount',
                type: FORM_TYPES.number,
            },
        ]
    },
    {
        name: 'directions',
        label: 'Directions',
        type: FORM_TYPES.group,
        inputs: [
            {
                name: 'instructions',
                label: 'Instructions',
                type: FORM_TYPES.text,
            },
            {
                name: 'optional',
                label: 'Optional',
                type: FORM_TYPES.text,
            },
        ]
    },
];

const INPUT_GROUP = {
    ingredients: 'ingredients',
    directions: 'directions',
}

export {
    API_URL,
    PAGE_URL,
    FORM_ACTION,
    FORM_TYPES,
    FORM_RECIPE_INPUTS,
    INPUT_GROUP,
}