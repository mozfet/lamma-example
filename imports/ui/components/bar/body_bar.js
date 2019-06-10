// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './body_bar.html'

// on created
Template.body_bar.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.body_bar.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.body_bar.helpers({
  helper() {
    const instance = Template.instance()
    return 'body_bar'
  }
})

// events
Template.body_bar.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.body_bar.onDestroyed(() => {
  const instance = Template.instance()
})
