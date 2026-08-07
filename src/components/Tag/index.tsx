import type { ReactNode } from "react"
import { TagContainer, TagButton, TagLink } from "./styles"

export type Props = {
    type: string
    children: ReactNode
    path: string
}

const Tag = ({ children, type, path }: Props) => {
    if (type === "bottom") {
        return (
            <TagButton path={path} type={type}>
                <TagLink to={path}>{children}</TagLink>
            </TagButton>
        )
    }
    return (
        <TagContainer path="" type={type}>{children}</TagContainer>
    )
}

export default Tag