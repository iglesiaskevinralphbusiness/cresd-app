import { HTTP } from '../config/axios-config';

export const getRecipes = () => HTTP.get('recipes/');
export const getSpecials = () => HTTP.get('specials/');
export const getRecipe = (id) => HTTP.get('recipes/' + id);
export const addRecipe = (params) => HTTP.post('recipes/', params);
export const updateRecipe = (id, params) => HTTP.put('recipes/' + id, params);
export const deleteRecipe = (id) => HTTP.delete('recipes/' + id);