type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: Boolean;
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            {
                props.isLoggedIn ? <h2>Welcome {props.name}! You have {messageCount} unread messages</h2> : "Welcome guest"
            }
        </div>
    )
}