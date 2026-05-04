import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading simulation
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fa] flex flex-col items-center justify-center relative overflow-hidden font-inter">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/islamic-art.png")' }}>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Elegant Spinner */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-20 h-20 border-[4px] border-emerald-100 rounded-full"></div>
            <div className="absolute inset-0 w-20 h-20 border-[4px] border-transparent border-t-[#0f4d30] border-r-[#0f4d30] rounded-full animate-spin"></div>
            <span className="material-symbols-outlined absolute text-3xl text-[#0f4d30] animate-pulse">grid_view</span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 tracking-tight animate-pulse">Loading your profile</h2>
          <p className="text-gray-500 text-sm mt-2 animate-pulse delay-75">Please wait a moment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] relative overflow-hidden font-inter py-10 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/islamic-art.png")' }}>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-72 shrink-0 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <nav className="flex flex-col gap-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 bg-[#0f4d30] text-white rounded-lg font-medium shadow-md shadow-[#0f4d30]/20">
                <span className="material-symbols-outlined text-[22px]">grid_view</span>
                Profile Overview
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                My Bookings
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-[22px]">favorite</span>
                Favorite Animals
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                Payment Methods
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-[22px]">settings</span>
                Settings
              </a>
              <div className="h-[1px] bg-gray-100 my-2"></div>
              <a href="#" className="flex items-center gap-3 px-4 py-3.5 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors">
                <span className="material-symbols-outlined text-[22px]">logout</span>
                Sign Out
              </a>
            </nav>
          </div>

          {/* Sacred Premium Card */}
          <div className="bg-[#114b30] rounded-xl p-6 text-white relative overflow-hidden shadow-xl shadow-[#114b30]/20">
            {/* Star watermark */}
            <span className="material-symbols-outlined absolute -right-8 -top-8 text-[140px] opacity-[0.08] rotate-12">star</span>
            <h3 className="font-bold text-lg mb-2 relative z-10">Sacred Premium</h3>
            <p className="text-emerald-100/90 text-sm mb-5 relative z-10 leading-relaxed">
              Upgrade to early access for the highest quality livestock selection.
            </p>
            <button className="bg-[#b38317] hover:bg-[#9d740f] text-white text-sm font-bold py-2.5 px-5 rounded-md relative z-10 transition-colors w-max shadow-md shadow-[#b38317]/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Header Card */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            {/* Soft glow behind avatar */}
            <div className="absolute top-1/2 left-12 -translate-y-1/2 w-32 h-32 bg-amber-200 rounded-full blur-[60px] opacity-30 pointer-events-none"></div>
            
            <div className="relative z-10 shrink-0">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[3px] border-white ring-2 ring-amber-400 shadow-lg bg-gray-100">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop" alt="Ahmed Al-Farsi" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-[#0f4d30] transition-colors border border-gray-100 flex items-center justify-center h-9 w-9">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full z-10 mt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-5 gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1.5 tracking-tight">Ahmed Al-Farsi</h1>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm font-medium">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    ahmed.farsi@premium.com
                  </div>
                </div>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold py-2.5 px-6 rounded-lg transition-all shadow-sm">
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full mt-2">
                <div>
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Location</div>
                  <div className="font-semibold text-gray-900">Dubai, UAE</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Member Since</div>
                  <div className="font-semibold text-gray-900">May 2021</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Status</div>
                  <div className="bg-[#fbbf24] text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full inline-block shadow-sm">Premium</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Verified</div>
                  <div className="text-emerald-500 flex items-center justify-center md:justify-start">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-5 relative overflow-hidden">
              <div className="w-[60px] h-[60px] bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
              </div>
              <div>
                <div className="text-[28px] font-bold text-gray-900 leading-tight">12</div>
                <div className="text-sm text-gray-500 font-medium">Total Bookings</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-5 relative overflow-hidden">
              <div className="w-[60px] h-[60px] bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">favorite</span>
              </div>
              <div>
                <div className="text-[28px] font-bold text-gray-900 leading-tight">08</div>
                <div className="text-sm text-gray-500 font-medium">Saved Animals</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-5 relative overflow-hidden">
              <div className="w-[60px] h-[60px] bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">calendar_today</span>
              </div>
              <div>
                <div className="text-[28px] font-bold text-gray-900 leading-tight">3.2y</div>
                <div className="text-sm text-gray-500 font-medium">Account Age</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
              <div className="flex justify-between items-center mb-7">
                <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">Recent Activity</h2>
                <a href="#" className="text-sm font-bold text-[#b8860b] hover:text-[#9d740f] transition-colors">View All</a>
              </div>
              
              <div className="flex flex-col gap-7 relative">
                {/* Connecting Line */}
                <div className="absolute left-[20px] top-4 bottom-8 w-[2px] bg-gray-100 -z-0"></div>

                <div className="flex gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border-[3px] border-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-gray-900 text-[15px]">Booking Confirmed</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">Your reservation for 'Elite Brahman #402' has been successfully processed.</p>
                    <div className="text-xs text-gray-400 font-medium mt-1.5">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 border-[3px] border-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">star</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-gray-900 text-[15px]">Animal Added to Favorites</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">You've saved 'Royal Camel Al-Zayid' to your watch list.</p>
                    <div className="text-xs text-gray-400 font-medium mt-1.5">Yesterday</div>
                  </div>
                </div>

                <div className="flex gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border-[3px] border-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-gray-900 text-[15px]">Wallet Topped Up</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">Added AED 5,000 to your digital wallet for upcoming auctions.</p>
                    <div className="text-xs text-gray-400 font-medium mt-1.5">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Animal Card */}
            <div className="bg-[#0f4d30] rounded-xl overflow-hidden shadow-xl shadow-[#0f4d30]/20 flex flex-col relative text-white h-full">
              <div className="h-56 w-full relative">
                <img src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2670&auto=format&fit=crop" alt="Elite Brahman" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#b38317] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-widest shadow-md">
                  Certified
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f4d30] to-transparent"></div>
              </div>
              <div className="p-7 flex flex-col flex-1 relative z-10 -mt-2">
                <h2 className="text-2xl font-bold mb-2">Elite Brahman #402</h2>
                <div className="text-emerald-100/70 text-sm mb-6 flex flex-wrap gap-x-2 gap-y-1">
                  <span>Weight: 850kg</span>
                  <span className="opacity-50">•</span>
                  <span>Age: 2.5 Years</span>
                  <span className="opacity-50">•</span>
                  <span>Origin: Al-Ain Farms</span>
                </div>
                
                <div className="mt-auto flex items-end justify-between border-t border-emerald-800/50 pt-5">
                  <div>
                    <div className="text-[10px] text-emerald-300 uppercase tracking-widest font-bold mb-1">Current Bid</div>
                    <div className="text-[22px] font-bold text-amber-400">AED 24,500</div>
                  </div>
                  <button className="bg-[#1a6540] hover:bg-[#145435] text-white py-2.5 px-6 rounded-lg font-semibold transition-colors border border-emerald-700/50 shadow-sm text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
