import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { platform, timestamp, locale } = data;

    // Log the click event to server console
    // In a production environment, this could be sent to a database or logging service
    console.log(`[E-Learning Click] Platform: ${platform}, Locale: ${locale}, Timestamp: ${timestamp}`);

    return new Response(JSON.stringify({
      message: 'Click logged successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: 'Error logging click'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
