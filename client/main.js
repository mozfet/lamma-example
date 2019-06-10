import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'
import '/imports/startup/client/routes.js'
import '/imports/ui/layouts'

Meteor.startup(() => {
  Blaze.render(Template.main_layout, document.getElementsByTagName('body')[0])
})
