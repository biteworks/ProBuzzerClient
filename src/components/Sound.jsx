function Sound(props) {
  return (
    <div
      className="text-3xl font-bold underline"
      onClick={() => props.playSound(props.url)}
    >
      {props.name}
    </div>
  );
}

export default Sound;
