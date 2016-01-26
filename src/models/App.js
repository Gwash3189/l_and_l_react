export default class App {
  constructor(categories = []) {
    this.categories = categories;
  }

  findNotesByCategoryId(categoryId) {
    const [ notes ] = this.categories
                      .filter(category => category.id === categoryId)
                      .map(category => category.notes);
    return notes;
  }
}
