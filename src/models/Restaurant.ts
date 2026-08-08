class Restaurant {

    id: number
    imgUrl: string
    infos: string[]
    path: string
    title: string
    description: string
    review: number

    constructor(id: number, imgUrl: string, infos: string[], path: string, title: string, description: string, review: number) {
        this.id = id
        this.imgUrl = imgUrl
        this.infos = infos
        this.path = path
        this.title = title
        this.description = description
        this.review = review
    }
}

export default Restaurant