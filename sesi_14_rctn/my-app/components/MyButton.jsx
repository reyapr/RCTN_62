import { TouchableOpacity } from "react-native"

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.children}
    </TouchableOpacity>
  )
}

export default MyButton