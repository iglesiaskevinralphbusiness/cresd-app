import Home from '../views/home';
import AddRecipe from '../views/add-recipe';
import UpdateRecipe from '../views/update-recipe';
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
        path: '/not-found',
        component: NotFound,
        exact: false,
    }
]