import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
export const checkpoints = () => {
  return db.checkpoint.findMany()
}

export const checkpoint = ({ id }) => {
  return db.checkpoint.findUnique({
    where: { id },
  })
}

export const createCheckpoint = ({ input }) => {
  return db.checkpoint.create({
    data: input,
  })
}

export const updateCheckpoint = ({ id, input }) => {
  return db.checkpoint.update({
    data: input,
    where: { id },
  })
}

export const deleteCheckpoint = ({ id }) => {
  return db.checkpoint.delete({
    where: { id },
  })
}

export const Checkpoint = {
  park: (_obj, { root }) => {
    return db.checkpoint.findUnique({ where: { id: root?.id } }).park()
  },
  Log: (_obj, { root }) => {
    return db.checkpoint.findUnique({ where: { id: root?.id } }).Log()
  },
  PathCheckpoint: (_obj, { root }) => {
    return db.checkpoint
      .findUnique({ where: { id: root?.id } })
      .PathCheckpoint()
  },
  PrevPathCheckpoint: (_obj, { root }) => {
    return db.checkpoint
      .findUnique({ where: { id: root?.id } })
      .PrevPathCheckpoint()
  },
}

export const checkRunningPath = async ({ userId, checkpointId }) => {
  // ดึงข้อมูล user
  const user = await db.user.findUnique({
    where: { id: userId },
  })
  const checkpoint = await db.pathCheckpoint.findMany({
    where: { checkpointId: checkpointId },
    // include: {
    //   park: true,
    // },
  })
  // const nameP = await db.park.findUnique({
  //   where: { id: cp.park },
  // })
  // ได้ข้อมูล user ที่เข้ามาสแกน

  // const users = prisma.checkpoint.findMany()
  // const data = db.checkpoint.findMany()
  // const users = await prisma.uesr.findMany(userId)
  logger.warn(JSON.stringify(checkpoint))
  // logger.warn(user)
  logger.warn(JSON.stringify(user))
  // logger.warn(JSON.stringify(checkpointId))
  // console.log('true')
  return userId + ' / ' + checkpointId
}
