import { db } from 'src/lib/db'

export const routeScanners = () => {
  return db.routeScanner.findMany()
}

export const routeScanner = ({ id }) => {
  return db.routeScanner.findUnique({
    where: { id },
  })
}

export const createRouteScanner = ({ input }) => {
  return db.routeScanner.create({
    data: input,
  })
}

export const updateRouteScanner = ({ id, input }) => {
  return db.routeScanner.update({
    data: input,
    where: { id },
  })
}

export const deleteRouteScanner = ({ id }) => {
  return db.routeScanner.delete({
    where: { id },
  })
}

export const RouteScanner = {
  park: (_obj, { root }) => {
    return db.routeScanner.findUnique({ where: { id: root?.id } }).park()
  },
  Lap: (_obj, { root }) => {
    return db.routeScanner.findUnique({ where: { id: root?.id } }).Lap()
  },
}
