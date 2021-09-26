export default `
type Message {
  body: String
  id: ID!
  meta: String
  timestamp: Int
}

type Query {
  hello: String
  messages(count: Int): [Message]
}
`