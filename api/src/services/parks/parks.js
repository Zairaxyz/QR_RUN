import { db } from 'src/lib/db'

export const parks = () => {
  return db.park.findMany()
}

export const park = ({ id }) => {
  return db.park.findUnique({
    where: { id },
  })
}

export const createPark = ({ input }) => {
  return db.park.create({
    data: input,
  })
}

export const updatePark = ({ id, input }) => {
  return db.park.update({
    data: input,
    where: { id },
  })
}

export const deletePark = ({ id }) => {
  return db.park.delete({
    where: { id },
  })
}

export const Park = {
  Run: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Run()
  },
  PathCheckpoint: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).PathCheckpoint()
  },
  Checkpoint: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Checkpoint()
  },
  Path: (_obj, { root }) => {
    return db.park.findUnique({ where: { id: root?.id } }).Path()
  },
}
