// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './NewProduct.css';

// import useFetchCategory from '../hooks/useFetch-hook';

const NewProduct = () => {
  // const results = useFetchCategory('categorias');
  // console.log(results);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    fetch('http://localhost:5000/Producto', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) =>
        console.log('Se agregó el siguiente producto:', response)
      );
  };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log('Sent form');
  // };

  return (
    <div className="mx-auto p-4 block w-11/12 md:w-4/6">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="mb-4 inline-block w-1/4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            Marca
          </label>
          <input
            // defaultValue="test"
            {...register('marca', { required: true })}
            className="border my-1 px-5 py-3 rounded-xl w-full"
            placeholder="Marca"
          />
          {errors.marca && (
            <p className="text-red-600 absolute">This field is required</p>
          )}
        </div>

        <div className="mb-4 inline-block pl-4 w-3/4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            Nombre
          </label>
          <input
            // defaultValue="test"
            {...register('nombre', { required: true })}
            className="border my-1 px-5 py-3 rounded-xl w-full"
            placeholder="Nombre"
          />
          {errors.nombre && (
            <p className="text-red-600 absolute">This field is required</p>
          )}
        </div>

        <div className="mb-4 inline-block w-auto w-2/4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
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
            {...register('categoria', { pattern: /^(?!.*?categoria).*/ })}
            className="border my-1 px-5 py-3 rounded-xl w-full"
          >
            <option value="Lubricantes, aceites y quimicos">
              Lubricantes, aceites y quimicos
            </option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.categoria && errors.categoria.type == 'pattern' && (
            <p className="text-red-600 absolute">Selecciona una categoria</p>
          )}
        </div>

        <div className="mb-4 inline-block w-1/4 pl-4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
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
            <p className="text-red-600 absolute">Solo se admiten números</p>
          )}
          {errors.precio && (
            <p className="text-red-600 absolute">Solo se admiten números</p>
          )}
        </div>

        <div className="mb-4 inline-block pl-4 w-1/4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
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
            <p className="text-red-600 absolute">This field is required</p>
          )}
        </div>

        <button
          type="submit"
          className="send-button py-2 px-5 py-3 mt-2 rounded-xl text-white font-medium block w-1/4 "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default NewProduct;