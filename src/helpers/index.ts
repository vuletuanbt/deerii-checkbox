export type Person = {
    name: string
    age?: number
}
export const log = (content: string) => console.log(content)
export const createPerson = (person: Person) => {
    return {
        ...person,
        createdAt: new Date()
    }
}