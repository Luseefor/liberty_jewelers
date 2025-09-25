import { redirect } from 'next/navigation';

// Since /account/profile should just redirect to the main account page
export default function AccountProfilePage() {
  redirect('/account');
}