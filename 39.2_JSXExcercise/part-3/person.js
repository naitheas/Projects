const Person = ({ name, age, hobbies }) => {
    return (
      <div>
        <Alert classes="alert-primary">
          <h1>
            {name.length > 8
              ? `${name.slice(0, 8)} (name was too long..)`
              : name}
          </h1>
        </Alert>
        <Alert classes="alert-success">
          <h3>
            AGE: {age} - {age > 18 ? 'Please go vote!' : 'You must be 18'}
          </h3>
        </Alert>
        <Container>
          <p>
            Learn more about <Badge classes="bg-primary">{name}</Badge>
          </p>
          <Card>
            <h4>Hobbies of {name}</h4>
            <ListGroup>
              {' '}
              {hobbies.map((hobby) => (
                <ListGroupItem key={hobby.key}>{hobby.text}</ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Container>
      </div>
    );
  };