import React from 'react';

const Nav = () => {
  return (
    <header class="px-4 lg:px-6 h-14 flex items-center">
    <a class="flex items-center justify-center" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="m8 16 1.5-1.5"></path>
        <path d="M14.5 9.5 16 8"></path>
        <path d="m8 8 1.5 1.5"></path>
        <path d="M14.5 14.5 16 16"></path>
      </svg>
      <span class="ml-3 font-semibold">Floristería Lush</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a class="text-sm font-medium hover:underline underline-offset-4" href="/">
        Home
      </a>
      <a class="text-sm font-medium hover:underline underline-offset-4" href="/tienda">
        Tienda
      </a>
      <a class="text-sm font-medium hover:underline underline-offset-4" href="/about">
        Sobre nosotros
      </a>
      <a class="text-sm font-medium hover:underline underline-offset-4" href="/contacto">
        Contacto
      </a>
      <a class="flex items-center justify-center" href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      </a>
    </nav>
  </header>
  );
};

export default Nav;
