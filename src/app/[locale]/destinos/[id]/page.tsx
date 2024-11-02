"use client";

import Image from "next/image";
import { SiAeromexico } from "react-icons/si";
import { MdFlight } from "react-icons/md";
import { useState } from "react";

// Icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

type Destino = {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  actividades: string[];
  precio: number;
};

// Datos estáticos de ejemplo
const destinos: Destino[] = [
  {
    id: "1",
    nombre: "Cancun",
    descripcion:
      "La ciudad del amor, famosa por la Torre Eiffel y su arquitectura.",
    imagen: "/paisaje.jpg",
    actividades: [
      "Visitar el Louvre",
      "Paseo en el Sena",
      "Subir a la Torre Eiffel",
    ],
    precio: 7556,
  },
  {
    id: "2",
    nombre: "Roma",
    descripcion:
      "La Ciudad Eterna, llena de historia antigua como el Coliseo y el Foro Romano.",
    imagen: "/imagenes/roma.jpg",
    actividades: [
      "Visitar el Coliseo",
      "Recorrer el Vaticano",
      "Disfrutar la comida italiana",
    ],
    precio: 6500,
  },
];

// Función para obtener el destino por ID
const getDestinoById = (id: string) =>
  destinos.find((destino) => destino.id === id);

const DestinoPage = ({ params }: { params: { id: string } }) => {
  const destino = getDestinoById(params.id);

  // Mostrar un mensaje si el destino no existe
  if (!destino) return <p>Destino no encontrado.</p>;

  // Estado para el número de personas
  const [personas, setPersonas] = useState(1);
  const precioFinal = destino.precio * personas;

  return (
    <div className="p-6 mt-20 flex flex-col lg:w-11/12 mx-auto">
      <div className="bg-primary p-7">
        <h1 className="text-lg text-white">
          Excelente, revisa y personaliza los detalles del paquete que
          seleccionaste
        </h1>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="precio-final bg-primary flex justify-center items-center py-4 rounded-t-3xl">
          <h1 className="text-lg  text-white text-center mx-2">
            Precio final: <strong>{precioFinal} MXN</strong>
          </h1>
          <button className=" bg-white py-2 px-5 mx-2 rounded-lg">
            COMPRAR PAQUETE
          </button>
        </div>
        <div className="flex flex-col md:flex-row shadow-2xl shadow-black/10 rounded-3xl">
          <div className=" flex-1 flex flex-col">
            <div className="flex justify-around bg-blue-900 py-2 text-white">
              <span className="font-bold">Vuelo</span>
              <span>Cambia tu vuelo</span>
            </div>
            <div className="flex  items-center justify-around p-2  my-2 ">
              <div className="flex items-center">
                <SiAeromexico className="text-3xl text-primary" />
                <div className="ml-2">
                  <p className="text-sm font-semibold">Salida</p>
                  <p className="text-md font-bold ">CDMX</p>
                  <p className="text-sm">18:00</p>
                </div>
              </div>
              <div className="flex items-center mx-4">
                <MdFlight className="text-3xl text-green rotate-90 text-green-500" />
              </div>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="text-sm font-semibold">Destino</p>
                  <p className="text-md font-bold">CANCUN</p>
                  <p className="text-sm">20:00</p>
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-around p-2  my-2">
              <div className="flex items-center">
                <SiAeromexico className="text-3xl text-primary" />
                <div className="ml-2">
                  <p className="text-sm font-semibold">Destino</p>
                  <p className="text-md font-bold">CDMX</p>
                  <p className="text-sm">18:00</p>
                </div>
              </div>
              <div className="flex items-center mx-4">
                <MdFlight className="text-3xl text-green -rotate-90 text-red-500" />
              </div>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="text-sm font-semibold">Salida</p>
                  <p className="text-md font-bold">CANCUN</p>
                  <p className="text-sm">18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center ">
            <div className="flex  justify-around bg-blue-900 py-2 text-white">
              <span className="font-bold">Hospedaje</span>
              <span>Cambia tu hotel</span>
            </div>
            <div className="flex flex-1 items-center justify-center p-4 border-l-2 border-r-2 border-black/20 ">
              <Image
                src="/paisaje.jpg"
                alt="Imagen del hotel"
                width={150}
                height={100}
                className="rounded-lg w-32 h-32 mr-4"
              />
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold">Hotel Ejemplo</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm mb-2">3 noches</p>
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex  justify-around bg-blue-900 py-2 text-white">
              <span className="font-bold">Detalles de Compra</span>
            </div>
            <div className="p-4 flex-1">
              <p className="text-sm mb-2">Duración: 3 días y 2 noches</p>
              <p className="text-sm mb-2">Hospedaje + Vuelo</p>
              <div className="flex items-center mb-4">
                <span className="text-sm mr-2">Número de personas:</span>

                <button
                  className="bg-primary text-white py-1 px-3 rounded-lg"
                  onClick={() => setPersonas(personas > 1 ? personas - 1 : 1)}
                >
                  -
                </button>
                <span className="text-lg mx-2">{personas}</span>
                <button
                  className="bg-primary text-white py-1 px-3 rounded-lg"
                  onClick={() => setPersonas(personas + 1)}
                >
                  +
                </button>
              </div>
              <p className="text-md font-bold">
                Precio por persona:{" "}
                <strong className="text-primary">MXN$ 7550</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black mt-6">
        <h1 className="text-lg text-white p-4 text-center">
          Obtén hasta $4,000 MXN de descuento en tu Vuelo + Hotel a Hyatt
          Inclusive con tu cupón: ILOVEHYATT ¡Ahorra más!
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sección derecha */}
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">{destino.nombre}</h2>
          <Image
            src={destino.imagen}
            alt="Imagen del destino"
            width={800}
            height={500}
            className="rounded-3xl w-full h-96 object-cover"
          />

          <div className="mt-6">
            <h2 className="text-lg font-bold">Bievenido a Cancún</h2>
            <p>
              Descubre el Paraíso en la Tierra Cancún, conocido por sus aguas
              turquesas, playas de arena blanca y un ambiente vibrante, es uno
              de los destinos turísticos más populares del Caribe. Aquí
              encontrarás el equilibrio perfecto entre relajación, aventura y
              entretenimiento.
            </p>
            <div className="w-full h-1 bg-primary my-10"></div>
            <div className="flex text-center ">
              <IoLocationOutline className="text-primary text-2xl" size={30} />
              <h3 className="text-xl font-bold mb-4 text-primary ml-3">
                Actividades
              </h3>
            </div>
            <ul>
              {destino.actividades.map((actividad) => (
                <li key={actividad} className="mb-2">
                  {actividad}
                </li>
              ))}
            </ul>
            <div className="w-full h-1 bg-primary my-10"></div>
            <div className="flex text-center ">
              <MdOutlineTipsAndUpdates
                className="text-primary text-2xl"
                size={30}
              />
              <h3 className="text-xl font-bold mb-4 text-primary ml-3">
                Consejos de viaje
              </h3>
            </div>
            <ul>
              <li className="mb-2">
                Clima: Cancún tiene un clima tropical durante todo el año.
              </li>
              <li className="mb-2">
                Moneda: La moneda oficial en México es el peso mexicano (MXN).
              </li>
              <li className="mb-2">
                Transporte: Puedes moverte en taxi, autobús o rentar un auto.
              </li>
            </ul>
            <div className="w-full h-1 bg-primary my-10"></div>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold">Precio por persona:</h3>
              <p className="text-xl font-bold text-primary">
                MXN$ {destino.precio}
              </p>
              <button className="bg-primary text-white py-2 px-4 rounded-lg">
                Comprar
              </button>
            </div>
          </div>
        </div>
        {/* Sección izquierda */}
        <div className="col-span-1">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Formulario de Contacto
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Tu email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mensaje"
                  placeholder="Tu mensaje"
                  rows={4}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinoPage;
