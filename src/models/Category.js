import set from 'lodash/set';
import get from 'lodash/get';
import id from './../helpers/id-helpers';
import { hashOf } from './../helpers/app-helper'

export default class Category {
  constructor(title, ...notes) {
    this.title = title;
    this.notes = hashOf(...notes);
    this.id = id();
  }
}
