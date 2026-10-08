import { APIError } from '../../../lib/errors'
import { Forbidden } from '../../../lib/forbidden'

export const dynamic = 'force-dynamic'

export function GET() {
  const error = new APIError('boom')
  return Response.json({ className: APIError.name, errorName: error.name, forbidden: new Forbidden().name })
}
