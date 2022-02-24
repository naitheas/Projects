const App = () => {
    return (
      <div>
       
            <Tweet
              username="u1"
              name="user1"
              date={new Date(Date.now()).toString()}
              message="User1 test"
            />
            <Tweet
              username="u2"
              name="user2"
              date={new Date(Date.now()).toString()}
              message="User2 test"
            />
            <Tweet
              username="u3"
              name="user3"
              date={new Date(Date.now()).toString()}
              message="User3 test"
            />
      </div>
    );
  };