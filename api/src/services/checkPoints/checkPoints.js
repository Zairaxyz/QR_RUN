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
  const user = await db.user.findUnique({
    where: { id: userId },
  })
  const checkpointNull = await db.pathCheckpoint.findFirst({
    where: {
      checkpointId: checkpointId,
      AND: { prevCheckpointId: null },
    },
  })
  const checkpoint = await db.pathCheckpoint.findFirst({
    where: {
      checkpointId: checkpointId,
      NOT: { prevCheckpointId: null },
    },
  })
  // logger.warn(checkpoint.prevCheckpointId)
  if (checkpoint != null) {
    if (user.currentCheckpoint == checkpoint.prevCheckpointId) {
      if (checkpoint.isFinish === true) {
        await db.log.create({
          data: {
            userId: userId,
            timeStamp: new Date(),
            checkpointId: checkpointId,
          },
        })
        // console.log(checkpoint)
        const poplap = await db.lap.findMany({
          orderBy: {
            userId: 'desc',
          },
          where: {
            userId: userId,
            AND: {
              pathId: checkpoint.pathId,
            },
          },
          include: {
            path: true,
          },
        })
        console.log(poplap)
        // logger.warn(JSON.stringify(poplap.path.parkId) + 'Null')
        const createrun = await db.lap.update({
          where: {
            id: poplap.id,
          },
          data: { stopTime: new Date() },
        })
        console.log(createrun)
        await db.run.create({
          data: {
            startTime: createrun.startTime,
            stopTime: createrun.stopTime,
            distance: poplap.path.distance,
            pace:
              poplap.path.distance / (createrun.startTime + createrun.stopTime),
            userId: createrun.userId,
            parkId: poplap.path.parkId,
          },
        })
        await db.user.update({
          data: { currentCheckpoint: null },
          where: {
            id: userId,
          },
        })
      } else {
        // console.log('เปลี่ยน ID currentCheckpoint')
        logger.warn(JSON.stringify('เปลี่ยน id'))
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
        logger.warn('จบ')
        console.log('จบ')
      }
    }
  }
  console.log('เริ่มต้นใหม่')
  if (checkpointNull != null) {
    const user = await db.user.findUnique({
      where: { id: userId },
    })
    console.log(user.currentCheckpoint)
    console.log('เช็คเงื่อนไข 1')
    if (user.currentCheckpoint === checkpointNull.prevCheckpointId) {
      console.log('เช็คเงื่อนไข 2')
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
            pathId: checkpointNull.pathId,
            startTime: new Date(),
            stopTime: null,
          },
        })
      }
    }
  }
  return userId + ' / ' + checkpointId
}
