import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import Faker from 'faker';

export default Model.extend({
  emailaddress: attr('string'),
  message: attr('string'),

  isValid: Ember.computed.notEmpty('emailaddress'),

  randomize() {
    this.set('emailaddress', this._fullAddress());

    // If you would like to use in chain.
    return this;
  },

  _fullAddress() {
    return  ' '; //*`${Faker.emailaddress.streetAddress()}, ${Faker.emailaddress.city()}`;*//
  }
});
