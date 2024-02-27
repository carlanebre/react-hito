import React from 'react';

const Footer = () => {
  return (
    <footer class="py-12 px-4 md:px-6 border-t">
    <div class="container flex items-center justify-between">
      <p class="text-sm text-gray-500">© 2024 Lush. Todos los derechos reservados.</p>
      <nav class="flex gap-4 sm:gap-6">
        <a class="text-sm hover:underline underline-offset-4" href="#">
          Términos de uso
        </a>
        <a class="text-sm hover:underline underline-offset-4" href="#">
          Política de Privacidad
        </a>
      </nav>
    </div>
  </footer>
  );
};

export default Footer;
