import id from './../helpers/id-helpers'

export default class Note {
  constructor(title, content, date = new Date()) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.id = id();
  }
}
