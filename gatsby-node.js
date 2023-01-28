/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
*
*
      tagline: String @shout
      date: Date @dateformat
      image: File @fileByRelativePath 
*
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type inqRSS implements Node {     
      title: [String!]!
      guid: [String!]!
    }
  `
  createTypes(typeDefs)
}
