import React from "react";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    number: "123-456-7890",
    gender: "Female",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    number: "234-567-8901",
    gender: "Male",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    number: "345-678-9012",
    gender: "Male",
  },
  {
    name: "Diana Prince",
    email: "diana.prince@example.com",
    number: "456-789-0123",
    gender: "Female",
  },
  {
    name: "Evan Davis",
    email: "evan.davis@example.com",
    number: "567-890-1234",
    gender: "Male",
  },
  {
    name: "Fiona Green",
    email: "fiona.green@example.com",
    number: "678-901-2345",
    gender: "Female",
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    number: "789-012-3456",
    gender: "Male",
  },
  {
    name: "Hannah Clark",
    email: "hannah.clark@example.com",
    number: "890-123-4567",
    gender: "Female",
  },
  {
    name: "Ian Scott",
    email: "ian.scott@example.com",
    number: "901-234-5678",
    gender: "Male",
  },
  {
    name: "Jessica White",
    email: "jessica.white@example.com",
    number: "012-345-6789",
    gender: "Female",
  },
];

const Table = () => {
  return (
    <div className="p-2">
      <div
        className="overflow-auto rounded-lg border"
        style={{ height: "200px" }}
      >
        <table className=" min-w-full divide-y">
          <thead className="sticky top-0 bg-gray-50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Gender</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((ele) => (
              <tr>
                <td className="p-3 text-left whitespace-nowrap">{ele.name}</td>
                <td className="p-3 text-left whitespace-nowrap">{ele.email}</td>
                <td className="p-3 text-left whitespace-nowrap">
                  {ele.number}
                </td>
                <td className="p-3 text-left whitespace-nowrap">
                  {ele.gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
