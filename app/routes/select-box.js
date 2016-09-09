import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    const objValues = [{ id: 1, name: 'Parzival' }, {id: 2, name: 'Art3mus'}, {id: 3, name: 'Aech'}, {id: 4, name: 'Shoto'}]

    return {
      string: {
        values: ['Parzival', 'Art3mus', 'Aech', 'Shoto'],
        selected: 'Aech'
      },
      object: {
        values: objValues,
        selected: objValues[2]
      }
    }
  },

  actions: {
    didChange (selection, component) {
      alert(selection)
    }
  }

})
