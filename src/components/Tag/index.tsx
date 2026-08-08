import type { ReactNode } from "react"
import { TagInfo, TagButton, TagLink } from "./styles"

export type Props = {
    children: ReactNode
    path?: string
}

const Tag = ({ children, path }: Props) => {
    if (path) {
        return (
            <TagButton path={path}>
                <TagLink to={path}>{children}</TagLink>
            </TagButton>
        )
    }
    return (
        <TagInfo>{children}</TagInfo>
    )
}

export default Tag