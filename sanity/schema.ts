import { type SchemaTypeDefinition } from 'sanity'

import blog from './schemas/blog'
import service from './schemas/service'
import subscription from './schemas/subscription'
import team from './schemas/team'
import testimonial from './schemas/testimonial'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, service, subscription, team, testimonial, settings],
}
