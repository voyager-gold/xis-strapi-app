import namor from 'namor'

const range = (len: any) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

export const newPerson = () => {
  const statusChance = Math.random()
  return {
    name: namor.generate({ words: 2, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single'
  }
}

export type Person = ReturnType<typeof newPerson>

export default function makeData(...lens: any) {
  const makeDataLevel = (depth = 0): any => {
    const len = lens[depth]
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      }
    })
  }

  return makeDataLevel()
}
