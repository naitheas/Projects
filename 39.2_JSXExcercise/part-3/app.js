const App = () => {
    return (
      <div>
        <Container>
          <Card>
            <Person
              name="User1"
              age={17}
              hobbies={[
                {
                  key: 1,
                  text: 'Baking',
                },
                {
                  key: 2,
                  text: 'Desserts',
                },
                {
                  key: 3,
                  text: 'Frosting',
                },
                {
                  key: 4,
                  text: 'Cake layers',
                },
              ]}
            />
          </Card>
          <Card>
            <Person
              name="User2"
              age={27}
              hobbies={[
                {
                  key: 1,
                  text: 'Grilling',
                },
                {
                  key: 2,
                  text: 'Kabobs',
                },
                {
                  key: 3,
                  text: 'Eating',
                },
                {
                  key: 4,
                  text: 'Gluttony',
                },
              ]}
            />
          </Card>
          <Card>
            <Person
              name="User3"
              age={33}
              hobbies={[
                {
                  key: 1,
                  text: 'Gaming',
                },
                {
                  key: 2,
                  text: 'RPG',
                },
                {
                  key: 3,
                  text: 'MMO',
                },
                {
                  key: 4,
                  text: 'Epic Quests',
                },
              ]}
            />
          </Card>
        </Container>
      </div>
    );
  };