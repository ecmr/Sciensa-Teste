import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      contacts: this.store.findAll('contact')
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
    controller.set('contacts', model.contacts);
  }
});
