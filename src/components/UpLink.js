import {NavLink} from "react-router-dom";

export default function UpLink(props) {
    return (
        <NavLink
            {...props}
            onClick={props.onClick || (()=>window.scrollTo(0, 0))}
        >{props.children}</NavLink>
    )
}