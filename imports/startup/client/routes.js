import { Router } from 'meteor/msavin:parrot'

Router.init({
  home: "foo",
  onError: function () {
    console.error('Routing error.')
  },
  onChange: function (newRoute, oldRoute) {
    console.log('route change to:', newRoute.hash)
  }
})

Router.register({
  foo: parameters => {
    console.log('foo route parameter:', parameters)
  },
  bar: parameters => {
    console.log('bar route parameters:', parameters)
  }
})
