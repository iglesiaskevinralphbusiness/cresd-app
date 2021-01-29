import { HTTP } from '../config/axios-config';

export const getRecipes = () => HTTP.get('recipes/');
export const getSpecials = () => HTTP.get('specials/');