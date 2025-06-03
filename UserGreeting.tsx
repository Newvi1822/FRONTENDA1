type Props = {
  isLoggedIn: boolean;
};

export default function UserGreeting({ isLoggedIn }: Props) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}
