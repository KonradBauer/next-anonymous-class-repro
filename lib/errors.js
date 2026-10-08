class BaseError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

export class APIError extends BaseError {}
