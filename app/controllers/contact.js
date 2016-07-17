import Ember from 'ember';

export default Ember.Controller.extend({

 isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
 isMessageSize:  Ember.computed.gte('message.length', 5),

 isDisabled: Ember.computed.not('isValid'),

 isValid: Ember.computed.and('isValidEmail', 'isMessageSize'),


actions: {
    /* function de Validação */
	sendMessage: function () {

      alert(`you email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `We received your email and we will contact you soon: your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
	}
  }  

});
