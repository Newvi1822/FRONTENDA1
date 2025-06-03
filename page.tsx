import Navbar from '@/components/Navbar';
import UserGreeting from '@/components/UserGreeting';
import FormComponent from '@/components/FormComponent';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <h2>Contact Page</h2>
      <UserGreeting isLoggedIn={true} />
      <FormComponent />
    </div>
  );
}