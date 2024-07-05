"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerHTTP {
    constructor(httpServer) {
        this.httpServer = httpServer;
    }
    async get(url, options) {
        return this.httpServer(url, { ...options, method: "GET" });
    }
    async post(url, body, options) {
        return this.httpServer(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json", ...options?.headers },
            ...options
        });
    }
    async put(url, body, options) {
        return this.httpServer(url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json", ...options?.headers },
            ...options
        });
    }
    async delete(url, options) {
        return this.httpServer(url, { ...options, method: "DELETE" });
    }
}
exports.default = ServerHTTP;
//# sourceMappingURL=ServerHTTP.js.map