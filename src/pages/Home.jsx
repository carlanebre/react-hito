import React from "react";
import flor1 from '../assets/flor1.jpg'
import flor2 from '../assets/flor10.jpg'
import flor3 from '../assets/flor2.jpg'
import flor4 from '../assets/flor4.jpg'

function Home() {
  return (
    <div class="flex flex-col min-h-screen">
      <section class="w-full py-12">
        <div class="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h1 class="text-3xl font-bold tracking-tight">Flores frescas y auténticas</h1>
            <p class="text-gray-500 dark:text-gray-400">
              ¡Todo lo que necesitas para hacer feliz a los tuyos!
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="grid gap-4 relative group">
              <a class="absolute inset-0 z-10" href="#">
                <span class="sr-only">View</span>
              </a>
              <img
                src={flor1}
                alt="Basketball"
                width="450"
                height="600"
                class="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              />
              <div class="grid gap-1">
                <h3 class="font-semibold">Ramo de flores Venecia</h3>
                <p class="text-sm mt-2 text-gray-500">Inspirado en la belleza y la elegancia de la ciudad de Venecia.</p>
              </div>
              <p class="font-semibold underline underline-offset-4">Añadir al carrito</p>
            </div>
            <div class="grid gap-4 relative group">
              <a class="absolute inset-0 z-10" href="#">
                <span class="sr-only">View</span>
              </a>
              <img
                src={flor2}
                alt="Running"
                width="450"
                height="600"
                class="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              />
              <div class="grid gap-1">
                <h3 class="font-semibold">Ramo Dolce Vita</h3>
                <p class="text-sm mt-2 text-gray-500">
                Diseñado para acompañarte en tus momentos más felices y especiales.
                </p>
              </div>
              <p class="font-semibold underline underline-offset-4">Añadir al carrito</p>
            </div>
            <div class="grid gap-4 relative group">
              <a class="absolute inset-0 z-10" href="#">
                <span class="sr-only">View</span>
              </a>
              <img
                src={flor3}
                alt="Football"
                width="450"
                height="600"
                class="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              />
              <div class="grid gap-1">
                <h3 class="font-semibold">Ramo Cartagena</h3>
                <p class="text-sm mt-2 text-gray-500">
                Explosión de color y energía que evoca la pasión y la vitalidad de la ciudad de Cartagena.
                </p>
              </div>
              <p class="font-semibold underline underline-offset-4">Añadir al carrito</p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${flor4})` }}>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="z-10 relative">
          <h1 class="text-4xl md:text-6xl font-bold">
            Encuentra tu ramo ideal
          </h1>
          <p class="text-lg md:text-xl mt-4">
            Flores frescas que enamoran
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
