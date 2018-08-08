export default class {
    constructor(opts = {}) {
        // default picker
        function pick(name, defaultVal) {
            return opts.hasOwnProperty(name) ? opts[name] : defaultVal
        }

        this.width = pick('width', 2)
        this.height = pick('height', 2)

        // pivot Cell in x,y coordinates
        this.pivot = pick('pivot', [0, 0])

        // position on game board in x,y coordinates
        this.position = pick('position', [0, 0])
    }
}
