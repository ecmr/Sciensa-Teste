import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('contacts'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();

      //let model = this.controller.get('model');

      //if (model.get('isNew')) {
      //  model.destroyRecord();
      //}

    }
  }
});