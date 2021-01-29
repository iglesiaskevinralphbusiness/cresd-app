import Home from '../views/recipe';
import AddRecipe from '../views/recipe-add';
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
        component: AddRecipe,
        exact: false,
    },
    {
        path: '/update',
        component: UpdateRecipe,
        exact: false,
    },
    {
        path: '/view',
        component: DetailsRecipe,
        exact: false,
    },
    {
        path: '/not-found',
        component: NotFound,
        exact: false,
    }
]