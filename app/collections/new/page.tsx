import { redirect } from 'next/navigation';

// Redirect to the correct new arrivals page
export default function CollectionsNewPage() {
  redirect('/collections/new-arrivals');
}