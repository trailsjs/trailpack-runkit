'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: {
      RunkitController: class RunkitController {
        runkitEndpoint (request) {

        }
      }
    },
    services: { }
  },
  config: {
    main: {
      packs: [
        require('../')
      ]
    },
    runkit: {
      context: { }
    }
  }
}, smokesignals.FailsafeConfig)


