

// export default function Diamond(props) {

//   return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="currentColor" d="M18.437 35.747c-.242.337-.632.337-.874 0L5.314 18.612c-.242-.338-.242-.886 0-1.224L17.563.253c.242-.338.632-.338.874 0l12.25 17.135c.241.338.241.886 0 1.224z"></path></svg>);
// }



export default function Diamond(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64" {...props}
    // onMouseEnter={props.onMouseEnter}
    ><path fill="currentColor" d="M2.018 32L32 2.02L61.98 32L32 61.981z"></path></svg>
  );
}