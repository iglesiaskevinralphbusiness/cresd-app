import Home from '../views/recipe';
import UpdateRecipe from '../views/recipe-update';
import DetailsRecipe from '../views/recipe-details';
import NotFound from '../views/404';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/add',
        component: UpdateRecipe,
        exact: false,
    },
    {
        path: '/update/:id',
        component: UpdateRecipe,
        exact: false,
    },
    {
        path: '/view/:id',
        component: DetailsRecipe,
        exact: false,
    },
    {
        path: '/not-found',
        component: NotFound,
        exact: false,
    }
]