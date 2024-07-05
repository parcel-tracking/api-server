import ServerHTTP from "../../adapters/infrastructures/ServerHTTP";
export default class NServerHTTP extends ServerHTTP {
    constructor(httpServer: (input: RequestInfo, init?: RequestInit) => Promise<Response>);
    get(url: string, options?: RequestInit): Promise<Response>;
    post(url: string, body: any, options?: RequestInit): Promise<Response>;
    put(url: string, body: any, options?: RequestInit): Promise<Response>;
    delete(url: string, options?: RequestInit): Promise<Response>;
}
