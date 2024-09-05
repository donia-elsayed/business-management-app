import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

const Table = ({ headers, data, onEdit, onDelete, onToggleBlock }) => {
  const allHeaders = [...headers, "Actions"];

  return (
    <div className="overflow-x-auto my-10">
      <table className="max-w-2xl divide-y m-auto divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
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
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-6 py-4 whitespace-nowrap text-base"
                >
                  {header === "images"
                    ? (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="h-15 w-15 object-cover rounded"
                      />
                    )
                    : header === "description"
                      ? `${item[header].slice(0, 60)}...`
                      : item[header]}
                </td>
              ))}

              <td className="px-6 py-4 whitespace-wrap text-sm font-medium">
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