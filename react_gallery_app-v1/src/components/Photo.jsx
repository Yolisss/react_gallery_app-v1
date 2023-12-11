const Photo = (props) => {
  return (
    <div>
      <h1>Photo Component</h1>
      <li>
        <img
          src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
        />
      </li>
    </div>
  );
};

export default Photo;
