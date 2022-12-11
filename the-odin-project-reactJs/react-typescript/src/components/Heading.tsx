type HeadidngProps = {
    children: string
}

export const Heading = (props: HeadidngProps) => {
    return <h2>{props.children}</h2>
}