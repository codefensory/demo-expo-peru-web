export const Button = (props) => {
  return <div
    className={`p-2 rounded-3xl text-center text-white bg-primary text-4xl font-bold ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </div>
}
