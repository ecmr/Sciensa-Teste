import Ember from 'ember';

export default Ember.Route.extend({

  emailaddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  

  model: function () {
    return this.store.createRecord('contact');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new contact');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('contacts/form');
  },




  actions: {
    
    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('contacts'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});