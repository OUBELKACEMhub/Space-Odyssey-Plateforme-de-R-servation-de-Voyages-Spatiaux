      
const navBar = document.getElementById('dev');
const  welcomeMessage=document.getElementById('welcome');
function updateNavBar() {
  const savedUser = JSON.parse(localStorage.getItem('userSession'));

 
  navBar.innerHTML = "";


  if (savedUser && savedUser.isLoggedIn) {

    navBar.innerHTML = `
      <div class="container mx-auto px-4 py-3 flex w-full justify-between items-center gap-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center glow">
            <i class="fas fa-rocket text-white"></i>
          </div>
          <a href="index.html" class="font-orbitron text-xl font-bold text-white">SpaceVoyager</a>
        </div>
        
        <div class="hidden md:flex space-x-8 text-white items-center">
          <a href="index.html" class="hover:text-neon-blue transition-colors">Home</a>
          <a href="destinations.html" class="hover:text-neon-blue transition-colors">Destinations</a>
          <a href="booking.html" class="hover:text-neon-blue transition-colors">Booking</a>
          <a href="about.html" class="hover:text-neon-blue transition-colors">About</a>
          <button id="logoutBtn" class="border border-neon-blue px-3 py-1 rounded hover:bg-neon-blue hover:text-black transition">Logout</button>
        </div>

        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-white focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    `;

    welcomeMessage.textContent="Welcome  "+savedUser.username ;
  } 

  else {
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

        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-white focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    `;
  }

  
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('userSession');
      window.location.reload(); 
    });
  }
}


updateNavBar();

