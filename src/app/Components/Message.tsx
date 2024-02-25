interface Props {
  msg: string;
}

function Message({ msg }: Props) {
  return <h1>{msg}</h1>;
}

export default Message;
