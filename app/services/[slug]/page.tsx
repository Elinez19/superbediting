import { notFound } from 'next/navigation';
import { SERVICE_DATA } from '@/constants/services';
import { ServiceHero } from '@/components/services/ServiceHero';
import { FieldsGrid } from '@/components/services/FieldsGrid';
import { PricingSection } from '@/components/services/PricingSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceHero data={service} />
      <FieldsGrid fields={service.fields} color={service.color} />
      <PricingSection pricing={service.pricing} color={service.color} />
      
      {/* Additional CTA or Newsletter section could go here */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your research?</h2>
           <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
             Join thousands of researchers who have achieved excellence with Superb Editing.
           </p>
           <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
             Contact an Editor
           </button>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map((slug) => ({
    slug: slug,
  }));
}
