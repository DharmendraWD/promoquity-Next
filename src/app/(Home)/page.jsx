// app/(home)/page.jsx

import Hero from './components/Hero'; // Server Component
import LoggedInHome from './LoggedInHome'; // Client Component
import ClientAuthWrapper from './ClientAuthWrapper/ClientAuthWrapper'; // NEW

export default function Page() {
  return <ClientAuthWrapper fallback={<Hero />} />;
}
