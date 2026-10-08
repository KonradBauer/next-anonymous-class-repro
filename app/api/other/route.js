import { APIError } from '../../../lib/errors'
import { Forbidden } from '../../../lib/forbidden'

export const dynamic = 'force-dynamic'

export function GET() {
  return Response.json({ api: new APIError('x').name, forbidden: new Forbidden().name })
}
