 function Swap() {
  const ongoingSwaps = [];
  const completedSwaps = [];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Swap History</h3>

      {/* Ongoing Swaps */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h4 className="font-bold text-gray-800 mb-1">
          Ongoing Swaps ({ongoingSwaps.length})
        </h4>
        {ongoingSwaps.length === 0 ? (
          <p className="text-gray-500 text-sm">No ongoing swaps</p>
        ) : (
          ongoingSwaps.map((swap) => (
            <div key={swap.id} className="text-gray-700 text-sm">
              {swap.description}
            </div>
          ))
        )}
      </div>

      {/* Completed Swaps */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h4 className="font-bold text-gray-800 mb-1">
          Completed Swaps ({completedSwaps.length})
        </h4>
        {completedSwaps.length === 0 ? (
          <p className="text-gray-500 text-sm">No completed swaps yet</p>
        ) : (
          completedSwaps.map((swap) => (
            <div key={swap.id} className="text-gray-700 text-sm">
              {swap.description}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Swap;
