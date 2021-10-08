/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Spinner from '../components/common/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { BiCheck } from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css';
import './NewProduct.css';

// import useFetchCategory from '../hooks/useFetch-hook';

const NewProduct = () => {
  // const results = useFetchCategory('categorias');
  // console.log(results);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    let { precio, cantidad } = data;
    precio = parseFloat(precio);
    cantidad = parseInt(cantidad);

    const formattedData = { ...data, precio, cantidad };
    console.log(formattedData);

    setLoading(true);
    fetch('http://localhost:5000/productos/nuevo', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(formattedData), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Se agregó el siguiente producto:', response.body);
        setLoading(false);
        toast.success('Producto agregado', {
          icon: <BiCheck size="1.5em" color="#3b82f6" />,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log('Sent form');
  // };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? <Spinner /> : null}
      {/* <Spinner loading={loading} /> */}
      <div className="mx-auto mt-4 px-6 py-8 block w-11/12 md:w-4/6 card-shadow">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="mb-6 inline-block w-1/3">
            <label
              className="font-bold block md:mb-0"
              htmlFor="inline-full-name"
            >
              Marca
            </label>
            <input
              // defaultValue="test"
              {...register('marca', { required: true })}
              className="border my-1 px-5 py-3 rounded-xl w-full"
              placeholder="Marca"
            />
            {errors.marca && (
              <p className="text-red-600 absolute text-sm">
                This field is required
              </p>
            )}
          </div>

          <div className="mb-4 inline-block pl-4 w-2/3">
            <label
              className="font-bold block md:mb-0"
              htmlFor="inline-full-name"
            >
              Nombre
            </label>
            <input
              // defaultValue="test"
              {...register('nombre', { required: true })}
              className="border my-1 px-5 py-3 rounded-xl w-full"
              placeholder="Nombre"
            />
            {errors.nombre && (
              <p className="text-red-600 absolute text-sm">
                This field is required
              </p>
            )}
          </div>

          <div className="mb-6 inline-block w-full md:w-2/4">
            <label
              className="font-bold block md:mb-0"
              htmlFor="inline-full-name"
            >
              Categoria
            </label>
            {/* <input
            {...register('categoria', { required: true })}
            className="border my-1 p-2 rounded-xl w-full"
            placeholder="Categoria"
          />
          {errors.cantidad && (
            <p className="text-red-600">This field is required</p>
          )} */}

            <select
              {...register('categoria', {
                required: true,
                minLength: 2,
                pattern: /^(?!.*?Categoría).*/,
              })}
              className="border my-1 px-5 py-3 rounded-xl w-full"
            >
              <option>Categoría</option>
              <option value="Lubricantes, aceites y quimicos">
                Lubricantes, aceites y quimicos
              </option>
            </select>
            {errors.categoria && (
              <p className="text-red-600 absolute text-sm">
                Selecciona una categoria
              </p>
            )}
          </div>

          <div className="mb-6 inline-block w-2/4 md:w-1/4 md:pl-4">
            <label
              className="font-bold block md:mb-0"
              htmlFor="inline-full-name"
            >
              Precio
            </label>
            <div className="border my-1  rounded-xl w-full inline-flex price">
              <p className="inline-block pl-5 pr-1">
                <strong>$</strong>
              </p>
              <input
                {...register('precio', {
                  required: true,
                  minLength: 1,
                  pattern: /^[0-9]+\.[0-9][0-9]$/,
                })}
                type="number"
                min="0"
                step="0.01"
                className="inline-block pr-5 py-3"
                placeholder="Precio"
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.precio && errors.precio.type == 'pattern' && (
              <p className="text-red-600 absolute text-sm">
                Solo se admiten números
              </p>
            )}
            {errors.precio && (
              <p className="text-red-600 absolute text-sm">
                Solo se admiten números
              </p>
            )}
          </div>

          <div className="mb-6 inline-block pl-4 w-2/4 md:w-1/4">
            <label
              className="font-bold block md:mb-0"
              htmlFor="inline-full-name"
            >
              Cantidad
            </label>
            <input
              {...register('cantidad', {
                required: true,
                pattern: /^[0-9]*$/,
              })}
              type="number"
              min="0"
              step="1"
              className="border my-1 px-5 py-3 rounded-xl w-full"
              placeholder="Cantidad"
            />
            {/* errors will return when field validation fails  */}
            {errors.cantidad && (
              <p className="text-red-600 absolute text-sm">
                This field is required
              </p>
            )}
          </div>

          <button
            type="submit"
            className="send-button py-2 px-5 py-3 mt-2 rounded-xl text-white font-medium block w-full md:w-1/4 focus:outline-none"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
