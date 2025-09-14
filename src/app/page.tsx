import EmailList from "@/components/EmailList";
import Pagination from "@/components/Pagination";

export default function Home() {

  return (
    <div className="flex h-screen bg-gray-50">
      <EmailList />
    </div>
  );
}
