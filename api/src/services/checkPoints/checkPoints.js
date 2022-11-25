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
  // ได้ข้อมูล user ที่เข้ามาสแกน
  // ดึงข้อมูลของ เส้นทางที่ได้จากเครื่องสแกนมา
  console.log(checkpointId)
  const checkpoint = await db.pathCheckpoint.findMany({
    where: { checkpointId: checkpointId },
    // include: {
    //   park: true,
    // },
  })
  // logger.warn(JSON.stringify(checkpoint[0].prevCheckpointId))
  for (let i = 0; i < checkpoint.length; i++) {
    // เช็คว่า ก่อนหน้าของ user เท่ากับเครื่องสแกนปัจจุบันรึป่าว
    if (user.currentCheckpoint == checkpoint[i].prevCheckpointId) {
      // เช็คว่า isStart === true
      if (checkpoint[i].isStart === true && checkpoint[i].isFinish === true) {
        console.log('จบการวิ่งแบบวงกลม')
      } else if (checkpoint[i].isStart === true) {
        console.log('เริ่มวิ่ง', checkpoint[1].checkpointId)
        return db.user.update({
          data: { checkpointId: checkpoint[1].checkpointId },
          where: user.id,
        })
        // console.log('isStart')
        // console.log(JSON.stringify(user))
        // break
        // เช็คว่า isFinish === true
      } else if (checkpoint[i].isFinish === true) {
        console.log('จบการวิ่งแบบเส้นตรง')
        break
      }
      // else {
      //   console.log('222')
      // }
      console.log('เปลี่ยน ID checkpoint')
      db.user.update({
        data: checkpoint[i].checkpointId,
        where: user.id,
      })
    }
  }

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
