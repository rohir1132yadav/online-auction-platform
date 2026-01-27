import { Link } from "react-router-dom";

export default function AuctionCard({ auction }) {
  const daysLeft = Math.ceil(auction.timeLeft / (1000 * 60 * 60 * 24));
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden bg-gray-100 flex items-center justify-center group">
        <img
          src={auction.itemPhoto || "https://picsum.photos/300"}
          alt={auction.itemName}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {auction.itemCategory}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
          {auction.itemName}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {auction.itemDescription}
        </p>

        <div className="space-y-3 mb-5 py-4 border-t border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase">Current Price:</span>
            <span className="font-bold text-xl text-green-600">
              ${auction.currentPrice || auction.startingPrice}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase">Bids:</span>
            <span className="text-sm font-semibold text-gray-900">{auction.bidsCount}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase">Time Left:</span>
            <span className="text-sm font-semibold text-red-600">
              {daysLeft > 0 ? `${daysLeft} days` : "Ended"}
            </span>
          </div>
        </div>

        <div className="pt-3">
          <p className="text-xs text-gray-500 mb-4 font-medium">
            Seller: <span className="text-gray-700 font-semibold">{auction?.sellerName || auction?.seller?.name}</span>
          </p>
          <Link to={`/auction/${auction._id}`} className="block">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-bold shadow-md hover:shadow-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
