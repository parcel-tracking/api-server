import { Injectable } from "@nestjs/common"
import ServerHTTP from "../../adapters/infrastructures/ServerHTTP"

@Injectable()
export default class NServerHTTP extends ServerHTTP {
  async get(url: string, options?: RequestInit): Promise<Response> {
    return super.get(url, options)
  }

  async post(url: string, body: any, options?: RequestInit): Promise<Response> {
    return super.post(url, body, options)
  }

  async put(url: string, body: any, options?: RequestInit): Promise<Response> {
    return super.put(url, body, options)
  }

  async delete(url: string, options?: RequestInit): Promise<Response> {
    return super.delete(url, options)
  }
}
