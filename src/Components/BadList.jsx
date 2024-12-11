import { data } from "autoprefixer";
import React from "react";

const BadList = ({ datas }) => {
  return (
    <div className="col-span-12 sm:col-span-6">
      {/* Entry List Header Row */}
      <div className="grid place-items-center">
        <h2 className="text-xl font-semibold">Bad List</h2>
        <hr className="w-full border-gray-300 my-2" />
      </div>

      {/* Entry List Table Row */}
      <div>
        <table className="table-auto w-full text-center border-collapse">
          <tbody>
            {datas.map((data) => {
              if (!data.isGood) {
                return (
                  <tr className="border-b border-gray-300">
                    <th scope="row" className="p-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                    </th>
                    <td className="p-2">{data.taskName}</td>
                    <td className="p-2">{data.time} hrs</td>
                    <td className="p-2 text-right space-x-2">
                      <button
                        type="button"
                        className="p-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none"
                      >
                        <i class="bi bi-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}

            {/* Add more rows here */}
          </tbody>
        </table>
      </div>

      <div
        className="p-4 text-md text-gray-800 rounded-lg bg-gray-50 mt-4"
        role="alert"
      >
        <span className="font-medium">You could have saved 0 hours.</span>
      </div>
    </div>
  );
};

export default BadList;
