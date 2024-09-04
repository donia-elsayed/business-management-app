import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

const Table = ({ headers, data, onEdit, onDelete, onToggleBlock }) => {
  const allHeaders = [...headers, "Actions"];
  return (
    <div className=" flex justify-center items-center overflow-x-auto my-10">
      <table className="max-w-2xl divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {data[0].image && (
              <th className="px-6 py-3 text-gray-500 text-left text-lg font-medium">
                Image
              </th>
            )}
            {allHeaders.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider capitalize"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              {item.image && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-15 w-15 object-cover rounded"
                  />
                </td>
              )}
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-6 py-4 whitespace-nowrap text-base"
                >
                  {item[header]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(item)}
                      className="outline outline-1 outline-gray-200 px-3 py-2 text-blue-600 hover:text-blue-900 mr-2 rounded-md"
                    >
                      <PencilSquareIcon className="h-6 w-6" />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item.id)}
                      className="outline outline-1 outline-gray-200 px-3 py-2 text-red-600 hover:text-red-900 mr-2 rounded-md"
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  )}
                </div>

                {onToggleBlock && (
                  <button
                    onClick={() => onToggleBlock(item.id, item.isBlocked)}
                    className={`${item.isBlocked} ? 'text-green-600 hover:text-green-900' : 'text-red-600 hover:text-red-900'`}
                  >
                    {item.isBlocked ? "Unblock" : "Block"}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
