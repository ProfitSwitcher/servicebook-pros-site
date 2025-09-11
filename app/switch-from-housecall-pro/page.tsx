export default function Page() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-servicebook-navy">Switch from Housecall Pro</h1>
      <p className="mb-4 text-lg text-professional-gray">Transitioning from Housecall Pro is simple. Follow these steps:</p>
      <ol className="list-decimal list-inside space-y-2 text-professional-gray">
        <li>Export your customer and job data from Housecall Pro.</li>
        <li>Import the data into ServiceBook Pros using our import tool.</li>
        <li>Connect your QuickBooks and payment accounts.</li>
        <li>Configure your price books, schedules, and notifications.</li>
        <li>Invite your team and start using ServiceBook Pros!</li>
      </ol>
      <p className="mt-6 text-lg text-professional-gray">Need help? Contact our support team for a personalized migration.</p>
    </div>
  );
}
