import { redirect } from 'next/navigation';

// Since /account/orders should redirect to the main orders page
export default function AccountOrdersPage() {
  redirect('/orders');
}