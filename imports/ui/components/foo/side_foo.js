// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './side_foo.html'

// on created
Template.side_foo.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.side_foo.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.side_foo.helpers({
  helper() {
    const instance = Template.instance()
    return 'side_foo'
  }
})

// events
Template.side_foo.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.side_foo.onDestroyed(() => {
  const instance = Template.instance()
})
