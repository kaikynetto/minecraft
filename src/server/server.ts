import express from 'express'
import http from 'http'
import path from 'path'

const port = 10000

class App {
    private server: http.Server
    private port: number
    constructor(port: number) {
        this.port = port
        const app = express()
        app.use(express.static(path.join(__dirname, '../client')))
        this.server = new http.Server(app)
    }

    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
            console.log('\x1b[35m%s\x1b[0m', `Running on http://localhost:${this.port}`)
        })
    }
}

new App(port).Start()
