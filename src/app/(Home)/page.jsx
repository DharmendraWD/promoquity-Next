// app/(home)/page.jsx

import Hero from './components/Hero'; // Server Component
import LoggedInHome from './LoggedInHome'; // Client Component
import ClientAuthWrapper from './ClientAuthWrapper/ClientAuthWrapper'; // NEW

export default async function Page() {
    const response = await fetch(`${process.env.BASE_API}/HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10`, {
  });

  if (!response.ok) {
    console.error("Failed to fetch home content");
    return <div>Failed to load content</div>;
  }

  const data = await response.json();
  const baseContent = process.env.BASE_CONTENT;
  return <ClientAuthWrapper fallback={<Hero  data={data} baseContent={baseContent}/>} />;
}


