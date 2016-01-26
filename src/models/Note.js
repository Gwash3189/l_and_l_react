let count = 0;
function id() {
  count = count + 1;
  return count;
}

export default class Note {
  constructor(title, content, date = new Date()) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.id = id();
  }
}
