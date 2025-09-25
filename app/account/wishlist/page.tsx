import { redirect } from 'next/navigation';

// Since /account/wishlist should redirect to the main wishlist page
export default function AccountWishlistPage() {
  redirect('/wishlist');
}