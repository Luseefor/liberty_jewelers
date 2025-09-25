import { redirect } from 'next/navigation';

// Redirect to the correct best sellers page
export default function CollectionsBestsellersPage() {
  redirect('/collections/best-sellers');
}