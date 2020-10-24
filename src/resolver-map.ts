const glob = require('glob')
const path = require('path')
import { mergeResolvers } from '@graphql-tools/merge'

const files = glob
  .sync('./src/resolvers/**/*.resolvers.ts')
  .map(function (file: any) {
    console.log('loading resolver: ', path.resolve(file))
    return require(path.resolve(file)).default
  })
const res = mergeResolvers(files)

export default res
