import { createServerClient } from '@supabase/ssr'
import type { APIRoute } from 'astro'
import directus from '../../../lib/directus'

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json()
    const { email, password } = body

    const response = await directus.login(email, password)

    // Set the cookies
    if (response) {
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

  } catch (error) {
    console.error('Error during login:', error)
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return new Response(JSON.stringify({ error: 'Unknown error' }), {
    status: 500,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
