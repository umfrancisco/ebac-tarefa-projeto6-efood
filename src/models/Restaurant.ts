class Restaurant {

    id: number
    imgUrl: string
    infos: string[]
    path: string
    title: string
    description: string

    constructor(id: number, imgUrl: string, infos: string[], path: string, title: string, description: string) {
        this.id = id
        this.imgUrl = imgUrl
        this.infos = infos
        this.path = path
        this.title = title
        this.description = description
    }
}

export default Restaurant