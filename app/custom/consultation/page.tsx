import { redirect } from 'next/navigation';

// Redirect to the main consultation page since custom consultation is the same
export default function CustomConsultationPage() {
  redirect('/consultation');
}