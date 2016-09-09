import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return {
      options: [
        {name: 'pazival', value: 1, checked: true, label: 'Parzival'},
        {name: 'art3mus', value: 2, checked: false, label: 'Art3mus'},
        {name: 'aech', value: 3, checked: false, label: 'Aech'},
        {name: 'shoto', value: 4, checked: false, label: 'Shoto'},
        {name: 'Daito', value: 1, checked: false, label: 'Dioto', disabled: true}
      ],
      otheroptions: [
        {name: 'pazival', value: 1, checked: true, label: 'Parzival'},
        {name: 'art3mus', value: 2, checked: false, label: 'Art3mus'},
        {name: 'aech', value: 3, checked: false, label: 'Aech'},
        {name: 'shoto', value: 4, checked: false, label: 'Shoto'},
        {name: 'Daito', value: 1, checked: false, label: 'Dioto', disabled: true}
      ],
      errors: [{message: 'They\'re all great'}]
    }
  },
  actions: {
    favouriteCharacterChanged (value) {
      alert(`Gunter ${value} selected`)
    }
  }
})
