import set from 'lodash/set';
import get from 'lodash/get';
import head from 'lodash/head';
import reduce from 'lodash/reduce';
import curry from 'lodash/curry';
import max from 'lodash/max';
import { markdown } from 'markdown';

export const setCategory = curry((category, categories) => set(categories, category.id, category));
export const getFirstCategory = (categories) => get(categories, head(Object.keys(categories)))
export const has = (obj, ...props) => {
  const keys = Object.keys(obj);
  return keys.length === 0
    ? false
    : props.every(x => keys.indexOf(x) > -1)
}

export const hashOf = (...items) => {
  return reduce(items, (x, item) => {
    return set(x, get(item, 'id'), item)
  }, {});
}

export const updateNote = (notes, note) => {
  return set(notes, note.id, note);
}

export const markdowned = (value) => {
  return markdown.toHTML(value);
}

export const serialiseApp = (state) => {
  localStorage.setItem('app-state', JSON.stringify(state));
}

export const loadApp = (defaultValue) => {
  const app = localStorage.getItem('app-state');

  return app === null
    ? defaultValue
    : JSON.parse(app);
}

export const addModelToHash = (hash, model) => set(hash, model.id, model)

export const getHighestIdFromHash = (hash) => max(Object.keys(hash).map(x => Number(x)))
