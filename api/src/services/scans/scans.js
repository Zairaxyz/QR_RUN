import { db } from 'src/lib/db'

export const scans = () => {
  return db.scan.findMany()
}

export const scan = ({ id }) => {
  return db.scan.findUnique({
    where: { id },
  })
}

export const createScan = ({ input }) => {
  return db.scan.create({
    data: input,
  })
}

export const updateScan = ({ id, input }) => {
  return db.scan.update({
    data: input,
    where: { id },
  })
}

export const deleteScan = ({ id }) => {
  return db.scan.delete({
    where: { id },
  })
}

export const Scan = {
  park: (_obj, { root }) => {
    return db.scan.findUnique({ where: { id: root?.id } }).park()
  },
}
