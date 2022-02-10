import React, {useState, useEffect, useRef} from 'react'
import LazyCardMedia from "./LazyCardMedia";
import {CardMedia} from "@mui/material";

export default CardMedia

// export default (props) => {
//     const [visible, setVisible] = useState(false);
//     const placeholderRef = useRef(null);
//     useEffect(() => {
//
//         if (!visible && placeholderRef.current) {
//             const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
//                 if (intersectionRatio > 0) {
//                     setVisible(true);
//                 }
//             });
//             observer.observe(placeholderRef.current);
//             return () => observer.disconnect();
//         }
//     }, [visible, placeholderRef]);
//
//     return (visible
//             ?
//             <CardMedia
//                 component='img'
//                 image={props.image}
//                 alt={props.alt}
//                 height={props.height}
//             />
//             :
//             <div style={{height: props.height, backgroundColor: '#EEE'}} aria-label={props.alt} ref={placeholderRef} />
//     );
// };