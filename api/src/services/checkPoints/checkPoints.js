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
  // console.log(checkpointId)
  const checkpointNull = await db.pathCheckpoint.findFirst({
    where: {
      checkpointId: checkpointId,
      AND: { prevCheckpointId: null },
    },
    // include: {
    //   park: true,
    // },
  })
  const checkpoint = await db.pathCheckpoint.findFirst({
    where: {
      checkpointId: checkpointId,
      NOT: { prevCheckpointId: null },
    },
  })
  // logger.warn(JSON.stringify(checkpointNull.prevCheckpointId))

  // logger.warn(JSON.stringify(userId))
  // logger.warn(userId)
  if (user.currentCheckpoint === checkpoint.prevCheckpointId) {
    if (checkpoint.isFinish === true) {
      await db.log.create({
        data: {
          userId: userId,
          timeStamp: new Date(),
          checkpointId: checkpointId,
        },
      })
      await db.user.update({
        data: { currentCheckpoint: null },
        where: {
          id: userId,
        },
      })
      await db.lap.update({
        data: { stopTime: new Date() },
        where: {
          id: userId,
        },
        orderBy: {
          id: 'desc',
        },
      })
    }
    await db.user.update({
      data: { currentCheckpoint: checkpointId },
      where: {
        id: userId,
      },
    })
    await db.log.create({
      data: {
        userId: userId,
        timeStamp: new Date(),
        checkpointId: checkpointId,
      },
    })
    // logger.warn(JSON.stringify(checkpoint.prevCheckpointId))
  }
  try {
    if (checkpointNull != null) {
      if (user.currentCheckpoint === checkpointNull.prevCheckpointId) {
        if (checkpointNull.isStart === true) {
          await db.user.update({
            data: { currentCheckpoint: checkpointId },
            where: {
              id: userId,
            },
          })

          await db.log.create({
            data: {
              userId: userId,
              timeStamp: new Date(),
              checkpointId: checkpointId,
            },
          })
          await db.lap.create({
            data: {
              userId: userId,
              pathId: checkpoint.pathId,
              startTime: new Date(),
              stopTime: null,
            },
          })
        }
      }
    }
  } catch (e) {
    logger.error(JSON.stringify(e))
  }
  return userId + ' / ' + checkpointId
}
