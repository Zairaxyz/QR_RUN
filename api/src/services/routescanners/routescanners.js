import { db } from 'src/lib/db'

export const routescanners = () => {
  return db.routescanner.findMany()
}

export const routescanner = ({ id }) => {
  return db.routescanner.findUnique({
    where: { id },
  })
}

export const createRoutescanner = ({ input }) => {
  return db.routescanner.create({
    data: input,
  })
}

export const updateRoutescanner = ({ id, input }) => {
  return db.routescanner.update({
    data: input,
    where: { id },
  })
}

export const deleteRoutescanner = ({ id }) => {
  return db.routescanner.delete({
    where: { id },
  })
}

export const Routescanner = {
  park: (_obj, { root }) => {
    return db.routescanner.findUnique({ where: { id: root?.id } }).park()
  },
}
