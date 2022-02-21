import User from "./User.js"
import ProfileImage from "./ProfileImage.js"
import Timestamp from "./Timestamp.js"
import Message from "./Message.js"
import Actions from "./Actions.js"

function Tweet(props) {
  return (
    <div className="tweet">
      {props.children}
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp}/>
        </div>
        <Message message={props.tweet.message} />
        <Actions/>
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
