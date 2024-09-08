const user = {
    name: 'Sai pallavi',
    imageUrl: 'https://i.pinimg.com/736x/e5/5d/2e/e55d2ed3e82ab92affdea55f28f7bf66.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  