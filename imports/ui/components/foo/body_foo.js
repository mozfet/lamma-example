// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './body_foo.html'

// on created
Template.body_foo.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.body_foo.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.body_foo.helpers({
  helper() {
    const instance = Template.instance()
    return 'body_foo'
  }
})

// events
Template.body_foo.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.body_foo.onDestroyed(() => {
  const instance = Template.instance()
})
