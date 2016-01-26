let count = 0;
function id() {
  count = count + 1;
  return count;
}

export default class Note {
  constructor(title, notes = []) {
    this.title = title;
    this.notes = notes;
    this.id = id();
  }
}
