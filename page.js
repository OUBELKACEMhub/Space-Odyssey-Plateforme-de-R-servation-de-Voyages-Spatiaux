const navBar = document.getElementById('dev');

function updateNavBar() {
  const savedUser = JSON.parse(localStorage.getItem('userSession')); // <-- نقلناها هنا

  if (savedUser && savedUser.isLoggedIn) {
    navBar.innerHTML = `
      <div class="container mx-auto px-4 py-3 flex w-full justify-between items-center gap-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center glow">
            <i class="fas fa-rocket text-white"></i>
          </div>
          <a href="index.html" class="font-orbitron text-xl font-bold text-white">SpaceVoyager</a>
        </div>

        <div class="hidden md:flex space-x-8 text-white">
          <a href="index.html" class="hover:text-neon-blue transition-colors">Home</a>
          <a href="destinations.html" class="hover:text-neon-blue transition-colors">Destinations</a>
          <a href="booking.html" class="hover:text-neon-blue transition-colors">Booking</a>
          <a href="about.html" class="hover:text-neon-blue transition-colors">About</a>
          <span class="text-cyan-400">Welcome ${savedUser.username}</span>
          <button id="logoutBtn" class="text-red-400 hover:text-red-500">Logout</button>
        </div>
      </div>
    `;
  } else {
    navBar.innerHTML = `
      <div class="container mx-auto px-4 py-3 flex w-full justify-between items-center gap-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center glow">
            <i class="fas fa-rocket text-white"></i>
          </div>
          <a href="index.html" class="font-orbitron text-xl font-bold text-white">SpaceVoyager</a>
        </div>

        <div class="hidden md:flex space-x-8 text-white">
          <a href="index.html" class="hover:text-neon-blue transition-colors">Home</a>
          <a href="destinations.html" class="hover:text-neon-blue transition-colors">Destinations</a>
          <a href="booking.html" class="hover:text-neon-blue transition-colors">Booking</a>
          <a href="about.html" class="hover:text-neon-blue transition-colors">About</a>
          <a href="login.html" class="hover:text-neon-blue transition-colors">Login</a>
        </div>
      </div>
    `;
  }
}

updateNavBar();
