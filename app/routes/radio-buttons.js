import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    const options = [
      {value: 1, checked: true, label: 'Parzival'},
      {value: 2, checked: false, label: 'Art3mus'},
      {value: 3, checked: false, label: 'Aech'},
      {value: 4, checked: false, label: 'Shoto'},
      {value: 5, checked: false, label: 'Daito', disabled: true}
    ]
    return {
      options: options,
      errors: [{message: 'They\'re all great'}],
      selected: options[1]
    }
  },
  actions: {
    favouriteCharacterChanged (value) {
      alert(`Gunter ${value.label} selected`)
      Ember.set(this, 'controller.model.selected', value)
    }
  }
})
