import { APIError } from './errors'

export class Forbidden extends APIError {
  constructor() {
    super('forbidden')
  }
}
