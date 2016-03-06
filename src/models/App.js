import { hashOf } from './../helpers/app-helper';
import each from 'lodash/each';

export default class App {
  constructor(...categories) {
    this.categories = hashOf(...categories);
  }
}
