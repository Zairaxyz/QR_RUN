import { db } from 'src/lib/db'

export const scanners = () => {
  return db.scanner.findMany()
}

export const scanner = ({ id }) => {
  return db.scanner.findUnique({
    where: { id },
  })
}

export const createScanner = ({ input }) => {
  return db.scanner.create({
    data: input,
  })
}

export const updateScanner = ({ id, input }) => {
  return db.scanner.update({
    data: input,
    where: { id },
  })
}

export const deleteScanner = ({ id }) => {
  return db.scanner.delete({
    where: { id },
  })
}

export const Scanner = {
  park: (_obj, { root }) => {
    return db.scanner.findUnique({ where: { id: root?.id } }).park()
  },
}
