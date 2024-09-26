<tr>
<td colSpan="5" className=" font-bold text-lg  text-left p-4">
  <span className="bg-blue-500 p-2 rounded-lg mt-2 text-white">
    PAPER BOMB
  </span>
</td>
</tr>
{products.PaperBomb.map((data, index) => (
<tr key={index} className="bg-gray-50 hover:bg-gray-100">
  <td className="border border-gray-300 px-4 py-2">
    <img
      src={data.image}
      alt="Product"
      className="w-12 h-12 object-cover mx-auto"
    />
  </td>
  <td className="border border-gray-300 px-4 py-2">
    {data.title}
    <h2 className="md:hidden px-4 py-2 font-bold text-blue-600">
      {data.price}
    </h2>
  </td>
  <td className="hidden md:block border border-gray-300 px-4 py-5 font-bold text-blue-600">
    Rs: {data.price} .00
  </td>
  <td className="border border-gray-300 px-4 py-2">
    <div className="flex justify-center items-center space-x-4">
      <button
        className="text-3xl font-bold px-3 py-1 transition"
        onClick={() =>
          handleQuantityChange("PaperBomb", index, -1)
        }
      >
        -
      </button>

      <h2 className="text-2xl">{data.quantity}</h2>

      <button
        className="text-3xl font-bold px-1 py-1 transition"
        onClick={() =>
          handleQuantityChange("PaperBomb", index, 1)
        }
      >
        +
      </button>
    </div>
  </td>
  <td className="border border-gray-300 px-1 py-1">
    Rs: {data.subtotal} .00
  </td>
</tr>
))}