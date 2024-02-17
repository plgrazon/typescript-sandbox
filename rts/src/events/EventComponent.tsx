const EventComponent = (): React.JSX.Element => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };

  const onDragStart: React.DragEventHandler<HTMLHeadElement> = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h1>Event Component</h1>
      <input onChange={onChange}></input>
      <div>
        <h3 draggable onDragStart={onDragStart}>
          drag me
        </h3>
      </div>
    </div>
  );
};

export default EventComponent;
