import React from 'react';
import flor1 from '../assets/flor1.jpg'
import flor2 from '../assets/flor7.jpg'
import flor3 from '../assets/flor2.jpg'
import flor4 from '../assets/flor4.jpg'
import flor5 from '../assets/flor3.jpg'
import flor6 from '../assets/flor12.jpg'
import flor7 from '../assets/flor5.jpg'
import flor8 from '../assets/flor19.jpg'

const Cart = () => {
  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm max-w-screen-md text-left" data-v0-t="card">
    <div class="p-6 flex flex-row space-y-0 items-start gap-2">
      <div class="grid gap-1">
        <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Mi carrito</h3>
        <p class="text-sm text-muted-foreground">Lista de la compra</p>
      </div>
      <button class="text-gray-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
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
          class="h-4 w-4"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
        <span class="sr-only">Toggle cart</span>
      </button>
    </div>
    <div class="p-6">
      <div class="grid gap-4">
        <div class="flex items-center gap-4">
          <img
            src={flor8}
            width="100"
            height="100"
            alt="Thumbnail"
            class="aspect-square rounded-lg overflow-hidden object-cover"
          />
          <div class="grid gap-1.5">
            <h3 class="font-semibold text-sm md:text-base">Ramo Alegría</h3>
            <div class="flex items-center gap-4 text-sm">
              <div>Composición: Girasoles, margaritas y tulipanes</div>
            </div>
            <div class="font-semibold text-lg md:text-xl">29€</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <img
            src={flor2}
            width="100"
            height="100"
            alt="Thumbnail"
            class="aspect-square rounded-lg overflow-hidden object-cover"
          />
          <div class="grid gap-1.5">
            <h3 class="font-semibold text-sm md:text-base">Ramo pureza</h3>
            <div class="flex items-center gap-4 text-sm">
              <div>Composición: Rosas blancas, lirios y peonías.</div>
            </div>
            <div class="font-semibold text-lg md:text-xl">32€</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <img
            src={flor7}
            width="100"
            height="100"
            alt="Thumbnail"
            class="aspect-square rounded-lg overflow-hidden object-cover"
          />
          <div class="grid gap-1.5">
            <h3 class="font-semibold text-sm md:text-base">Ramo Caribean</h3>
            <div class="flex items-center gap-4 text-sm">
              <div>Composición: Hibiscos, heliconias y orquídeas.</div>
            </div>
            <div class="font-semibold text-lg md:text-xl">33€</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center p-6">
      <div class="flex flex-col gap-1.5 text-sm">
        <div class="flex items-center gap-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
            for="coupon"
          >
            Código de descuento
          </label>
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[200px]"
            id="coupon"
            placeholder="Código de descuento"
          />
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 bg-blue-600 text-white">
            Aplicar
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div>Subtotal</div>
          <div class="font-semibold">227€</div>
        </div>
        <div class="flex items-center justify-between">
          <div>IVA</div>
          <div class="font-semibold">22.70€</div>
        </div>
        <div class="flex items-center justify-between">
          <div>Gastos de envío</div>
          <div class="font-semibold">0.00€</div>
        </div>
        <div class="flex items-center justify-between">
          <div>Total</div>
          <div class="font-semibold">249.70€</div>
        </div>
      </div>
      <button class="ml-20 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full
      
      hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white mt-4">
        Comprar
      </button>
    </div>
  </div>
  );
};

export default Cart;
