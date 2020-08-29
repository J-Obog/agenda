const module_alias = require('module-alias')


module_alias.addAliases({
  "@config": __dirname + "/config"
})


module_alias()