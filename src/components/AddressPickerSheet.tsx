import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Map, X, Clock, Navigation } from 'lucide-react';
import { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';

interface AddressPickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (address: string, city: string) => void;
}

type ViewMode = 'options' | 'search' | 'map';

export function AddressPickerSheet({ isOpen, onClose, onConfirm }: AddressPickerSheetProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('options');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAddress, setSelectedAddress] = useState({
    street: '309 W Hoover Ave',
    city: 'Ann Arbor, MI 48104',
  });

  // Mock recent searches
  const recentSearches = [
    '309 W Hoover Ave, Ann Arbor, MI',
    '123 Main St, Ann Arbor, MI',
  ];

  // Mock search results
  const searchResults = [
    {
      address: '309 W Hoover Ave',
      city: 'Ann Arbor, MI 48104',
      distance: '0.2 mi',
    },
    {
      address: '310 W Hoover Ave',
      city: 'Ann Arbor, MI 48104',
      distance: '0.3 mi',
    },
    {
      address: '311 W Hoover Ave',
      city: 'Ann Arbor, MI 48104',
      distance: '0.4 mi',
    },
  ];

  const handleSelectAddress = (address: string, city: string) => {
    setSelectedAddress({ street: address, city });
    onConfirm(address, city);
    handleClose();
  };

  const handleClose = () => {
    setViewMode('options');
    setSearchQuery('');
    onClose();
  };

  const handleBack = () => {
    setViewMode('options');
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 z-50 max-h-[85%] flex flex-col"
          >
            <div className="bg-white rounded-t-3xl shadow-2xl flex flex-col max-h-full">
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
                <div className="w-10 h-1 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {viewMode !== 'options' && (
                      <button
                        onClick={handleBack}
                        className="p-1 hover:bg-gray-100 rounded-full transition-all active:scale-90"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}
                    <div>
                      <h3 className="mb-1">
                        {viewMode === 'options' && 'Add your address'}
                        {viewMode === 'search' && 'Search address'}
                        {viewMode === 'map' && 'Pin your location'}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {viewMode === 'options' && 'Choose how you\'d like to enter your location'}
                        {viewMode === 'search' && 'Type to search for your address'}
                        {viewMode === 'map' && 'Drag the map to adjust pin location'}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                {/* Options View */}
                {viewMode === 'options' && (
                  <div className="p-6 space-y-3 pb-8">
                    {/* Search Location Option */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setViewMode('search')}
                      className="w-full bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl p-5 shadow-lg shadow-teal-500/30 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <Search className="w-7 h-7" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="mb-1">Search for address</div>
                        <p className="text-white/80 text-sm">Type your street address or location</p>
                      </div>
                    </motion.button>

                    {/* Use Map Option */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setViewMode('map')}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl p-5 hover:border-teal-500 hover:bg-teal-50/50 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Map className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-gray-900 mb-1">Pin on map</div>
                        <p className="text-gray-600 text-sm">Drop a pin at your exact location</p>
                      </div>
                    </motion.button>

                    {/* Current Location Option */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        // This would trigger geolocation in a real app
                        handleSelectAddress('Current Location', 'Auto-detected');
                      }}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl p-5 hover:border-teal-500 hover:bg-teal-50/50 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Navigation className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-gray-900 mb-1">Use current location</div>
                        <p className="text-gray-600 text-sm">Automatically detect where you are</p>
                      </div>
                    </motion.button>
                  </div>
                )}

                {/* Search View */}
                {viewMode === 'search' && (
                  <div className="flex flex-col h-full">
                    {/* Search Input */}
                    <div className="px-6 pt-4 pb-3 flex-shrink-0">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search for an address..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:bg-white transition-all"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Search Results */}
                    <div className="flex-1 overflow-y-auto px-6 pb-6">
                      {!searchQuery ? (
                        /* Recent Searches */
                        <div>
                          <div className="mb-3 text-gray-600 text-sm">Recent</div>
                          <div className="space-y-2">
                            {recentSearches.map((search, index) => (
                              <motion.button
                                key={index}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelectAddress(search.split(',')[0], search.split(',').slice(1).join(','))}
                                className="w-full bg-gray-50 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-all"
                              >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                  <Clock className="w-5 h-5 text-gray-500" />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="text-gray-900">{search.split(',')[0]}</div>
                                  <div className="text-gray-500 text-sm">{search.split(',').slice(1).join(',')}</div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Search Results */
                        <div>
                          <div className="mb-3 text-gray-600 text-sm">Results</div>
                          <div className="space-y-2">
                            {searchResults.map((result, index) => (
                              <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelectAddress(result.address, result.city)}
                                className="w-full bg-gray-50 rounded-xl p-4 flex items-start gap-3 hover:bg-gray-100 transition-all"
                              >
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <MapPin className="w-5 h-5 text-teal-600" />
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="text-gray-900 mb-0.5">{result.address}</div>
                                  <div className="text-gray-500 text-sm">{result.city}</div>
                                </div>
                                <div className="text-gray-400 text-sm">{result.distance}</div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Map View */}
                {viewMode === 'map' && (
                  <div className="h-[500px] relative">
                    {/* Mock Map Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50">
                      {/* Grid pattern to simulate map */}
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, #94a3b8 1px, transparent 1px),
                            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px'
                        }}
                      />
                      
                      {/* Mock streets */}
                      <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400 opacity-40" />
                      <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400 opacity-40" />
                      <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-400 opacity-40" />
                      <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-400 opacity-40" />
                      
                      {/* Mock labels */}
                      <div className="absolute top-1/3 left-4 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
                        W Hoover Ave
                      </div>
                    </div>

                    {/* Center Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                      <motion.div
                        initial={{ scale: 0, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                      >
                        <MapPin className="w-12 h-12 text-teal-600 drop-shadow-lg" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Zoom Controls */}
                    <div className="absolute right-4 top-4 z-10 space-y-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center active:bg-gray-100 transition-all"
                      >
                        <span className="text-xl text-gray-700">+</span>
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center active:bg-gray-100 transition-all"
                      >
                        <span className="text-xl text-gray-700">−</span>
                      </motion.button>
                    </div>

                    {/* Address Card at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
                      <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-600 mb-0.5">Selected location</div>
                            <div className="text-gray-900">{selectedAddress.street}</div>
                            <div className="text-gray-600 text-sm">{selectedAddress.city}</div>
                          </div>
                        </div>
                        <PrimaryButton
                          fullWidth
                          onClick={() => handleSelectAddress(selectedAddress.street, selectedAddress.city)}
                        >
                          Confirm Location
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
