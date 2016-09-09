import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('input')
  this.route('text-area')
  this.route('select-box')
  this.route('radio-buttons-boolean')
  this.route('radio-buttons')
})

export default Router
