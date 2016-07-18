import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  emailaddress: attr('string'),
  message: attr('string'),

  
  isValidEmail: Ember.computed.match('emailaddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),


  //isValid: Ember.computed.gte('message.length', 5 ),  
  //isValid: Ember.computed.match('emailaddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  randomize() {
    this.set('emailaddress', this._fullAddress());

    // If you would like to use in chain.
    return this;
  },

  _fullAddress() {
    return  ' '; //*`${Faker.emailaddress.streetAddress()}, ${Faker.emailaddress.city()}`;*//
  }
});
