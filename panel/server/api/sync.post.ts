export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = getHeader(event, 'authorization')?.split(' ')[1]

    if (token !== process.env.SYNC_TOKEN) {
        throw createError({ statusCode: 403, statusMessage: 'Invalid token' })
    }

    // Simulate DB storage
    console.log('Received Sync Data:', body)

    return { success: true }
})
