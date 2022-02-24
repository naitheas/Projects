const Tweet = (props) => {
    return (
        <div>
    <p>{props.username}</p>
    <p>{props.name}</p>
    <p>{props.date}</p>
    <p>{props.message}</p>
    </div>
    );
  };