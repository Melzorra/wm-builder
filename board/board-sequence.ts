import { buildPick } from './utils'

export default class BoardSequence {
    name: string
    id: string
    meta: Array<KeyValuePair>
    boardStateIds: Array<string>
    conditions: Array<Condition>
    priority: number

    constructor(opts = {}) {
        const pick = buildPick(opts)

        // Basic info
        this.name = pick('name', 'Sequence')
        this.id = pick('id', Date.now())
        this.meta = pick('meta', [])

        // BoardState IDs
        this.boardStateIds = pick('boardStateIds', [])

        // Conditions
        this.conditions = pick('conditions', [])

        // Priority score
        this.priority = pick('priority', 0)
    }
}
