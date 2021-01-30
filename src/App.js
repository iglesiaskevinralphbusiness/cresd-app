import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/recipe';
import UpdateRecipe from './views/recipe-update';
import DetailsRecipe from './views/recipe-details';
import NotFound from './views/404';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/add" component={UpdateRecipe}  />
				<Route path="/update/:id" component={UpdateRecipe}  />
				<Route path="/view/:id" component={DetailsRecipe}  />
				<Route path="/not-found" component={NotFound}  />
				<Redirect to="/not-found" />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
