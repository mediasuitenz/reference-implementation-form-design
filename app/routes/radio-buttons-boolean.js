import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return {
      hasTaste: false,
      errors: {
        hasTaste: [{
          message: 'This is not a valid selection'
        }]
      }
    }
  },

  actions: {
    didEnjoy (isTrue) {
      if (isTrue) alert('Of course you did, it\'s awesome')
      else alert('GAME OVER!')
    }
  }
})
