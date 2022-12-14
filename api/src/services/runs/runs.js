import { db } from 'src/lib/db'

export const runs = () => {
  return db.run.findMany()
}

export const run = ({ id }) => {
  return db.run.findUnique({
    where: { id },
  })
}

export const createRun = ({ input }) => {
  return db.run.create({
    data: input,
  })
}

export const updateRun = ({ id, input }) => {
  return db.run.update({
    data: input,
    where: { id },
  })
}

export const deleteRun = ({ id }) => {
  return db.run.delete({
    where: { id },
  })
}

export const Run = {
  park: (_obj, { root }) => {
    return db.run.findUnique({ where: { id: root?.id } }).park()
  },
  user: (_obj, { root }) => {
    return db.run.findUnique({ where: { id: root?.id } }).user()
  },
}

export const findFirstRun = ({ userId }) => {
  return db.run.findMany({
    orderBy: {
      id: 'desc',
    },
    where: {
      userId: userId,
    },
  })
}

export const findTotalOfSumRun = async ({ userId }) => {
  const wow = await db.run.groupBy({
    by: ['distance'],
    _sum: {
      distance: true,
    },
    where: {
      userId: userId,
    },
  })
  console.log(wow)
  return true
}
