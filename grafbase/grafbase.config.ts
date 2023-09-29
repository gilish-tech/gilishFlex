import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database

const User = g.model("User",{
  name: g.string().length({"min":2,"max":100}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description: g.string().optional(),
  githubUrl:g.url().optional(),
  linkedInUrl:g.url().optional(),
  project: g.relation()


}) 

export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
