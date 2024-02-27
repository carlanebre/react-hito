import React from 'react';

import flor1 from '../assets/flor12.jpg'

const About = () => {
  return (
    <>
    <section class="py-16 px-8">
    <div class="grid grid-cols-2 gap-8">
      <div class="text-left">
        <h2 class="text-4xl font-bold mb-4">Flores frescas que enamoran.</h2>
        <p class="text-gray-600 mb-6">
        Flores seleccionadas de temporada recién cortadas con diseños de floristas expertos, que llegarán en el momento justo a tu domicilio.
        </p>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
          Descrube nuestro catálogo
        </button>
      </div>
      <div>
      <img
        src={flor1}
        alt="Basketball"
        width="450"
        height="600"
        class="rounded-lg object-cover w-full aspect-[6/3] group-hover:opacity-50 transition-opacity"
      />
    
      </div>
    </div>
  </section>
  
  <section class="bg-gray-100 py-16 px-8 text-left">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-bold mb-4">Flores Exquisitas Inspiradas en la Naturaleza</h3>
        <p class="text-gray-600 mb-6">Floristería Naturaleza Viva</p>
        <p class="text-gray-600 mb-6">
          Todos los arreglos florales que creamos están inspirados en la belleza natural y serán una adición encantadora a tu hogar o evento especial.
        </p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4">Colección de Flores Exclusivas</h3>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-bold">140+</h4>
            <p class="text-gray-600">Tipos de Flores</p>
          </div>
          <div>
            <h4 class="text-xl font-bold">10</h4>
            <p class="text-gray-600">Diseños de Arreglos</p>
          </div>
          <div>
            <h4 class="text-xl font-bold">30+</h4>
            <p class="text-gray-600">Opciones de Colores</p>
          </div>
          <div>
            <h4 class="text-xl font-bold">40+</h4>
            <p class="text-gray-600">Estilos de Envoltorios</p>
          </div>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white mt-4">
          Ver Colección
        </button>
      </div>
    </div>
  </section>
  </>
  );
};

export default About;
