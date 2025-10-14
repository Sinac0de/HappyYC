import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN || undefined, // Only use token if available
  // Enable stega only in development
  stega: process.env.NODE_ENV === 'development' ? { 
    enabled: true,
    studioUrl: '/studio' // Add the required studioUrl property
  } : undefined,
})