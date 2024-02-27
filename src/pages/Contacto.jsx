import React from 'react';

function Contacto() {
  return (
    <div className="text-left grid gap-12 py-20 px-4 mx-auto lg:grid-cols-2 md:px-6">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Contacta con nosotros</h1>
          <p className="text-gray-500 dark:text-gray-400">Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="nombre"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="apellido"
                placeholder="Ingrese su apellido"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Ingrese su correo electrónico"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="mensaje"
            >
              Mensaje
            </label>
            <textarea
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
              id="mensaje"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white mt-4">
            Enviar mensaje
          </button>
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Información de contacto</h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Correo electrónico</h4>
            <p>flores@lush.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Teléfono</h4>
            <p>(555) 123-4567</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Dirección</h4>
            <p>Calle Anselmo, Madrid, España, 20987</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
