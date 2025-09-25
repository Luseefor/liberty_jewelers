import { redirect } from 'next/navigation';

// Redirect to the main sale page
export default function CollectionsSalePage() {
  redirect('/sale');
}