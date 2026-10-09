import './style.css'
import javascriptLogo from './javascript.svg'
import pro from './assets/pro-pic.jpg'
import tailcss from './assets/tailwindcss.png'
import vitelogo from './assets/vite.svg'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

// Scroll-reveal styles only apply once we know JS can reveal the content again
if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready')
}

// Social profiles (shared by the side menu and the profile card)
const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/923034200040', icon: 'fa-whatsapp', border: 'border-green-500', color: '#0ecd11' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1D7iXn7z8z/', icon: 'fa-facebook-f', border: 'border-blue-700', color: '#1c56ba' },
  { name: 'Instagram', href: 'https://www.instagram.com/umer7667?cplk=MTFteWR5dG5uaGVw', icon: 'fa-instagram', border: 'border-yellow-500', color: '#de8f21' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/umer-tahir-304594180', icon: 'fa-linkedin-in', border: 'border-blue-800', color: '#335694' },
]

const socialLinksHTML = socialLinks.map(s => `
      <a href="${s.href}" target="_blank" rel="noopener noreferrer" title="${s.name}" aria-label="${s.name} (opens in a new tab)"
         class="social-link w-11 h-11 sm:w-10 sm:h-10 border ${s.border} rounded-full flex items-center justify-center hover:bg-white hover:border-white focus-visible:bg-white focus-visible:border-white">
        <i class="fa-brands ${s.icon} fa-lg" style="color: ${s.color};" aria-hidden="true"></i>
      </a>`).join('')

// Projects shown in the "My Projects" carousel
const projects = [
  { title: 'ParkInn Management System', icon: 'fa-square-parking', text: 'Reserve parking spots online, pay securely, and manage a fully digitized parking experience end-to-end.' },
  { title: 'Smooth Spine', icon: 'fa-spa', text: 'Sales funnel and Shopify store built for a neck massager brand, driving conversions from ad to checkout.' },
  { title: 'Olavita', icon: 'fa-pump-soap', text: 'Sales funnel and Shopify store built for a skin care brand, focused on clean design and fast checkout.' },
  { title: 'Reverse Engineer', icon: 'fa-flask', text: 'Sales funnel and Shopify store built for a skin care brand, engineered for high-intent traffic.' },
  { title: 'Crypto Profile', icon: 'fa-bitcoin', brand: true, text: 'Personal crypto profile site built for Rehan Zaffar, showcasing portfolio and market presence.' },
  { title: 'TryBello', icon: 'fa-bag-shopping', text: 'Shopify store and sales funnel built to turn browsing visitors into first-time buyers.' },
  { title: 'PurlStudios', icon: 'fa-shirt', text: 'Fully loaded apparel system built with live chat, order management, and a complete storefront.' },
]

// "Book A Call" marquee group (rendered twice for a seamless loop)
const marqueeGroup = (hidden) => `
      <div class="marquee__group"${hidden ? ' aria-hidden="true"' : ''}>
        ${Array.from({ length: 4 }, () => `<span class="marquee__item inline-flex items-center gap-3"><span class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></span>Book A Call</span>`).join('')}
      </div>`


document.querySelector('#app').innerHTML = `

<!-- Info Card Section -->
<div class="relative w-full">
<!-- Overlay -->
<div id="Overlay" 
     class="fixed inset-0 bg-white bg-opacity-20 hidden opacity-0 z-20 transition-opacity duration-500 ease-in-out">
</div>

<!-- Side Bar Menu Starts here-->
<div id="SideBar" inert aria-hidden="true" aria-label="Site menu" class=" fixed top-0 right-0 h-full  z-30 w-72 rounded-tl-2xl rounded-bl-2xl bg-black transform translate-x-full transition-transform duration-500 ease-in-out">
<!-- Heading -->
<div class="mt-12 ml-10 flex flex-wrap justify-between pr-8">
<span class="relative pl-4 text-white text-opacity-50 font-rajdhani text-2xl sm:text-2xl before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-600 before:absolute before:left-0 before:top-[15px] before:-translate-y-1/2">
Menu
</span>
<button id="CloseBtn" type="button" aria-label="Close menu" class="menu-close rounded-full">
<i class="fa-solid fa-xmark text-2xl" style="color: #ffffff;" aria-hidden="true"></i>
</button>
</div>
<!-- Menu Items -->
<ul class="menu-list mt-12 ml-10 font-rajdhani text-white text-opacity-50 text-sm space-y-6">
<li id="HomeBtn" class="hover:text-white hover:cursor-pointer"> <i class="fa-solid fa-house"></i> <span class="inline-block pl-2"> Home </span></li>
<li id="ExpBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-briefcase"></i> <span class="inline-block pl-2">Experience</span></li>
<li id="ServicesBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-brands fa-servicestack"></i> <span class="inline-block pl-2">Services</span></li>
<li id="AboutBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-user"></i> <span class="inline-block pl-2">About</span></li>
<li id="ProjectsBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-diagram-project"></i> <span class="inline-block pl-2">Projects</span></li>
<li id="PriceBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-solid fa-tags"></i> <span class="inline-block pl-2">Pricing</span></li>
<li id="ContactBtn" class="hover:text-white hover:cursor-pointer"><i class="fa-regular fa-envelope"></i><span class="inline-block pl-2">Contact</span></li>

</ul>

<div class="ml-10 mt-10">
<span class="relative pl-4 text-white text-opacity-50 font-rajdhani text-2xl sm:text-2xl before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-600 before:absolute before:left-0 before:top-[15px] before:-translate-y-1/2">
Social Networks
</span>

<div class="flex mt-4 space-x-2" aria-label="Social networks">
${socialLinksHTML}
    </div>

</div>

<!-- Menu Items Ends Here -->




</div>
<!-- Side Bar Menu Ends here -->

<button id="OpenBtn" type="button" aria-label="Open menu" aria-controls="SideBar" aria-expanded="false" class=" group fixed z-20 top-4 right-5 sm:left-[80%] sm:top-10 sm:right-0 ">
<i class="fa-solid fa-bars  text-3xl sm:text-3xl  text-orange-600 hover:cursor-pointer transform transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" aria-hidden="true"></i> 
</button>
</div>
<!-- relative w-full wrapper (Overlay/SideBar/OpenBtn) closed here -->

<!-- Page Layout: Sticky Profile Sidebar (left) + Main Content (right) -->
<div class="w-[90%] max-w-[1400px] mx-auto mt-8 flex flex-col lg:flex-row lg:items-start gap-8">

<!-- Sticky Profile Sidebar -->
<aside id="ProfileSidebar" class="w-full lg:w-[360px] lg:flex-shrink-0 lg:sticky lg:top-2 lg:self-start">
<div id="info-card" class="w-full h-auto bg-lightblack mx-auto rounded-3xl shadow-inner overflow-y-auto hide-scrollbar" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
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
    <img src="${pro}" alt="Profile Picture" class="w-56 sm:w-26 h-26 object-cover rounded-2xl mx-auto mt-12 flex-wrap" />
    <div class="text-center mt-4 mx-auto">
      <p class="text-white text-opacity-85 font-rajdhani mt-8 text-xl">umertahir141@gmail.com</p>
      <p class="text-white text-opacity-30 font-rajdhani mt-2 text-md">Based in Lahore, Pakistan</p>
    </div>

    <div class="flex justify-center mt-8 mx-auto space-x-4" aria-label="Social networks">
${socialLinksHTML}
    </div>

    <div class="hover:cursor-pointer Contact-BTN group mx-auto mt-8 mb-6 flex items-center border border-white border-opacity-20 rounded-full px-4 py-2 w-[80%] flex-wrap justify-between">
      <span class="text-xl sm:text-3xl text-white font-rajdhani group-hover:text-orange-600 transition-colors duration-300">Get Started</span>
      <span class=" w-14 h-14 border border-white bg-white rounded-full flex items-center justify-center cursor-pointer">
        <i class=" fa-solid fa-arrow-up-right-from-square sm:text-xl text-lg text-black group-hover:text-orange-600 transition-colors duration-300"></i>
      </span>
    </div>
  </div>
</div> <!-- ✅ Properly closed info-card -->
</aside>
<!-- Sticky Profile Sidebar Ends -->

<!-- Rest of Portfolio -->
<div class="w-full max-w-[100%] mx-auto lg:mx-0 flex-1 min-w-0">

  <!-- Intro Section -->

  <div id="intro" class="mt-10 lg:mt-0">
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

    <div class="w-full h-0"></div> <!-- Acts like a <br> in flex -->

    <span class="font-rajdhani text-white bg-buttoncol rounded-2xl px-4 py-2">PostgreSQL</span>
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
      <div class="flex sm:mt-20 mt-14 justify-end mr-6">
      <span class="counter text-white font-rajdhani sm:text-8xl md:text-8xl text-6xl" data-target="15">0</span>
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

  <div class="group reveal">  
  <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">PurlStudios</span>
    
    <div class="flex mt-2 justify-between items-start gap-3">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Lead Full-Stack Developer</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol shrink-0 whitespace-nowrap group-hover:bg-orange-600 transition-colors duration-300">Present</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>
           
   <!-- The 2nd Company -->

    <div class="group mt-6 reveal">  
    <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Zahaco</span>
    
    <div class="flex mt-2 justify-between items-start gap-3">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Ecommerce Developer &mdash; Shopify, Funnels</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol shrink-0 whitespace-nowrap group-hover:bg-orange-600 transition-colors duration-300">2025-2026</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>

    <!-- The 3rd Company -->

    <div class="group mt-6 reveal">  
    <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Csoft Systems</span>
    
    <div class="flex mt-2 justify-between items-start gap-3">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Full-Stack Developer</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol shrink-0 whitespace-nowrap group-hover:bg-orange-600 transition-colors duration-300">2025</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>

    <!-- The 4th Company -->

    <div class="group mt-6 reveal">  
    <span class="sm:text-xl text-lg text-white text-opacity-60 font-rajdhani">Technisia</span>
    
    <div class="flex mt-2 justify-between items-start gap-3">
    <span class="text-white font-rajdhani sm:text-2xl text-xl group-hover:text-orange-600 transition-colors duration-300">Front-End Developer</span>
    <span class="text-white font-rajdhani sm:text-lg text-sm rounded-2xl py-1 px-6 bg-buttoncol shrink-0 whitespace-nowrap group-hover:bg-orange-600 transition-colors duration-300">2022-2023</span>

    </div>
    <div class="bg-buttoncol border border-buttoncol  mt-4 mb-2 group-hover:border-orange-600 transition-colors duration-300"></div>
    </div>



   </div>
  
   <!-- MY SERVICES CARD Section -->
  
   <div id="Myservices" class="w-full max-w-[880px] h-auto bg-lightblack mx-auto mt-16 rounded-3xl shadow-inner pb-16" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
    <!-- Heading -->
   <div class=" flex flex-col flex-wrap " >
    <span class=" mt-20 ml-16 relative pl-4 text-xl text-white text-opacity-60  font-rajdhani before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">My Services</span>
   </div> 

    <!-- 1st Service -->
    
    <div class="flex flex-wrap mt-16 sm:gap-12 gap-4 reveal">
    
    <div class="sm:ml-16 mt-4 ml-8 sm:mt-2">
    <i class="fa-solid fa-code sm:text-xl sm:py-4 sm:px-6 text-xl py-2 px-4 bg-gradient-to-br from-orange-950 via-orange-600 to-orange-950  rounded-lg" style="color: #f7f7f7;"></i>
    </div>
    <div class="sm:mt-0 mt-3">
    <p class="text-white font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Web <br> Development<span class="sm:text-lg text-sm absolute ">[01]</span></p>
    <ul class="list-disc mt-12 sm:ml-4 -ml-16">
    <li class="text-white text-opacity-60 font-rajdhani mt-4 sm:text-lg text-sm">Responsive Design</li>
    <li class="text-white text-opacity-60 font-rajdhani mt-2 sm:text-lg text-sm">E-commerce Solutions</li>
    <li class="text-white text-opacity-60 font-rajdhani mt-2 sm:text-lg text-sm">Content Management Systems</li>
    </ul>
    </div>
    

    </div>
    <!-- 2nd Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Web Deployment<span class="sm:text-lg text-sm absolute ">[02]</span></p>
    </div>
    <!-- 3rd Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Building Database<span class="sm:text-lg text-sm absolute ">[03]</span></p>
    </div>
    <!-- 4th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Cloudnary Storage<span class="sm:text-lg text-sm absolute ">[04]</span></p>
    </div>
    <!-- 5th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">CloudFlare R2<span class="sm:text-lg text-sm absolute ">[05]</span></p>
    </div>
    <!-- 6th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Docker<span class="sm:text-lg text-sm absolute ">[06]</span></p>
    </div>
    <!-- 7th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">WebSockets<span class="sm:text-lg text-sm absolute ">[07]</span></p>
    </div>
    <!-- 8th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Shopify<span class="sm:text-lg text-sm absolute ">[08]</span></p>
    </div>
    <!-- 9th Service -->
    <div class="sm:ml-16 mt-8 ml-8 sm:mt-12 reveal">
    <p class="text-white text-opacity-60 font-rajdhani md:text-7xl lg:text-5xl xl:text-7xl sm:text-5xl text-xl">Ecom Funnels<span class="sm:text-lg text-sm absolute ">[09]</span></p>
    </div>

    <!-- Card Footer -->
    <div class="sm:ml-16 mt-16 ml-8 sm:mt-20 justify-between flex flex-wrap gap-2 sm:gap-0">
    <div class="flex flex-wrap">
    <i class="fa-solid fa-globe fa-sm mt-3" style="color: #f7f7f7;"></i>
    <span class="ml-2 font-rajdhani text-white text-opacity-60">Available to <span class="font-rajdhani text-white"> World-Wide </span> </span>
    </div>
    
    <div class="Contact-BTN flex flex-wrap mr-16 group hover:cursor-pointer ">
    <span class="font-rajdhani mr-2 group-hover:text-orange-600 transition-colors duration-300 text-xl text-white">Contact Me</span>
    <i class="fa-solid fa-arrow-up-right-from-square fa-lg mt-3 text-white group-hover:text-orange-600 transition-colors duration-300"></i>
    </div>

    </div>

  </div>

  <!-- ABOUT ME Section -->

  <div id="About-me" class="mt-16 w-[90%] max-w-[880px] mx-auto">
  <!-- Heading -->
  
  <div class="flex flex-wrap gap-5 custom:gap-x-40 lg:gap-x-5 xl:gap-x-40 reveal">
  
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

  <div class="flex flex-wrap mt-10 custom:ml-64 lg:ml-0 xl:ml-64 ml-0 reveal">
  <p class="text-white font-rajdhani text-opacity-60">Every website has a starting point, and for truly impactful digital experiences,<br class="hidden custom:inline lg:hidden 2xl:inline"/> it’s the vision that drives 
  the development process. It’s the code, structure,<br class="hidden custom:inline lg:hidden 2xl:inline"/> and functionality working together to serve that vision. We believe that
   understanding the purpose is paramount—because great development <br class="hidden custom:inline lg:hidden 2xl:inline"/> is more than just writing code; it’s crafting experiences that connect, engage, and inspire.</p>
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
  <button id="prevBtn" type="button" aria-label="Previous technology" class="carousel-btn hover:text-orange-600 focus-visible:text-orange-600 text-2xl  text-white px-3 py-2 rounded-full z-10">
    &#10094;
  </button>
  <button id="nextBtn" type="button" aria-label="Next technology" class="carousel-btn hover:text-orange-600 focus-visible:text-orange-600 text-2xl  text-white px-3 py-2 rounded-full z-10">
    &#10095;
  </button>
  </div>
  </div>

  <!-- Viewport (clips to 3 cards) -->
  <div class="overflow-hidden w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto touch-pan-y">
  <!-- Carousel wrapper -->
  <div id="carousel" class=" flex transition-transform duration-500 ease-in-out gap-2 md:gap-6 no-scrollbar">
  <!-- 1st HTML Card -->
  <div class="bg-buttoncol flex-shrink-0 w-full sm:w-[calc(50%-4px)] md:w-60 mt-10 rounded-2xl shadow-inner h-52 tech-card  text-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">HTML</span>
  <i class="fa-brands fa-html5 text-7xl mt-4" style="color: #045bf1;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Leading tool for web structure</span>
  </div>
  <!-- 2nd Tailwindcss Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card justify-center" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Tailwind CSS</span>
  <img src="${tailcss}" alt="Tailwind CSS Logo" class="w-20 h-20 mx-auto mt-2">
  <span class="text-white font-rajdhani text-sm mt-2 block">Utility-first CSS framework</span>
  </div>
  <!-- 3rd JavaScript Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">JavaScript</span>
  <i class="fa-brands fa-square-js text-7xl mt-4" style="color: #ecd904;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Leading web development language</span>
  </div>
  <!-- 4th React Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">React.js</span>
  <i class="fa-brands fa-react text-7xl mt-4" style="color: #619bff;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Library for building user interfaces</span>
  </div>
  <!-- 5th Vite Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Vite.js</span>
  <img src="${vitelogo}" alt="Vite Logo" class="w-20 h-20 mx-auto mt-2">
  <span class="text-white font-rajdhani text-sm mt-2 block">Next Generation Frontend Tooling</span>
  </div>
  <!-- 6th MySQL Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">MySQL</span>
  <i class="fa-solid fa-database text-7xl mt-4" style="color: #ffffff;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Relational database management</span>
  </div>
  <!-- 7th PHP Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">PHP</span>
  <i class="fa-brands fa-php text-7xl mt-4" style="color: #B197FC;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Server-side scripting language</span>
  </div>
  <!-- 8th Laravel Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">Laravel</span>
  <i class="fa-brands fa-laravel text-7xl mt-4" style="color: #ff2934;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">PHP framework for web artisans</span>
  </div>
  <!-- 9th PostgreSQL Card -->
  <div class="bg-buttoncol mt-10 rounded-2xl shadow-inner h-52 flex-shrink-0  w-full sm:w-[calc(50%-4px)] md:w-60 text-center tech-card" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <span class="text-white font-rajdhani text-3xl font-semibold justify-center mt-8 block">PostgreSQL</span>
  <i class="fa-solid fa-database text-7xl mt-4" style="color: #4169E1;"></i>
  <span class="text-white font-rajdhani text-sm mt-2 block">Advanced relational database</span>
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
  <div id="work-process-viewport" class="overflow-hidden w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto touch-pan-y reveal" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Work process steps (use arrow keys or swipe)">

  <!-- Carousel wrapper -->

  <div id="carousel-2" class=" flex transition-transform duration-700 ease-in-out gap-2 md:gap-6 no-scrollbar">
  
  <!-- 1st step Card -->
  <div class="wp-card bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] min-h-80 pb-8 flex-shrink-0  w-full " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap sm:flex-nowrap">
  
  <div class="mt-10 sm:mt-16 text-center w-full sm:w-auto sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 1</span>
  <h1 class="text-white font-rajdhani text-2xl sm:text-4xl mt-12  sm:mt-16 sm:ml-10">Gather Requirements<br/> and Plan</h1>
  <span class="pl-6 sm:pl-0 text-left block text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Create a requirements document<br/> and confirm with <br/> the client.</span>
 </div>

 <div class="wp-icon shrink-0 sm:ml-16 sm:mt-16 sm:block hidden" aria-hidden="true">
 <i class="fa-solid fa-magnifying-glass hidden sm:block sm:text-6xl rounded-full sm:px-6 sm:py-6 sm:ml-10  bg-black " style="color: #e88f11;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 1st card ends here -->

 <!-- 2nd step card Starts here -->

 <div class="wp-card bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] min-h-80 pb-8 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap sm:flex-nowrap">
  
  <div class="mt-10 sm:mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 2</span>
  <h1 class="text-white font-rajdhani text-2xl sm:text-4xl mt-12 sm:mt-16 sm:ml-10">Set Up the Environment <br/> and Build the Front End</h1>
  <span class="pl-6 sm:pl-0 block text-left  text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Ensure responsiveness and <br/> accessibility.</span>
 </div>

 <div class="wp-icon shrink-0 ml-16 mt-16 hidden sm:block" aria-hidden="true">
 <i class="fa-solid fa-seedling hidden sm:block text-6xl rounded-full bg-black px-6 py-6" style="color: #d98a02;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 2nd card ends here -->

 <!-- 3rd step card Starts here -->
 <div class="wp-card bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] min-h-80 pb-8 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap sm:flex-nowrap">
  
  <div class="mt-10 sm:mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 3</span>
  <h1 class="text-white font-rajdhani text-2xl mt-12 sm:text-4xl sm:mt-16 sm:ml-10">Develop the Back End <br/> and Database</h1>
  <span class="pl-6 sm:pl-0 text-left block text-white font-rajdhani text-sm mt-10 sm:mt-4 sm:ml-10">Create APIs for data flow<br/> between front end<br/> and back end.</span>
 </div>

 <div class="wp-icon shrink-0 ml-16 mt-16 sm:block hidden" aria-hidden="true">
 <i class="fa-solid fa-server hidden sm:block ml-8 text-6xl rounded-full bg-black px-6 py-6" style="color: #d98a02;"></i>
 </div>
 
 </div>
 <!-- card content ends here -->
 </div>
 <!-- 3rd card ends here -->

 <!-- 4th step card Starts here -->
 
 <div class="wp-card bg-buttoncol mt-10 rounded-2xl shadow-inner sm:w-[590px] min-h-80 pb-8 flex-shrink-0  w-full  " style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
  <div class="flex flex-wrap sm:flex-nowrap">
  
  <div class="mt-10 sm:mt-16 w-full sm:w-auto text-center sm:text-left">
  <span class="relative text-white font-rajdhani text-sm  sm:ml-10 bg-black bg-opacity-50 px-6 py-2 rounded-3xl shadow-inner font-semibold before:content-[''] before:opacity-40 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:left-2 before:top-[16px] before:-translate-y-1/2" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">Step 4</span>
  <h1 class="text-white font-rajdhani text-2xl mt-12 sm:text-4xl sm:mt-16 sm:ml-10">Test, Deploy, and </br> Deliver</h1>
  <span class="text-left pl-6 sm:pl-0 block text-white font-rajdhani text-sm mt-10 sm:mt-6 sm:ml-10">Perform unit and <br/> integration testing; fix bugs.</span>
 </div>

 <div class="wp-icon shrink-0 ml-16 mt-16 hidden sm:block" aria-hidden="true">
 <i class="fa-solid fa-flask-vial hidden sm:block ml-24 text-6xl rounded-full bg-black px-4 py-6" style="color: #d98a02;"></i>
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

 <!-- My Projects Section -->
 <div id="My-Projects" class="mt-16 w-[90%] max-w-[880px] mx-auto">
  <!-- Heading -->
  <div class="flex flex-wrap justify-between items-center gap-y-4 reveal">
    <span class="font-rajdhani text-white text-5xl sm:text-7xl font-medium">My Projects</span>
    <div class="buttonwrapper flex gap-2">
    <button id="projPrevBtn" type="button" aria-label="Previous projects" aria-controls="projects-carousel" class="carousel-btn hover:text-orange-600 focus-visible:text-orange-600 hover:border-orange-600 focus-visible:border-orange-600 text-2xl text-white px-3 py-2 rounded-full z-10 border border-white/20">
      &#10094;
    </button>
    <button id="projNextBtn" type="button" aria-label="Next projects" aria-controls="projects-carousel" class="carousel-btn hover:text-orange-600 focus-visible:text-orange-600 hover:border-orange-600 focus-visible:border-orange-600 text-2xl text-white px-3 py-2 rounded-full z-10 border border-white/20">
      &#10095;
    </button>
    </div>
  </div>

  <!-- Projects Slider Viewport: every card is its own flex item; JS sets how many fit per view -->
  <div id="projects-viewport" class="overflow-hidden w-full mt-8 pt-2 pb-4 touch-pan-y" role="region" aria-roledescription="carousel" aria-label="Projects">
    <div id="projects-carousel" class="projects-track flex">
${projects.map((p, i) => `
        <article class="project-card bg-buttoncol rounded-2xl shadow-inner overflow-hidden flex flex-col" aria-label="Project ${i + 1} of ${projects.length}: ${p.title}">
          <div class="project-media h-40 w-full bg-gradient-to-br from-orange-950 via-orange-600 to-orange-950 flex items-center justify-center overflow-hidden">
            <i class="fa-${p.brand ? 'brands' : 'solid'} ${p.icon} text-6xl" style="color:#f7f7f7;" aria-hidden="true"></i>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-white font-rajdhani text-2xl font-semibold">${p.title}</h3>
            <p class="text-white text-opacity-60 font-rajdhani text-sm mt-3">${p.text}</p>
          </div>
        </article>`).join('')}
    </div>
  </div>
  <!-- Projects Slider Viewport ends -->

  <!-- Dots -->
  <div id="projDots" class="flex justify-center gap-2 mt-4" role="group" aria-label="Choose project slide"></div>

 </div>
 <!-- My Projects Section ends here -->

 <!-- My PRICING Section -->
 <div id="My-pricing" class="w-[90%] max-w-[880px] mx-auto mt-16">

 <!-- Heading -->
 <div class="mt-4">
 <h1 class="font-rajdhani text-white text-7xl font-medium reveal">My Pricing</h1>

 <!-- Packages -->
 <div class="flex flex-wrap mt-8 px-4 py-4 gap-2 rounded-full bg-lightblack w-fit reveal">
 <span class="text-xl bg-lightbg rounded-full px-4 py-2 font-rajdhani text-white">Standard Plan</span>
 </div>

 </div>
 <!-- Heading ends Here-->

 <!-- Broshure -->

 <div class="w-full min-h-[830px] sm:min-h-[680px] bg-lightblack mt-12 shadow-inner rounded-2xl px-6 pt-6 pb-8 reveal" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
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
 <div class="Contact-BTN hover:cursor-pointer flex flex-wrap ml-2 group mt-14 h-14 pl-4 text-center items-center justify-center rounded-3xl bg-white w-fit gap-4 ">
    <span class="font-rajdhani group-hover:text-orange-600 transition-colors duration-300 text-lg text-black mt-0">Get Started</span>
    <div class="rounded-full mr-2 px-[12px] py-[10px] h-fit   bg-black">
    <i class="fa-solid fa-arrow-up-right-from-square fa-lg text-white group-hover:text-orange-600 transition-colors duration-300"></i>
    </div>

    </div>

 </div>
 <!-- Broshure ends here -->
 <!-- Quote Button -->
 <div class="Contact-BTN reveal hover:cursor-pointer flex flex-wrap group w-full h-20 bg-lightblack mt-4 shadow-inner rounded-2xl pl-4 sm:pl-6 justify-between" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);" >
 <span class="font-rajdhani text-2xl sm:text-4xl text-white mt-6 group-hover:text-orange-600 transition-colors duration-300">Custom Quote</span>
 <div class="rounded-xl h-fit mt-2 px-6 py-4 bg-lightbg mr-2 border transition-colors duration-300 group-hover:border-orange-600 group-focus-visible:border-orange-600">
 <i class="fa-solid fa-arrow-up-right-from-square  text-2xl text-white group-hover:text-orange-600 transition-colors duration-300"></i>
 </div>
 </div>
 <!-- Quote button ends here -->
 
 </div>
 <!-- My pricing ends here -->
 </div>


<!-- Footer Starts here -->
 <div id="Footer" class="flex items-center justify-center mt-16 py-8 px-6 sm:px-12  h-[500px] mx-auto reveal">
<!-- Footer Content -->
<div class="Contact-BTN book-call hover:cursor-pointer text-center mx-auto rounded-full py-4 px-2 sm:py-14 sm:px-2 w-full max-w-[600px] bg-lightbg bg-opacity-40" aria-label="Book a call">

    <!-- Seamless marquee: two identical groups, the track moves exactly one group width per loop -->
    <div class="marquee w-full px-8 font-rajdhani text-white text-4xl sm:text-7xl font-medium">
      <span class="sr-only">Book A Call</span>
      <div class="marquee__viewport">
        <div class="marquee__track">${marqueeGroup(true)}${marqueeGroup(true)}
        </div>
      </div>
    </div>
    
  
  </div>
</div>
<!-- Footer Ends -->

 </div>
 <!-- Main Content Column Ends -->

 </div>
 <!-- Page Layout Ends -->

  
`

document.querySelector('#My-pricing').insertAdjacentHTML(
  "afterend",
  ` <!-- Contact form Starts here -->
 <div id="Contact-Form" class="mt-28 py-4 px-6 sm:py-8 sm:px-12 bg-lightblack w-[90%] rounded-2xl max-w-[880px] min-h-[1200px] sm:min-h-[1050px] mx-auto shadow-inner reveal" style="box-shadow: inset 0 0 10px rgba(255, 255, 255,0.3);">
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
`);

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

/* =========================================================================
   Interaction layer
   ========================================================================= */

const isReduced = () => prefersReducedMotion.matches
const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: isReduced() ? 'auto' : 'smooth', block: 'start' })

// Let div/li "buttons" work with the keyboard too
function makeKeyboardClickable(el) {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0')
  if (!el.hasAttribute('role')) el.setAttribute('role', 'button')
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      el.click()
    }
  })
}

// Run a callback whenever an element enters/leaves the viewport
function onVisibilityChange(el, cb, options = {}) {
  const io = new IntersectionObserver(([entry]) => cb(entry.isIntersecting), options)
  io.observe(el)
  return io
}

// Horizontal swipe / drag for carousel viewports.
// Vertical page scrolling stays native (viewports use touch-action: pan-y).
function enableSwipe(el, { onStart, onMove, onEnd, threshold = 40 }) {
  let startX = 0
  let startY = 0
  let dx = 0
  let pointerId = null
  let tracking = false
  let dragging = false

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    tracking = true
    dragging = false
    dx = 0
    startX = e.clientX
    startY = e.clientY
    pointerId = e.pointerId
  })

  el.addEventListener('pointermove', (e) => {
    if (!tracking || e.pointerId !== pointerId) return
    const mx = e.clientX - startX
    const my = e.clientY - startY
    if (!dragging) {
      if (Math.abs(mx) < 8 && Math.abs(my) < 8) return
      if (Math.abs(my) > Math.abs(mx)) {
        tracking = false // vertical gesture: let the page scroll
        return
      }
      dragging = true
      try { el.setPointerCapture(pointerId) } catch { /* pointer already released */ }
      onStart?.()
    }
    dx = mx
    onMove?.(dx)
  })

  const finish = (e) => {
    if (!tracking || e.pointerId !== pointerId) return
    tracking = false
    if (!dragging) return
    dragging = false
    onEnd?.(Math.abs(dx) > threshold ? (dx < 0 ? 1 : -1) : 0)
  }
  el.addEventListener('pointerup', finish)
  el.addEventListener('pointercancel', finish)
  el.addEventListener('dragstart', (e) => e.preventDefault())
}

/* ---------- Side menu ---------- */
function initSideMenu() {
  const sideBar = document.getElementById('SideBar')
  const overlay = document.getElementById('Overlay')
  const openBtn = document.getElementById('OpenBtn')
  const closeBtn = document.getElementById('CloseBtn')
  if (!sideBar || !overlay || !openBtn || !closeBtn) return

  let hideOverlayTimer
  const isOpen = () => sideBar.classList.contains('translate-x-0')

  function openSidebar() {
    clearTimeout(hideOverlayTimer)
    sideBar.classList.remove('translate-x-full')
    sideBar.classList.add('translate-x-0')
    sideBar.removeAttribute('inert')
    sideBar.setAttribute('aria-hidden', 'false')
    overlay.classList.remove('hidden')
    requestAnimationFrame(() => overlay.classList.remove('opacity-0'))
    openBtn.classList.add('hidden')
    openBtn.setAttribute('aria-expanded', 'true')
    closeBtn.focus({ preventScroll: true })
  }

  function closeSidebar({ restoreFocus = false } = {}) {
    sideBar.classList.remove('translate-x-0')
    sideBar.classList.add('translate-x-full')
    sideBar.setAttribute('inert', '')
    sideBar.setAttribute('aria-hidden', 'true')
    overlay.classList.add('opacity-0')
    hideOverlayTimer = setTimeout(() => overlay.classList.add('hidden'), isReduced() ? 0 : 500)
    openBtn.classList.remove('hidden')
    openBtn.setAttribute('aria-expanded', 'false')
    if (restoreFocus) openBtn.focus({ preventScroll: true })
  }

  openBtn.addEventListener('click', openSidebar)
  closeBtn.addEventListener('click', () => closeSidebar({ restoreFocus: true }))
  overlay.addEventListener('click', () => closeSidebar())
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeSidebar({ restoreFocus: true })
  })

  const targets = {
    HomeBtn: 'intro',
    ExpBtn: 'Experience',
    ServicesBtn: 'Myservices',
    AboutBtn: 'About-me',
    ProjectsBtn: 'My-Projects',
    PriceBtn: 'My-pricing',
    ContactBtn: 'Contact-Form',
  }
  Object.entries(targets).forEach(([btnId, sectionId]) => {
    const btn = document.getElementById(btnId)
    if (!btn) return
    makeKeyboardClickable(btn)
    btn.addEventListener('click', () => {
      closeSidebar()
      scrollToSection(sectionId)
    })
  })
}

/* ---------- "Contact me" style buttons ---------- */
function initContactButtons() {
  document.querySelectorAll('.Contact-BTN').forEach((btn) => {
    makeKeyboardClickable(btn)
    btn.addEventListener('click', () => scrollToSection('Contact-Form'))
  })
}

/* ---------- Stat counters (start when visible) ---------- */
function initCounters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const target = Number(counter.dataset.target) || 0
    if (isReduced()) {
      counter.textContent = target
      return
    }
    const io = onVisibilityChange(counter, (visible) => {
      if (!visible) return
      io.disconnect()
      const duration = 2000
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        counter.textContent = Math.round(target * eased)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
  })
}

/* ---------- Existing entrance animations (data-animate) ---------- */
function initDataAnimate() {
  const elements = document.querySelectorAll('[data-animate]')
  if (isReduced()) {
    elements.forEach((el) => el.classList.remove('opacity-0'))
    return
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.remove('opacity-0')
      entry.target.classList.add('animate-' + entry.target.dataset.animate)
      obs.unobserve(entry.target) // animate once
    })
  }, { threshold: 0.2 })
  elements.forEach((el) => observer.observe(el))
}

/* ---------- Section reveal (animates once, so no flicker when scrolling back) ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-stagger')
  if (!document.documentElement.classList.contains('reveal-ready')) {
    items.forEach((el) => el.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver((entries) => {
    let batch = 0
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target
      // small stagger for items that enter together
      if (el.classList.contains('reveal')) {
        el.style.transitionDelay = `${Math.min(batch, 5) * 80}ms`
        setTimeout(() => { el.style.transitionDelay = '' }, 1200)
        batch++
      }
      el.classList.add('is-visible')
      io.unobserve(el)
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })
  items.forEach((el) => io.observe(el))
}

/* ---------- Letter-by-letter headings ("Tech Stack", "Work Process") ---------- */
function initLetterHeading(id, sizeClass) {
  const heading = document.getElementById(id)
  if (!heading) return
  const text = heading.textContent
  heading.textContent = ''

  const label = document.createElement('span')
  label.className = 'sr-only'
  label.textContent = text
  heading.appendChild(label)

  const letters = [...text].map((char) => {
    const span = document.createElement('span')
    span.className = `letter font-rajdhani text-white ${sizeClass} opacity-0`
    span.setAttribute('aria-hidden', 'true')
    span.textContent = char
    heading.appendChild(span)
    return span
  })

  if (isReduced()) {
    letters.forEach((l) => l.classList.replace('opacity-0', 'opacity-100'))
    return
  }
  const io = onVisibilityChange(heading, (visible) => {
    if (!visible) return
    io.disconnect() // once: avoids re-triggering/flicker on scroll up & down
    letters.forEach((letter, i) => {
      setTimeout(() => letter.classList.replace('opacity-0', 'opacity-100'), i * 50)
    })
  }, { threshold: 0.1 })
}

/* ---------- Experience heading: letters brighten as it nears the viewport centre ---------- */
function initScrollHeading() {
  const heading = document.getElementById('scroll-heading')
  if (!heading) return

  const letters = []
  // Wrap words (kept together) and their letters, so words never break mid-word on small screens
  const wrap = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment()
      node.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part))
          return
        }
        const word = document.createElement('span')
        word.className = 'scroll-word'
        for (const ch of part) {
          const span = document.createElement('span')
          span.className = 'scroll-letter text-white'
          span.textContent = ch
          word.appendChild(span)
          letters.push(span)
        }
        frag.appendChild(word)
      })
      node.replaceWith(frag)
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
      Array.from(node.childNodes).forEach(wrap)
    }
  }
  Array.from(heading.childNodes).forEach(wrap)

  let lastScrollY = window.scrollY
  let ticking = false
  let active = false

  function update() {
    ticking = false
    const rect = heading.getBoundingClientRect()
    const vh = window.innerHeight
    const distance = Math.abs(rect.top + rect.height / 2 - vh / 2)
    const tolerance = vh * 0.2
    const progress = distance < tolerance ? 1 : 1 - (distance - tolerance) / (vh / 2 - tolerance)
    const clamped = Math.max(0, Math.min(1, progress))
    const scrollingDown = window.scrollY > lastScrollY
    lastScrollY = window.scrollY

    letters.forEach((letter, i) => {
      const index = scrollingDown ? i : letters.length - 1 - i
      const threshold = index / letters.length
      const intensity = Math.min(1, Math.max(0, (clamped - threshold) * letters.length * 0.6))
      letter.style.opacity = (0.6 + 0.4 * intensity).toFixed(3)
    })
  }

  const requestUpdate = () => {
    if (!active || ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  // Only listen while the heading is on screen
  onVisibilityChange(heading, (visible) => {
    active = visible
    if (visible) {
      window.addEventListener('scroll', requestUpdate, { passive: true })
      requestUpdate()
    } else {
      window.removeEventListener('scroll', requestUpdate)
    }
  })
  window.addEventListener('resize', requestUpdate, { passive: true })
}

/* ---------- Tech Stack carousel ---------- */
function initTechStack() {
  const track = document.getElementById('carousel')
  const nextBtn = document.getElementById('nextBtn')
  const prevBtn = document.getElementById('prevBtn')
  if (!track || !nextBtn || !prevBtn) return
  const viewport = track.parentElement
  const cards = Array.from(track.children)
  track.classList.add('reveal-stagger')
  cards.forEach((card, i) => card.style.setProperty('--stagger', `${Math.min(i, 4) * 80}ms`))

  let index = 0
  let timer = null
  let inView = false
  let hovering = false
  let dragging = false

  function metrics() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = cards[0].offsetWidth + gap
    const max = Math.max(0, track.scrollWidth - viewport.clientWidth)
    return { step, max, maxIndex: step ? Math.ceil(max / step - 0.01) : 0 }
  }

  function render(animate = true, offset = 0) {
    const { step, max, maxIndex } = metrics()
    index = Math.max(0, Math.min(index, maxIndex))
    const x = Math.min(index * step, max) // last position lines the final card up with the edge
    track.style.transition = animate && !isReduced() ? '' : 'none'
    track.style.transform = `translate3d(${-x + offset}px, 0, 0)`
  }

  function updateAutoplay() {
    const run = inView && !hovering && !dragging && !document.hidden && !isReduced()
    if (run && !timer) {
      timer = setInterval(() => {
        index = index < metrics().maxIndex ? index + 1 : 0
        render()
      }, 2000)
    } else if (!run && timer) {
      clearInterval(timer)
      timer = null
    }
  }
  const restartAutoplay = () => {
    clearInterval(timer)
    timer = null
    updateAutoplay()
  }

  nextBtn.addEventListener('click', () => {
    if (index < metrics().maxIndex) index++
    render()
    restartAutoplay()
  })
  prevBtn.addEventListener('click', () => {
    if (index > 0) index--
    render()
    restartAutoplay()
  })

  enableSwipe(viewport, {
    onStart: () => { dragging = true; updateAutoplay(); render(false) },
    onMove: (dx) => render(false, dx),
    onEnd: (dir) => {
      dragging = false
      index += dir
      render()
      updateAutoplay()
    },
  })

  viewport.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovering = true; updateAutoplay() } })
  viewport.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hovering = false; updateAutoplay() } })
  onVisibilityChange(viewport, (v) => { inView = v; updateAutoplay() })
  document.addEventListener('visibilitychange', updateAutoplay)

  let raf
  new ResizeObserver(() => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => render(false))
  }).observe(viewport)

  render(false)
}

/* ---------- Work Process carousel (infinite loop) ---------- */
function initWorkProcess() {
  const track = document.getElementById('carousel-2')
  const viewport = document.getElementById('work-process-viewport')
  if (!track || !viewport) return

  const autoplayDelay = 3000
  const transitionMs = 1000
  const originals = Array.from(track.children)
  const n = originals.length
  if (!n) return

  // A full set of clones on BOTH sides: on wider screens the next card peeks in,
  // so a single clone left an empty gap on the right at the loop point.
  const makeClone = (card) => {
    const clone = card.cloneNode(true)
    clone.classList.add('is-clone')
    clone.setAttribute('aria-hidden', 'true')
    clone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'))
    return clone
  }
  track.prepend(...originals.map(makeClone))
  track.append(...originals.map(makeClone))
  const cards = Array.from(track.children)

  let index = n // first real card
  let step = 0
  let timer = null
  let fallback = null
  let inView = false
  let hovering = false
  let focused = false
  let dragging = false

  function measure() {
    const containerWidth = viewport.clientWidth
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    let cardWidth
    if (window.innerWidth < 640) {
      cardWidth = containerWidth - gap // one card per view on mobile
      step = containerWidth
    } else {
      cardWidth = Math.min(containerWidth, 590)
      step = cardWidth + gap
    }
    cards.forEach((card) => {
      card.style.flex = `0 0 ${cardWidth}px`
      card.style.width = `${cardWidth}px`
    })
    setPosition(false)
  }

  // Jump (invisibly) from a clone back to the matching real card
  function normalize() {
    clearTimeout(fallback)
    if (index >= 2 * n) index -= n
    else if (index < n) index += n
    else return
    setPosition(false)
  }

  function setPosition(animate, offset = 0) {
    const useTransition = animate && !isReduced()
    track.style.transition = useTransition ? `transform ${transitionMs}ms ease-in-out` : 'none'
    track.style.transform = `translate3d(${-(index * step) + offset}px, 0, 0)`
    if (useTransition) {
      clearTimeout(fallback)
      // transitionend can be skipped (e.g. background tab) — never get stuck on a clone
      fallback = setTimeout(normalize, transitionMs + 100)
    }
  }

  function go(delta) {
    index += delta
    if (index < 0 || index >= 3 * n) {
      index = (((index - n) % n) + n) % n + n
      setPosition(false)
      return
    }
    setPosition(true)
    if (isReduced()) normalize()
  }

  track.addEventListener('transitionend', (e) => {
    if (e.target === track && e.propertyName === 'transform') normalize()
  })

  function updateAutoplay() {
    const run = inView && !hovering && !focused && !dragging && !document.hidden && !isReduced()
    if (run && !timer) timer = setInterval(() => go(1), autoplayDelay)
    else if (!run && timer) {
      clearInterval(timer)
      timer = null
    }
  }
  const restartAutoplay = () => {
    clearInterval(timer)
    timer = null
    updateAutoplay()
  }

  // Mouse hover pauses autoplay; touch taps no longer stop it permanently
  viewport.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovering = true; updateAutoplay() } })
  viewport.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hovering = false; updateAutoplay() } })
  // pause only for keyboard focus (a tap also focuses the region but shouldn't stop autoplay)
  viewport.addEventListener('focusin', () => { focused = viewport.matches(':focus-visible'); updateAutoplay() })
  viewport.addEventListener('focusout', () => { focused = false; updateAutoplay() })
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); restartAutoplay() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); restartAutoplay() }
  })

  enableSwipe(viewport, {
    onStart: () => { dragging = true; updateAutoplay(); normalize(); setPosition(false) },
    onMove: (dx) => setPosition(false, dx),
    onEnd: (dir) => {
      dragging = false
      if (dir) go(dir)
      else setPosition(true)
      updateAutoplay()
    },
  })

  onVisibilityChange(viewport, (v) => { inView = v; updateAutoplay() })
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) normalize()
    updateAutoplay()
  })

  let raf
  new ResizeObserver(() => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(measure)
  }).observe(viewport)

  measure()
}

/* ---------- My Projects carousel ---------- */
function initProjects() {
  const viewport = document.getElementById('projects-viewport')
  const track = document.getElementById('projects-carousel')
  const dotsWrap = document.getElementById('projDots')
  const prevBtn = document.getElementById('projPrevBtn')
  const nextBtn = document.getElementById('projNextBtn')
  if (!viewport || !track || !dotsWrap || !prevBtn || !nextBtn) return

  const cards = Array.from(track.children)
  const autoplayDelay = 4000
  track.classList.add('reveal-stagger')

  let perView = 0
  let pages = 1
  let page = 0
  let timer = null
  let inView = false
  let hovering = false
  let dragging = false

  // Cards per slide follow the space actually available to the carousel
  // (the main column is narrow next to the sticky profile card on laptops).
  const getPerView = (width) => (width >= 600 ? 3 : width >= 400 ? 2 : 1)

  function buildDots() {
    dotsWrap.textContent = ''
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button')
      dot.type = 'button'
      dot.setAttribute('aria-label', `Go to slide ${i + 1} of ${pages}`)
      dot.addEventListener('click', () => {
        page = i
        render()
        restartAutoplay()
      })
      dotsWrap.appendChild(dot)
    }
  }

  function render(animate = true, offset = 0) {
    track.style.transition = animate && !isReduced() ? '' : 'none'
    track.style.transform = `translate3d(calc(${-page} * (100% + var(--gap)) + ${offset}px), 0, 0)`
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.className = 'proj-dot w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ' +
        (i === page ? 'bg-orange-600' : 'bg-white bg-opacity-30')
      dot.setAttribute('aria-current', i === page ? 'true' : 'false')
    })
    cards.forEach((card, i) => card.setAttribute('aria-hidden', String(Math.floor(i / perView) !== page)))
  }

  function layout() {
    const next = getPerView(viewport.clientWidth)
    if (next !== perView) {
      const firstVisible = page * perView
      perView = next
      pages = Math.ceil(cards.length / perView)
      page = Math.min(Math.floor(firstVisible / perView), pages - 1)
      track.style.setProperty('--per-view', perView)
      cards.forEach((card, i) => card.style.setProperty('--stagger', `${(i % perView) * 90}ms`))
      buildDots()
    }
    render(false)
  }

  const goTo = (p) => {
    page = (p + pages) % pages
    render()
  }

  function updateAutoplay() {
    const run = inView && !hovering && !dragging && !document.hidden && !isReduced()
    if (run && !timer) timer = setInterval(() => goTo(page + 1), autoplayDelay)
    else if (!run && timer) {
      clearInterval(timer)
      timer = null
    }
  }
  const restartAutoplay = () => {
    clearInterval(timer)
    timer = null
    updateAutoplay()
  }

  nextBtn.addEventListener('click', () => { goTo(page + 1); restartAutoplay() })
  prevBtn.addEventListener('click', () => { goTo(page - 1); restartAutoplay() })

  enableSwipe(viewport, {
    onStart: () => { dragging = true; updateAutoplay(); render(false) },
    onMove: (dx) => render(false, dx),
    onEnd: (dir) => {
      dragging = false
      if (dir) goTo(page + dir)
      else render()
      updateAutoplay()
    },
  })

  viewport.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovering = true; updateAutoplay() } })
  viewport.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hovering = false; updateAutoplay() } })
  onVisibilityChange(viewport, (v) => { inView = v; updateAutoplay() })
  document.addEventListener('visibilitychange', updateAutoplay)

  let raf
  new ResizeObserver(() => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(layout)
  }).observe(viewport)

  layout()
}

/* ---------- "Book A Call" marquee ---------- */
function initMarquee() {
  const marquee = document.querySelector('.marquee')
  if (!marquee) return
  const track = marquee.querySelector('.marquee__track')
  const group = marquee.querySelector('.marquee__group')
  const speed = 60 // px per second (≈ the old <marquee scrollamount="5">)

  let lastWidth = 0
  new ResizeObserver(() => {
    const width = group.getBoundingClientRect().width
    if (Math.abs(width - lastWidth) < 1) return
    lastWidth = width
    track.style.setProperty('--marquee-duration', `${(width / speed).toFixed(2)}s`)
  }).observe(group)

  // Don't animate while off screen
  onVisibilityChange(marquee, (visible) => track.classList.toggle('is-paused', !visible))
}

initSideMenu()
initContactButtons()
initCounters()
initDataAnimate()
initLetterHeading('tech-stack', 'text-5xl')
initLetterHeading('Work-process', 'text-7xl')
initScrollHeading()
initTechStack()
initWorkProcess()
initProjects()
initMarquee()
initReveal()
