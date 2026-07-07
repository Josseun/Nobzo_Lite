import { Icon } from "@iconify/react";
import { changeStyles, stats } from "../types";
import data from "../../public/frontend_db.json";
import { Link } from "react-router";

const DashboardProperties = () => {
  const propData = data.properties;

  return (
    <div className="p-6 w-full px-10 max-lg:pt-20">
      {/* Stat cards */}
      <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border p-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon className="size-7 text-primary" icon={stat.icon} />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${changeStyles[stat.changeType]}`}
              >
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm text-secondary font-semibold">{stat.label}</p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Property inventory table */}
      <div className="bg-white rounded-xl border">
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-secondary">
              Property Inventory
            </h2>
            <span className="bg-blue-100 text-secondary max-md:hidden text-xs font-medium px-3 py-1 rounded-full">
              {propData.length} Active Listings
            </span>
          </div>
          <div className="flex gap-3 max-md:hidden">
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm font-medium text-neutral">
              <Icon icon="material-symbols:filter-list" className="size-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm font-medium text-neutral">
              <Icon icon="material-symbols:download" className="size-4" />
              Export
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-secondary font-bold uppercase border-b">
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Address</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium max-md:hidden">Action</th>
            </tr>
          </thead>
          <tbody>
            {propData.map((prop) => (
              <tr key={prop.id} className="border-b last:border-b-0">
                <td className="p-4 text-sm text-neutral">{prop.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-lg max-md:hidden bg-gray-200 overflow-hidden shrink-0">
                      {prop.image && (
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <Link to={`/property/${prop.id}`}>
                      <p className="font-semibold text-secondary">
                        {prop.title}
                      </p>
                      <p className="text-sm text-neutral">{prop.location}</p>
                    </Link>
                  </div>
                </td>
                <td className="p-4 text-sm text-neutral">{prop.type}</td>

                <td className="p-4 max-md:hidden">
                  <button className="text-sm font-medium text-primary">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProperties;
