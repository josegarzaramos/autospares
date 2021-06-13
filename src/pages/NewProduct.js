// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import useFetchCategory from '../hooks/useFetch-hook';

const NewProduct = () => {
  // const results = useFetchCategory('categorias');
  // console.log(results);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log('Sent form');
  // };

  return (
    <div className="mx-auto p-4 block w-11/12 md:w-2/6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            Nombre del producto
          </label>
          <input
            defaultValue="test"
            {...register('nombre', { required: true })}
            className="border my-1 p-2 rounded-lg w-full"
            placeholder="Nombre del producto"
          />
          {errors.nombre && (
            <p className="text-red-600">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            SKU
          </label>
          <input
            {...register('sku', {
              required: true,
              minLength: 3,
              pattern: /^[0-9]*$/,
            })}
            className="border my-1 p-2 rounded-lg w-full"
            placeholder="SKU"
          />
          {/* errors will return when field validation fails  */}
          {errors.sku && errors.sku.type == 'pattern' && (
            <p className="text-red-600">Solo de admiten números</p>
          )}
        </div>

        <div className="mb-4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            Cantidad
          </label>
          <input
            {...register('cantidad', { required: true })}
            className="border my-1 p-2 rounded-lg w-full"
            placeholder="Cantidad"
          />
          {/* errors will return when field validation fails  */}
          {errors.cantidad && (
            <p className="text-red-600">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="font-bold block md:mb-0" htmlFor="inline-full-name">
            Categoria
          </label>
          {/* <input
            {...register('categoria', { required: true })}
            className="border my-1 p-2 rounded-lg w-full"
            placeholder="Categoria"
          />
          {errors.cantidad && (
            <p className="text-red-600">This field is required</p>
          )} */}

          <select
            {...register('categoria', { pattern: /^(?!.*?categoria).*/ })}
            className="border my-1 p-2 rounded-lg w-full"
          >
            <option value="categoria">categoria</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.categoria && errors.categoria.type == 'pattern' && (
            <p className="text-red-600">Selecciona una categoria</p>
          )}
        </div>

        <input
          type="submit"
          className="bg-blue-600 py-2 px-7 rounded-lg text-white font-medium"
        />
      </form>
    </div>
  );
};

export default NewProduct;
