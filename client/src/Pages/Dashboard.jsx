import AuctionCard from "../components/AuctionCard.jsx";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { dashboardStats } from "../api/auction.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: () => dashboardStats(),
    staleTime: 30 * 1000,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Total Auctions
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-3">
              {data.totalAuctions}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Active Auctions
            </h3>
            <p className="text-4xl font-bold text-green-600 mt-3">
              {data.activeAuctions}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Your Auctions</h3>
            <p className="text-4xl font-bold text-blue-600 mt-3">
              {data.userAuctionCount}
            </p>
          </div>
        </div>

        {/* All Auctions Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Auctions</h2>
            <Link
              to="/auction"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline"
            >
              View More
            </Link>
          </div>

          {data.latestAuctions.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-500 text-lg">
                No auctions available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.latestAuctions.map((auction) => (
                <AuctionCard key={auction._id} auction={auction} />
              ))}
            </div>
          )}
        </div>

        {/* Your Auctions Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Your Auctions</h2>
            <Link
              to="/myauction"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline"
            >
              View More
            </Link>
          </div>

          {data.latestUserAuctions.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-md border border-gray-100">
              <p className="text-gray-500 text-lg">
                You haven't created any auctions yet.
              </p>{" "}
              <Link to="/create">
                <button className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Create Your First Auction
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.latestUserAuctions.map((auction) => (
                <AuctionCard key={auction._id} auction={auction} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
