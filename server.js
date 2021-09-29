import { createServer } from "miragejs"
import books from './json/book.json'

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/books", () => {
        return books
      })
      this.post("/add", (schema, req) => {
        console.log(req)
        const newbook = JSON.parse(req.requestBody)
        books.push(newbook)
      })
    },
  })

  return server
}