import './style.css'
import javascriptLogo from './javascript.svg'
import pro from './assets/pro-pic.jpg'
import tailcss from './assets/tailwindcss.png'
import { setupCounter } from './counter.js'
import vitelogo from './assets/vite.svg'


document.querySelector('#app').innerHTML = `

<!-- Info Card Section -->
<div class="relative w-full">
<!-- Overlay -->
<div id="Overlay" 
     class="fixed inset-0 bg-white bg-opacity-20 hidden z-20 transition-opacity duration-500 ease-in-out">
</div>

<!-- Side Bar Menu Starts here-->
<div id="SideBar" class=" fixed top-0 right-0 h-full  z-30 w-72 rounded-tl-2xl rounded-bl-2xl bg-black transform translate-x-full transition-transform duration-500 ease-in-out">
<!-- Heading -->
<div class="mt-12 ml-10 flex flex-wrap justify-between pr-8">
<span class="relative pl-4 text-white text-opacity-50 font-rajdhani text-2xl sm:text-2xl before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-600 before:absolute before:left-0 before:top-[15px] before:-translate-y-1/2">
Menu
</span>
<button>
<i id="CloseBtn" class="fa-solid fa-xmark text-2xl" style="color: #ffffff;"></i>
</button>
</div>
<!-- Menu Items -->
<ul class="mt-12 ml-10 font-rajdhani text-white text-opacity-50 text-sm space-y-6">
<li id="HomeBtn" class="hover:text-white hover:cursor-pointer"> <i class="fa-solid fa-house"></i> <span class="inline-block pl-2"> Home </span></li>
<li id="ExpBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-briefcase"></i> <span class="inline-block pl-2">Experience</span></li>
<li id="ServicesBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-brands fa-servicestack"></i> <span class="inline-block pl-2">Services</span></li>
<li id="AboutBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-user"></i> <span class="inline-block pl-2">About</span></li>
<li id="PriceBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-tags"></i> <span class="inline-block pl-2">Pricing</span></li>
<li id="ContactBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-regular fa-envelope"></i><span class="inline-block pl-2">Contact</span></li>

</ul>

<div class="ml-10 mt-10">
<span class="relative pl-4 text-white text-opacity-50 font-rajdhani text-2xl sm:text-2xl before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-600 before:absolute before:left-0 before:top-[15px] before:-translate-y-1/2">
Social Networks
</span>

<div class="flex  mt-4 space-x-2">
      <span class="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-whatsapp fa-lg" style="color: #0ecd11;"></i>
      </span>
      <span class="w-10 h-10 border border-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-facebook-f fa-lg" style="color: #1c56ba;"></i>
      </span>
      <span class="w-10 h-10 border border-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-instagram fa-lg" style="color: #de8f21;"></i>
      </span>
      <span class="w-10 h-10 border border-blue-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-linkedin-in fa-lg" style="color: #335694;"></i>
      </span>
    </div>

</div>

<!-- Menu Items Ends Here -->




</div>
<!-- Side Bar Menu Ends here -->

<button id="OpenBtn" class=" group fixed z-20 left-64 sm:left-[80%] sm:top-10 sm:right-0 ">
<i class="fa-brands fa-elementor  text-4xl sm:text-5xl  text-orange-600 hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"></i> 
</button>
<!-- Home Section -->
<div id="info-card" class="w-[90%] max-w-[880px] h-[620px] bg-lightblack mx-auto mt-8 rounded-3xl shadow-inner overflow-y-auto hide-scrollbar" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap items-center justify-between">
    <div class="ml-8 mt-12 sm:mt-12 flex items-center">
      <i class="fa-solid fa-file-invoice text-3xl sm:text-4xl text-white"></i>
    </div>
    <div class="mr-4 mt-12 sm:mt-12 flex items-center border border-white border-opacity-20 rounded-full px-4 py-2">
      <p class="relative pl-4 text-white text-opacity-50 font-rajdhani text-sm sm:text-xl before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
        Available for <span class="text-white">Projects</span>
      </p>
    </div>
  </div>

  <div>
    <img src="${pro}" alt="Profile Picture" class="w-56 sm:w-72 h-72 object-cover rounded-2xl mx-auto mt-12 flex-wrap" />
    <div class="text-center mt-4 mx-auto">
      <p class="text-white text-opacity-85 font-rajdhani mt-8 text-xl">umertahir141@gmail.com</p>
      <p class="text-white text-opacity-30 font-rajdhani mt-2 text-md">Based in Lahore, Pakistan</p>
    </div>

    <div class="flex justify-center mt-8 mx-auto space-x-4">
      <span class="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-whatsapp fa-lg" style="color: #0ecd11;"></i>
      </span>
      <span class="w-10 h-10 border border-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-facebook-f fa-lg" style="color: #1c56ba;"></i>
      </span>
      <span class="w-10 h-10 border border-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-instagram fa-lg" style="color: #de8f21;"></i>
      </span>
      <span class="w-10 h-10 border border-blue-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:border-white transition-colors duration-300">
        <i class="fa-brands fa-linkedin-in fa-lg" style="color: #335694;"></i>
      </span>
    </div>

    <div id="Contact-BTN" class="hover:cursor-pointer Contact-BTN group mx-auto mt-8 mb-6 flex items-center border border-white border-opacity-20 rounded-full px-4 py-2 w-[80%] flex-wrap justify-between">
      <span class="text-xl sm:text-3xl text-white font-rajdhani group-hover:text-orange-600 transition-colors duration-300">Get Started</span>
      <span class=" w-14 h-14 border border-white bg-white rounded-full flex items-center justify-center cursor-pointer">
        <i class=" fa-solid fa-arrow-up-right-from-square sm:text-xl text-lg text-black group-hover:text-orange-600 transition-colors duration-300"></i>
      </span>
    </div>
  </div>
</div> <!-- ✅ Properly closed info-card -->
</div>

<!-- Rest of Portfolio -->
<div class="w-[90%] max-w-[880px] mx-auto mt-8">

  <!-- Intro Section -->

  <div id="intro" class="mt-10">
    <div>
      <span class="relative pl-4 text-xl text-white text-opacity-60 font-rajdhani before:content-[''] before:opacity-60 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">Introduction</span>
      <h1 class="text-4xl text-white font-rajdhani mt-10 opacity-0" data-animate="fade-in-left2">Welcome to Portfolio of,<br/>Muhammad Umar Tahir</h1>
      <p class="text-white text-opacity-60  font-rajdhani mt-4">I'm a passionate web developer with <br/> a knack for creating dynamic and responsive web applications.</p>
    </div>

     <!-- Button-style-skills -->

    
    <div class="flex gap-2 flex-wrap mt-10  ">
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">Web Development</span>
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">Full-Stack</span>
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">React</span>
    
    <div class="w-full h-0"></div> <!-- Acts like a <br> in flex -->

    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">PHP</span>
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">Laravel</span>
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">Tailwind</span>
    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">MySQL</span>
    </div>

    </div>


    <!-- Cards showing work-strength -->
    
    <div class="flex w-[90%] max-w-[880px] flex-wrap z-10">
  <div class="mx-auto flex sm:gap-8 flex-wrap gap-0">

    <!-- Card No 1 -->
    <div class="mt-10 h-48 sm:w-80 md:w-80 w-64 bg-buttoncol rounded-2xl 
                flex flex-col flex-wrap opacity-0"
         data-animate="scale-in-left">
      <span class="mt-8 ml-4 relative pl-4 text-xl text-white font-rajdhani 
                   before:content-[''] before:opacity-40 before:w-2 before:h-2 
                   before:rounded-full before:bg-white before:absolute before:left-0 
                   before:top-1/2 before:-translate-y-1/2">
        Projects Done
      </span>
      <div class="flex sm:mt-20 mt-16 justify-end mr-6">
      <span class="counter text-white font-rajdhani sm:text-8xl md:text-8xl text-6xl" data-target="5">0</span>
      <span class="text-white font-rajdhani sm:text-6xl md:text-6xl text-5xl ml-1 mt-2 sm:mt-8">+</span>
      </div>
    </div>

    <!-- Card No 2 -->
    <div class="mt-10 h-48 sm:w-80 md:w-80 w-64 bg-buttoncol rounded-2xl 
                flex flex-col flex-wrap opacity-0"
         data-animate="scale-in-right">
      <span class="mt-8 ml-4 relative pl-4 text-xl text-white font-rajdhani 
                   before:content-[''] before:opacity-40 before:w-2 before:h-2 
                   before:rounded-full before:bg-white before:absolute before:left-0 
                   before:top-1/2 before:-translate-y-1/2">
        Success Rate
      </span>
      <div class="flex justify-end mr-6 mt-32 sm:mt-20">
      <span class="counter text-white font-rajdhani sm:text-8xl md:text-8xl text-6xl" data-target="95">0</span>
      <span class="text-white font-rajdhani sm:text-6xl md:text-6xl text-5xl ml-1 mt-2 sm:mt-6">%</span>
      </div>
    </div>

  </div>
  </div>
    <!-- INTRO SECTION ENDS HERE -->

    
  </div>

     <!-- Experience Section -->

  <div id="Experience" class="mt-16 w-[90%] max-w-[880px] mx-auto">
     <!-- Heading --> 
  
  <div class="flex flex-col flex-wrap">
    <span class="relative pl-4 text-xl text-white text-opacity-60 font-rajdhani before:content-[''] before:opacity-60 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">Experience</span>
    <h1 id="scroll-heading" class=" sm:text-4xl text-opacity-60 text-xl text-white font-rajdhani mt-10">&nbsp;I will offer more than just <br/> a place to live it’s a space designed <br/> to reflect your unique style inspiration</h1>
  </div>
    <!-- Companies -->

  <div class="mt-12">

    <!-- The 1st Company -->

  <div class="group">  
  <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Career Institute</span>
    
    <div class="flex mt-2 justify-between">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Full-Stack Developer</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol group-hover:bg-orange-600 transition-colors duration-300">2025-Present</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>
           
   <!-- The 2nd Company -->

    <div class="group mt-6">  
    <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Noah Holdings</span>
    
    <div class="flex mt-2 justify-between">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Tech Support</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol group-hover:bg-orange-600 transition-colors duration-300">2023-2024</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>

    <!-- The 3rd Company -->

    <div class="group mt-6">  
    <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Technisia</span>
    
    <div class="flex mt-2 justify-between">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Front-End Developer</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol group-hover:bg-orange-600 transition-colors duration-300">2022-2023</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>



   </div>
  
   <!-- MY SERVICES CARD Section -->
  
   <div id="Myservices" class="w-[90%] max-w-[880px] sm:h-[960px] h-[800px] bg-lightblack mx-auto mt-16 rounded-3xl shadow-inner" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
    <!-- Heading -->
   <div class=" flex flex-col flex-wrap " >
    <span class=" mt-20 ml-16 relative pl-4 text-xl text-white text-opacity-60  font-rajdhani before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">My Services</span>
   </div> 

    <!-- 1st Service -->
    
    <div class="flex flex-wrap mt-16 sm:gap-12 gap-4">
    
    <div class="sm:ml-16 mt-4 ml-8 sm:mt-2">
    <i class="fa-solid fa-code sm:text-xl sm:py-4 sm:px-6 text-xl py-2 px-4 bg-gradient-to-br from-orange-950 via-orange-600 to-orange-950  rounded-lg" style="color: #f7f7f7;"></i>
    </div>
    <div class="sm:mt-0 mt-3">
    <p class="text-white font-rajdhani md:text-7xl sm:text-5xl text-xl">Web <br> Development<span class="sm:text-lg text-sm absolute ">[01]</span></p>
    <ul class="list-disc mt-12 sm:ml-4 -ml-16">
    <li class="text-white text-opacity-60 font-rajdhani mt-4 sm:text-lg text-sm">Responsive Design</li>
    <li class="text-white text-opacity-60 font-rajdhani mt-2 sm:text-lg text-sm">E-commerce Solutions</li>
    <li class="text-white text-opacity-60 font-rajdhani mt-2 sm:text-lg text-sm">Content Management Systems</li>
    </ul>
    </div>
    

    </div>
    <!-- 2nd Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl sm:text-5xl text-xl">Web Deployment<span class="sm:text-lg text-sm absolute ">[02]</span></p>
    </div>
    <!-- 3rd Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl sm:text-5xl text-xl">Building Database<span class="sm:text-lg text-sm absolute ">[03]</span></p>
    </div>
    <!-- 4th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl sm:text-5xl text-xl">Cloudnary Storage<span class="sm:text-lg text-sm absolute ">[04]</span></p>
    </div>

    <!-- Card Footer -->
    <div class="sm:ml-16 mt-16 ml-8 sm:mt-20 justify-between flex flex-wrap gap-2 sm:gap-0">
    <div class="flex flex-wrap">
    <i class="fa-solid fa-globe fa-sm mt-3" style="color: #f7f7f7;"></i>
    <span class="ml-2 font-rajdhani text-white text-opacity-60">Available to <span class="font-rajdhani text-white"> World-Wide </span> </span>
    </div>
    
    <div id="Contact-BTN" class="Contact-BTN flex flex-wrap mr-16 group hover:cursor-pointer ">
    <span class="font-rajdhani mr-2 group-hover:text-orange-600 transition-colors duration-300 text-xl text-white">Contact Me</span>
    <i class="fa-solid fa-arrow-up-right-from-square fa-lg mt-3 text-white group-hover:text-orange-600 transition-colors duration-300"></i>
    </div>

    </div>

  </div>

  <!-- ABOUT ME Section -->

  <div id="About-me" class="mt-16 w-[90%] max-w-[880px] mx-auto">
  <!-- Heading -->
  
  <div class="flex flex-wrap custom:gap-40 gap-5">
  
  <div class="flex flex-wrap">
  <span class=" relative pl-4 text-xl text-white text-opacity-60 font-rajdhani before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-0 before:top-[12px] before:-translate-y-1/2">
    About Me
  </span>
  </div>

  <div class="flex flex-wrap">
  <p class="text-white font-rajdhani text-5xl ">
    Behind every great website <br> is an even greater purpose
  </p>
  </div>

  </div>

  <div class="flex flex-wrap mt-10 custom:ml-64 ml-0">
  <p class="text-white font-rajdhani text-opacity-60">Every website has a starting point, and for truly impactful digital experiences,<br/> it’s the vision that drives 
  the development process. It’s the code, structure,<br/> and functionality working together to serve that vision. We believe that
   understanding the purpose is paramount—because great development <br/> is more than just writing code; it’s crafting experiences that connect, engage, and inspire.</p>
  </div>

  <!-- Tech Stact Section -->
  <div class="mt-16">
  <span class="font-rajdhani text-white text-5xl" id="tech-stack">Tech Stack</span>
  <!-- Carasoul section -->

  <div class="relative w-full mt-10">
  <!-- NAVIGATION BUTTONS -->

  <div class="flex flex-wrap justify-between">
  <span class="text-white text-opacity-60 font-rajdhani text-xl mt-2 rounded-3xl border-[0.5px] px-4 py-2">Umer@Dev</span>
  <div class="buttonwrapper">
  <button id="prevBtn" class="hover:text-orange-600  text-2xl  text-white px-3 py-2 rounded-full z-10">
    &#10094;
  </button>
  <button id="nextBtn" class="hover:text-orange-600  text-2xl  text-white px-3 py-2 rounded-full z-10">
    &#10095;
  </button>
  </div>
  </div>

  <!-- Viewport (clips to 3 cards) -->
  <div class="overflow-hidden w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
  <!-- Carousel wrapper -->
  <div id="carousel" class=" flex transition-transform duration-500 ease-in-out gap-2 md:gap-6 no-scrollbar">
  <!-- 1st HTML Card -->
  <div class="bg-buttoncol flex-shrink-0 w-full sm:w-1/2 md:w-60 mt-10 rounded-2xl shadow-inner h-52  text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">HTML</span>
  <i class="fa-brands fa-html5 text-7xl mt-4" style="color: #045bf1;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Leading tool for web structure</span>
  </div>
  <!-- 2nd Tailwindcss Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center justify-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Tailwind CSS</span>
  <img src="${tailcss}" alt="Tailwind CSS Logo" class="w-20 h-20 mx-auto mt-2">
  <span class="text-white font-rajdhani text-sm mt-2 block">Utility-first CSS framework</span>
  </div>
  <!-- 3rd JavaScript Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">JavaScript</span>
  <i class="fa-brands fa-square-js text-7xl mt-4" style="color: #ecd904;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Leading web development language</span>
  </div>
  <!-- 4th React Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">React.js</span>
  <i class="fa-brands fa-react text-7xl mt-4" style="color: #619bff;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Library for building user interfaces</span>
  </div>
  <!-- 5th Vite Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Vite.js</span>
  <img src="${vitelogo}" alt="Vite Logo" class="w-20 h-20 mx-auto mt-2">
  <span class="text-white font-rajdhani text-sm mt-2 block">Next Generation Frontend Tooling</span>
  </div>
  <!-- 6th MySQL Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">MySQL</span>
  <i class="fa-solid fa-database text-7xl mt-4" style="color: #ffffff;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Relational database management</span>
  </div>
  <!-- 7th PHP Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">PHP</span>
  <i class="fa-brands fa-php text-7xl mt-4" style="color: #B197FC;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Server-side scripting language</span>
  </div>
  <!-- 8th Laravel Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-1/2 md:w-60 text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Laravel</span>
  <i class="fa-brands fa-laravel text-7xl mt-4" style="color: #ff2934;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">PHP framework for web artisans</span>
  </div>
  </div> <!-- Viewport ends here -->
  </div>
  <!-- Carousel wrapper ends here -->
  
   
  </div>
  <!-- carousel section ends here -->

  </div>
  <!-- tech stack section ends here -->

  </div>
 <!-- About me section ends here -->

 <!-- Work Process Section -->
 <div id="Work-Process" class="mt-16 w-[90%] max-w-[880px] mx-auto">
  <!-- Heading -->
  <div class="flex flex-wrap">
    <span id="Work-process" class="font-rajdhani text-white text-7xl mt-10 font-medium">Work Process</span>
  </div>
  <!-- Carousel for Work Steps view-port -->
  <div class="overflow-hidden w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">

  <!-- Carousel wrapper -->

  <div id="carousel-2" class=" flex transition-transform duration-700 ease-in-out gap-2 md:gap-6 no-scrollbar">
  
  <!-- 1st step Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] h-80 flex-shrink-0  w-full " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap">
  
  <div class="sm:mt-16 mt-10 text-center w-full sm:w-auto sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 1</span>
  <h1 class="text-white font-rajdhani text-2xl sm:text-4xl mt-12  sm:mt-16 sm:ml-10">Gather Requirements<br/> and Plan</h1>
  <span class="pl-6 sm:pl-0 text-left block text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Create a requirements document<br/> and confirm with <br/> the client.</span>
 </div>

 <div class="sm:ml-16 sm:mt-16 sm:block hidden">
 <i class="fa-solid fa-magnifying-glass hidden sm:block sm:text-6xl rounded-full sm:px-6 sm:py-6 sm:ml-10  bg-black " style="color: #e88f11;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 1st card ends here -->

 <!-- 2nd step card Starts here -->

 <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] h-80 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap">
  
  <div class="mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 2</span>
  <h1 class="text-white font-rajdhani text-2xl sm:text-4xl mt-12 sm:mt-16 sm:ml-10">Set Up the Environment <br/> and Build the Front End</h1>
  <span class="pl-6 sm:pl-0 block ml-2 text-left  text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Ensure responsiveness and <br/> accessibility.</span>
 </div>

 <div class="ml-16 mt-16 hidden sm:block">
 <i class="fa-solid fa-seedling hidden sm:block text-6xl rounded-full bg-black px-6 py-6" style="color: #d98a02;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 2nd card ends here -->

 <!-- 3rd step card Starts here -->
 <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] h-80 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap">
  
  <div class="mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 3</span>
  <h1 class="text-white font-rajdhani text-2xl mt-12 sm:text-4xl sm:mt-16 sm:ml-10">Develop the Back End <br/> and Database</h1>
  <span class="pl-6 sm:pl-0 text-left block text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Create APIs for data flow<br/> between front end<br/> and back end.</span>
 </div>

 <div class="ml-16 mt-16 sm:block hidden">
 <i class="fa-solid fa-server hidden sm:block ml-8 text-6xl rounded-full bg-black px-6 py-6" style="color: #d98a02;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 3rd card ends here -->

 <!-- 4th step card Starts here -->
 
 <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] h-80 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap">
  
  <div class="mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 4</span>
  <h1 class="text-white font-rajdhani text-2xl mt-12 sm:text-4xl sm:mt-16 sm:ml-10">Test, Deploy, and </br> Deliver</h1>
  <span class="text-left pl-6 sm:pl-0 block text-white font-rajdhani text-sm mt-10 sm:mt-6 sm:ml-10">Perform unit and <br/> integration testing; fix bugs.</span>
 </div>

 <div class="ml-16 mt-16">
 <i class="fa-solid fa-flask-vial ml-24 text-6xl rounded-full bg-black px-4 py-6" style="color: #d98a02;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 4th card ends here -->


  </div>

  <!-- Carousel wrapper ends here -->
  </div>
  <!-- Carousel view-port ends here -->

 </div>
 <!-- Work Process Section ends here -->

 <!-- My PRICING Section -->
 <div id="My-pricing" class="w-[90%] max-w-[880px] mx-auto mt-16">

 <!-- Heading -->
 <div class="mt-4">
 <h1 class="font-rajdhani text-white text-7xl font-medium">My Pricing</h1>

 <!-- Packages -->
 <div class="flex flex-wrap mt-8 px-4 py-4 gap-2 rounded-full bg-lightblack w-fit ">
 <span class="text-xl bg-lightbg rounded-full px-4 py-2 font-rajdhani text-white">Standard Plan</span>
 </div>

 </div>
 <!-- Heading ends Here-->

 <!-- Broshure -->

 <div class="w-full h-[830px] sm:h-[680px] bg-lightblack mt-12 shadow-inner rounded-2xl px-6 pt-6" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
 <!-- Price Tag -->
 <div class="w-full bg-orange-600 h-[320px] rounded-2xl bg-[linear-gradient(to_top_left,#7F3820_30%,#232323_70%)]">
 <h1 class="relative text-white top-10 font-rajdhani text-2xl ml-10 sm:ml-12 before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-[15px] before:-translate-y-1/2">Standard Plan</h1>
 <p class="text-lg font-rajdhani mt-12 ml-8 text-white text-opacity-70">Have Design ready to build? Or small budget?</p>
 
 <!-- Price -->
 <div class="flex flex-wrap sm:ml-8 ml-4 mt-14">
 <span class="text-white font-rajdhani text-6xl sm:text-8xl ">$40</span>
 <span class="sm:ml-4 ml-2 mt-6 sm:mt-10 text-opacity-50 text-white font-rajdhani text-2xl sm:text-4xl">/ Hour</span>
  </div>


 </div>
 <!-- Price tag ends here -->
 <!-- Pointers -->
 <div>
 <ul class="mt-16 ml-10 font-rajdhani text-xl text-white list-disc">
 <li>Need your Wireframe</li>
 <li>Implement with TailwindCSS, JS , HTML and PHP/Laravel</li>
 <li>Remote/Online</li>
 <li>Work in Business Days no Weekends</li>
 <li>Support 6 months</li>
 </ul>
 </div>
 <!-- Pointers end here -->
 <!-- Footer -->
 <div id="Contact-BTN" class="Contact-BTN hover:cursor-pointer flex flex-wrap ml-2 group mt-14 h-14 pl-4 text-center items-center justify-center rounded-3xl bg-white w-fit gap-4 ">
    <span class="font-rajdhani group-hover:text-orange-600 transition-colors duration-300 text-lg text-black mt-0">Get Started</span>
    <div class="rounded-full mr-2 px-[12px] py-[10px] h-fit   bg-black">
    <i class="fa-solid fa-arrow-up-right-from-square fa-lg text-white group-hover:text-orange-600 transition-colors duration-300"></i>
    </div>

    </div>

 </div>
 <!-- Broshure ends here -->
 <!-- Quote Button -->
 <div class="Contact-BTN hover:cursor-pointer flex flex-wrap group w-full h-20 bg-lightblack mt-4 shadow-inner rounded-2xl pl-4 sm:pl-6 justify-between" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);" >
 <span class="font-rajdhani text-2xl sm:text-4xl text-white mt-6 group-hover:text-orange-600 transition-colors duration-300">Custom Quote</span>
 <div class="rounded-xl h-fit mt-2 px-6 py-4 bg-lightbg mr-2 border">
 <i class="fa-solid fa-arrow-up-right-from-square  text-2xl text-white group-hover:text-orange-600 transition-colors duration-300"></i>
 </div>
 </div>
 <!-- Quote button ends here -->
 
 </div>
 <!-- My pricing ends here -->
 </div>


<!-- Footer Starts here -->
 <div id="Footer" class="flex items-center justify-center mt-16 py-8 px-12 bg-gradient-to-tl from-orange-600/70 from-[6%] via-transparent to-lightblack h-[500px] mx-auto">
<!-- Footer Content -->
<div id="Contact-BTN" class="Contact-BTN hover:cursor-pointer text-center mx-auto rounded-full py-4 px-2 sm:py-14 sm:px-2 w-full max-w-[600px] bg-lightbg bg-opacity-40">

    <!-- First copy -->
    <marquee behavior="scroll" direction="right" scrollamount="5" align="middle" class="w-full px-8 font-rajdhani text-white text-4xl sm:text-7xl font-medium">
      <span class="inline-flex items-center gap-3">
      <span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></span>
      Book A Call
    </span>
    <span class="inline-flex items-center gap-3">
      <span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></span>
      Book A Call
    </span>
    <span class="inline-flex items-center gap-3">
      <span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></span>
      Book A Call
    </span>
    <span class="inline-flex items-center gap-3">
      <span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></span>
      Book A Call
    </span>

    </marquee>
    
  
  </div>
</div>

 </div>

 

  
`

document.querySelector('#My-pricing').insertAdjacentHTML(
  "afterend",
  ` <!-- Contact form Starts here -->
 <div id="Contact-Form" class="mt-28 py-4 px-6 sm:py-8 sm:px-12 bg-lightblack w-[90%] rounded-2xl max-w-[880px] h-[1200px] sm:h-[1050px] mx-auto shadow-inner" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
 <!-- Heading -->
 
 <div class="mt-8">
 <h1 class="font-rajdhani text-white text-5xl sm:text-7xl font-medium ">Contact For<br/> Work</h1>
 </div>
 <!-- heading ends here -->
 
 <!-- Form Starts here -->
 <div class="mt-10 px-2">
   <form id="contactme" action="src/send-email.php" method="POST" class="space-y-6">
    <!-- Name -->
    <div>
      <label for="name" class="block text-white text-xl font-medium font-rajdhani">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name"
        class="font-rajdhani border-b border-white/40 placeholder-white/40 text-white w-full py-2 focus:outline-none focus:border-b-white bg-transparent " required />
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-white text-xl font-medium font-rajdhani">Your E-mail</label>
      <input type="email" id="email" name="email" placeholder="Enter your E-mail"
        class="font-rajdhani border-b border-white/40 placeholder-white/40 text-white w-full py-2 focus:outline-none focus:border-b-white bg-transparent " required />
    </div>

    <!-- Number -->
    <div>
      <label for="number" class="block text-white text-xl font-medium font-rajdhani">Your Number</label>
      <input type="text" id="number" name="number" placeholder="Enter your number"
        class="font-rajdhani border-b border-white/40 placeholder-white/40 text-white w-full py-2 focus:outline-none focus:border-b-white bg-transparent "  />
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-white text-xl font-medium font-rajdhani">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="Write your message..."
        class="font-rajdhani border-b border-white/40 placeholder-white/40 text-white w-full py-2 focus:outline-none focus:border-b-white bg-transparent " required></textarea>
    </div>

    <!-- Budget Estimate price -->
    <div id="price-options" class="flex flex-wrap mt-6 gap-5">
    <span class="bg-transparent rounded-3xl px-6 py-2 font-rajdhani text-white text-lg border border-white/40 cursor-pointer"> < $1,000 </span>
    <span class="bg-transparent rounded-3xl px-6 py-2 font-rajdhani text-white text-lg border border-white/40 cursor-pointer"> $1,000 - $5,000 </span>
    <span class="bg-transparent rounded-3xl px-6 py-2 font-rajdhani text-white text-lg border border-white/40 cursor-pointer"> $5,000 - $10,000 </span>
    <div class="w-full"></div>
    <span class="bg-transparent rounded-3xl px-4 sm:px-6 py-2 font-rajdhani text-white text-lg border border-white/40 -mt-6 sm:-mt-4 cursor-pointer"> $10,000 - $20,000 </span>
    <span class="bg-transparent rounded-3xl px-6 py-2 font-rajdhani text-white text-lg border border-white/40 mt-0 sm:-mt-4 cursor-pointer"> > $20,000 </span>
    <input type="hidden" id="selected-price" name="selected-price" />

    </div>
    <!-- Estimated price ends here -->

    <!-- Submit -->
    <div>
      <button type="submit"
        class="group pb-4 w-full mt-10 md:w-auto px-2 sm:px-6 py-3 bg-white text-black text-lg sm:text-xl font-semibold rounded-full shadow-lg font-rajdhani hover:text-orange-600 hover:scale-105 transform transition duration-300 ">
        <i class="fa-solid fa-envelope text-black group-hover:text-orange-600 transform transition duration-300" ></i>
        Send Message
      </button>
    </div>
  </form>
 

 </div>
 <!-- Form fields end here -->

 </div>
 <!-- Contact form ends here -->

</div>`);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactme");
  const statusDiv = document.createElement("div");
  statusDiv.className = "text-white mt-4";
  form.appendChild(statusDiv);

  // ✅ Handle price option clicks
  const priceInput = document.getElementById("selected-price");
  document.querySelectorAll("#price-options span").forEach(span => {
    span.addEventListener("click", () => {
      // remove highlight from others
      document.querySelectorAll("#price-options span").forEach(s => {
        s.classList.remove("text-orange-600");
        s.classList.add("text-white");
      });
      // highlight selected
      span.classList.remove("text-white");
      span.classList.add("text-orange-600");

      // set hidden input value
      priceInput.value = span.textContent.trim();
    });
  });

  // ✅ Handle form submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("src/send-email.php", {  // <-- make sure path is correct
        method: "POST",
        body: formData
      });

      const result = await response.text();
      console.log("Server Response:", result);

      if (result.includes("success")) {
        statusDiv.textContent = "✅ Message sent successfully!";
        statusDiv.style.color = "lime";
        statusDiv.style.fontFamily = "rajdhani"
        form.reset();
      } else {
        statusDiv.textContent = "❌ Failed to send message.";
        statusDiv.style.color = "red";
      }
    } catch (err) {
      statusDiv.textContent = "⚠️ Something went wrong!";
      statusDiv.style.color = "orange";
      console.error(err);
    }
  });

});


document.addEventListener("DOMContentLoaded", () => {
    const sideBar = document.getElementById("SideBar");
    const overlay = document.getElementById("Overlay");
    const openBtn = document.getElementById("OpenBtn"); // ✅ Button, not <i>
    const closeBtn = document.getElementById("CloseBtn");
    const homeBtn = document.getElementById("HomeBtn");
    const expBtn = document.getElementById("ExpBtn");
    const servicesBtn = document.getElementById("ServicesBtn");
    const aboutBtn = document.getElementById("AboutBtn");
    const priceBtn = document.getElementById("PriceBtn");
    const contactBtn = document.getElementById("ContactBtn");

    // Open sidebar
    function openSidebar() {
      sideBar.classList.remove("translate-x-full");
      sideBar.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
      openBtn.classList.add("hidden");
    }

    // Close sidebar
    function closeSidebar() {
      sideBar.classList.remove("translate-x-0");
      sideBar.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      openBtn.classList.remove("hidden");
    }

    // Events
    openBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Home button click → scroll + close
homeBtn.addEventListener("click", () => {
  closeSidebar();
  document.getElementById("intro").scrollIntoView({
    behavior: "smooth"
  });
  });

  expBtn.addEventListener("click", () => {
    closeSidebar();
    document.getElementById("Experience").scrollIntoView({
      behavior: "smooth"
    });
  });

  servicesBtn.addEventListener("click", () => {
    closeSidebar();
    document.getElementById("Myservices").scrollIntoView({
      behavior: "smooth"
    });
  });

  aboutBtn.addEventListener("click", () => {
    closeSidebar();
    document.getElementById("About-me").scrollIntoView({
      behavior: "smooth"
    });
  });

  priceBtn.addEventListener("click", () =>{
    closeSidebar();
    document.getElementById("My-pricing").scrollIntoView({
      behavior: "smooth"
    });
  });

  contactBtn.addEventListener("click", () => {
    closeSidebar();
    document.getElementById("Contact-Form").scrollIntoView({
      behavior: 'smooth'
    });
  });


  });

  
  document.addEventListener("DOMContentLoaded", () => {
  const contactBtns = document.querySelectorAll(".Contact-BTN");

  contactBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("Contact-Form").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});


  document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter, speed = 2000) => { // speed in ms
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / (speed / 32); // 16ms ≈ 1 frame at 60fps

    const update = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      }
    };

    update();
  };

  counters.forEach(counter => animateCounter(counter, 4000)); // 4 seconds slow
});

  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const anim = entry.target.getAttribute("data-animate");
        entry.target.classList.remove("opacity-0"); // make visible
        entry.target.classList.add("animate-" + anim);
        obs.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});



  

  



document.addEventListener("DOMContentLoaded", () => {
  const carousell = document.getElementById("carousel-2");
  if (!carousell) return;

  const autoplayDelay = 3000;
  const transitionMs = 1000;

  const originals = Array.from(carousell.children);
  if (originals.length === 0) return;

  // Clone first & last cards for infinite loop effect
  const firstClone = originals[0].cloneNode(true);
  const lastClone = originals[originals.length - 1].cloneNode(true);
  carousell.insertBefore(lastClone, originals[0]);
  carousell.appendChild(firstClone);

  const allCards = Array.from(carousell.children);

  let cardWidth;
  let step;
  let index = 1;
  let autoplayId;

  // ✅ Get actual CSS flex gap
  function getFlexGap() {
    return parseInt(getComputedStyle(carousell).columnGap || 0, 10);
  }

  // ✅ Calculate card width
  function getCardWidth() {
    const containerWidth = carousell.parentElement.offsetWidth;
    if (window.innerWidth < 640) {
      return containerWidth; // full width on mobile
    }
    return Math.min(containerWidth, 590); // cap on desktop
  }

  function applyCardWidths() {
    const containerWidth = carousell.parentElement.offsetWidth;
    const cssGap = getFlexGap();
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      // ✅ On mobile: card fills container - but gap still exists in flex
      cardWidth = containerWidth - cssGap;
      step = containerWidth; // slide exactly 1 full viewport width
    } else {
      cardWidth = getCardWidth();
      step = cardWidth + cssGap;
    }

    allCards.forEach((card) => {
      card.style.flex = `0 0 ${cardWidth}px`;
      card.style.width = `${cardWidth}px`;
    });

    updatePosition(false);
  }

  function updatePosition(withTransition = true) {
    carousell.style.transition = withTransition
      ? `transform ${transitionMs}ms ease-in-out`
      : "none";
    carousell.style.transform = `translateX(-${step * index}px)`;
  }

  function goToNext() {
    index++;
    updatePosition(true);
  }

 carousell.addEventListener("transitionend", () => {
  const total = allCards.length;

  if (index >= total - 1) {
    // Went past the lastClone
    index = 1;
    updatePosition(false);
  }

  if (index <= 0) {
    // Went before the lastClone
    index = total - 2;
    updatePosition(false);
  }
});

  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(goToNext, autoplayDelay);
  }

  function stopAutoplay() {
    clearInterval(autoplayId);
    autoplayId = null;
  }

  carousell.addEventListener("mouseenter", stopAutoplay);
  carousell.addEventListener("mouseleave", startAutoplay);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      updatePosition(false);
      startAutoplay();
    }
  });

  window.addEventListener("resize", applyCardWidths);

  // Init
  applyCardWidths();
  startAutoplay();
});




document.addEventListener('DOMContentLoaded', () => {
  const techStack = document.getElementById('tech-stack');
  if (!techStack) return;

  // Split text into letters
  const text = techStack.textContent;
  techStack.innerHTML = '';
  
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.className = 'letter font-rajdhani text-white text-5xl opacity-0';
    span.textContent = char;
    techStack.appendChild(span);
  });

  // Animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const letters = entry.target.querySelectorAll('.letter');
      
      if (entry.isIntersecting) {
        // When scrolling into view
        letters.forEach((letter, index) => {
          // First reset the animation
          letter.classList.remove('animate-fade-in', 'opacity-100');
          
          // Force reflow to reset animation
          void letter.offsetWidth;
          
          // Then start animation with delay
          setTimeout(() => {
            letter.classList.add('animate-fade-in', 'opacity-100');
          }, index * 50);
        });
      } else {
        // When scrolling out of view - reset letters
        letters.forEach(letter => {
          letter.classList.remove('animate-fade-in', 'opacity-100');
        });
      }
    });
  }, { threshold: 0.1 });

  observer.observe(techStack);
});

document.addEventListener('DOMContentLoaded', () => {
  const workprocess = document.getElementById('Work-process');
  if (!workprocess) return;

  // Split text into letters
  const text = workprocess.textContent;
  workprocess.innerHTML = '';
  
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.className = 'letter font-rajdhani text-white text-7xl opacity-0';
    span.textContent = char;
    workprocess.appendChild(span);
  });

  // Animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const letters = entry.target.querySelectorAll('.letter');
      
      if (entry.isIntersecting) {
        // When scrolling into view
        letters.forEach((letter, index) => {
          // First reset the animation
          letter.classList.remove('animate-fade-in', 'opacity-100');
          
          // Force reflow to reset animation
          void letter.offsetWidth;
          
          // Then start animation with delay
          setTimeout(() => {
            letter.classList.add('animate-fade-in', 'opacity-100');
          }, index * 50);
        });
      } else {
        // When scrolling out of view - reset letters
        letters.forEach(letter => {
          letter.classList.remove('animate-fade-in', 'opacity-100');
        });
      }
    });
  }, { threshold: 0.1 });

  observer.observe(workprocess);
});

requestAnimationFrame(() => {
  const heading = document.getElementById('scroll-heading');
  if (!heading) return;

  // Wrap every character in spans
  function wrapLettersInNode(node) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.nodeValue)) {
      const frag = document.createDocumentFragment();
      for (const ch of node.nodeValue) {
        const span = document.createElement('span');
        span.className = 'text-white'; // purge-safe
        span.style.display = 'inline-block';
        span.style.opacity = '0.6';
        span.style.transition = 'opacity 400ms ease-out';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        frag.appendChild(span);
      }
      node.replaceWith(frag);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
      Array.from(node.childNodes).forEach(wrapLettersInNode);
    }
  }

  Array.from(heading.childNodes).forEach(wrapLettersInNode);

  const letters = Array.from(heading.querySelectorAll('span'));
  let lastScrollY = window.scrollY;

  function updateLettersOnScroll() {
    const rect = heading.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const centerY = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(centerY - viewportHeight / 2);

    // Wider sweet spot
    const tolerance = viewportHeight * 0.2;

    let progress;
    if (distanceFromCenter < tolerance) {
      progress = 1;
    } else {
      progress = 1 - (distanceFromCenter - tolerance) / (viewportHeight / 2 - tolerance);
    }

    const clamped = Math.max(0, Math.min(1, progress));

    const scrollingDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;

    letters.forEach((letter, i) => {
      // Normalize index depending on scroll direction
      const index = scrollingDown ? i : letters.length - 1 - i;

      // Each letter gets its own "activation threshold"
      const threshold = index / letters.length;

      // Compare global progress to letter threshold
      const intensity = Math.min(1, Math.max(0, (clamped - threshold) * letters.length * 0.6));
      // ↑ multiplier (0.6 here) controls how gradually letters fade in/out

      letter.style.opacity = (0.6 + 0.4 * intensity).toString();
    });
  }

  window.addEventListener('scroll', updateLettersOnScroll);
  window.addEventListener('resize', updateLettersOnScroll);

  updateLettersOnScroll();
});

 const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;
let autoScroll;

// --- helpers ---
function getCardWidth() {
  const firstCard = carousel.children[0];
  return firstCard.offsetWidth + parseInt(getComputedStyle(carousel).gap || 0);
}

function getVisibleCards() {
  if (window.innerWidth < 640) return 1;   // mobile
  if (window.innerWidth < 1024) return 2;  // tablet
  return 3;                                // desktop
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function getMaxIndex() {
  return carousel.children.length - getVisibleCards();
}

// --- auto scroll logic ---
function startAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => {
    if (currentIndex < getMaxIndex()) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 2000);
}

// --- button handlers ---
nextBtn.addEventListener("click", () => {
  if (currentIndex < getMaxIndex()) {
    currentIndex++;
    updateCarousel();
  }
  startAutoScroll(); // reset timer
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
  startAutoScroll(); // reset timer
});

// Pause on hover
carousel.parentElement.addEventListener("mouseenter", () => clearInterval(autoScroll));
carousel.parentElement.addEventListener("mouseleave", startAutoScroll);

// Recalculate on resize
window.addEventListener("resize", () => {
  currentIndex = 0;
  updateCarousel();
});

// Initial setup
updateCarousel();
startAutoScroll();

setupCounter(document.querySelector('#counter'))
