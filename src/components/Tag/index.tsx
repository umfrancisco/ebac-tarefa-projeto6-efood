import { TagContainer, TagButton } from "./styles"

export type Props = {
    type: string
    children: string
}

const Tag = ({ children, type }: Props) => {
    if (type === "bottom") {
        return (
            <TagButton type={type}>{children}</TagButton>
        )
    }
    return (
        <TagContainer type={type}>{children}</TagContainer>
    )
}

export default Tag