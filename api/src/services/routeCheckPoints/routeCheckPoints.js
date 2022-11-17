import { db } from 'src/lib/db'

export const routeCheckPoints = () => {
  return db.routeCheckPoint.findMany()
}

export const routeCheckPoint = ({ id }) => {
  return db.routeCheckPoint.findUnique({
    where: { id },
  })
}

export const createRouteCheckPoint = ({ input }) => {
  return db.routeCheckPoint.create({
    data: input,
  })
}

export const updateRouteCheckPoint = ({ id, input }) => {
  return db.routeCheckPoint.update({
    data: input,
    where: { id },
  })
}

export const deleteRouteCheckPoint = ({ id }) => {
  return db.routeCheckPoint.delete({
    where: { id },
  })
}

export const RouteCheckPoint = {
  park: (_obj, { root }) => {
    return db.routeCheckPoint.findUnique({ where: { id: root?.id } }).park()
  },
}
