const Photo = (props) => {
  return (
    <div>
      <li>
        <img
          src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
        />
      </li>
    </div>
  );
};

export default Photo;
