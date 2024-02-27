import React from 'react';
import flor1 from '../assets/flor1.jpg'
import flor2 from '../assets/flor10.jpg'
import flor3 from '../assets/flor2.jpg'
import flor4 from '../assets/flor4.jpg'
import flor5 from '../assets/flor3.jpg'
import flor6 from '../assets/flor12.jpg'
import flor7 from '../assets/flor5.jpg'
import flor8 from '../assets/flor15.jpg'

function Tienda() {
  return (
    <section class="w-full py-12">
    <div class="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div class="grid gap-1 text-left">
          <h1 class="text-3xl font-bold tracking-tight text-left">Compra por tipo de flores</h1>
          <p class="text-gray-500 dark:text-gray-400">Encuentra el ramo perfecto para regalar.</p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor6}
            alt="Sunflower"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Tulipanes</h3>
            <p class="text-sm">Elegantes y gentiles.</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor2}
            alt="Rose"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Rosas</h3>
            <p class="text-sm">Clásicas y románticas</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor3}
            alt="Tulip"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Petunias</h3>
            <p class="text-sm">Vibrantes y coloridas.</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor8}
            alt="Sunflower"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Violetas</h3>
            <p class="text-sm">Apreciadas por su belleza y fragancia delicada.</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor4}
            alt="Sunflower"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Gardenias</h3>
            <p class="text-sm">Elegantes y exuberantes, conocidas por su aroma dulce.</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View</span>
          </a>
          <img
            src={flor5}
            alt="Sunflower"
            width="400"
            height="300"
            class="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold text-xl">Rosas blancas</h3>
            <p class="text-sm">Símbolos de pureza, inocencia y serenidad.</p>
          </div>
          <p class="font-semibold underline underline-offset-4 text-sm">Más información</p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Tienda;
