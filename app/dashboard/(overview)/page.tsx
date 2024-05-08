import CardWrapper from "@/app/ui/dashboard/cards"
import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import LatestInvoices from "@/app/ui/dashboard/latest-invoices"
import { lusitana } from "@/app/ui/fonts"
import { fetchCardData } from "@/app/lib/data"
import { Suspense } from "react"
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Was an error here in the original code from Nextjs repo, notice the trailing " for the first cart i'snt right
                => <Card title="Collected" value={totalPaidInvoices} type="collected />"
                And there is no < for the start of this line
                => Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
                there is also no trailing /> for this line
                => <Card title="Total Customers" value={numberOfCustomers} type="customers"
                */}
                
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>

            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />} >
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}