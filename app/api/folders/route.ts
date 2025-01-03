import { auth } from '@/auth'
import { db } from '@/lib/db'
import { chatFolder } from '@/lib/db/schema'

export async function GET() {
  const session = await auth()
  if (!session?.user) return new Response('Unauthorized', { status: 401 })

  const folders = await db.query.chatFolder.findMany({
    where: { userId: session.user.id },
    with: {
      chats: true
    }
  })

  return Response.json(folders)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return new Response('Unauthorized', { status: 401 })

  const { name } = await req.json()
  
  const folder = await db.insert(chatFolder).values({
    name,
    userId: session.user.id
  })

  return Response.json(folder)
} 