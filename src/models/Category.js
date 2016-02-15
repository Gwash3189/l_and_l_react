import id from './../helpers/id-helpers'

export default class Category {
  constructor(title, notes = []) {
    this.title = title;
    this.notes = notes;
    this.id = id();
  }
}
