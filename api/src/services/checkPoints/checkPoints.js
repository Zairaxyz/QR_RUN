import { db } from 'src/lib/db'

export const checkPoints = () => {
  return db.checkPoint.findMany()
}

export const checkPoint = ({ id }) => {
  return db.checkPoint.findUnique({
    where: { id },
  })
}

export const createCheckPoint = ({ input }) => {
  return db.checkPoint.create({
    data: input,
  })
}

export const updateCheckPoint = ({ id, input }) => {
  return db.checkPoint.update({
    data: input,
    where: { id },
  })
}

export const deleteCheckPoint = ({ id }) => {
  return db.checkPoint.delete({
    where: { id },
  })
}

export const CheckPoint = {
  park: (_obj, { root }) => {
    return db.checkPoint.findUnique({ where: { id: root?.id } }).park()
  },
  Log: (_obj, { root }) => {
    return db.checkPoint.findUnique({ where: { id: root?.id } }).Log()
  },
}
