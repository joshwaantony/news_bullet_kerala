"use client";

import { useEffect, useState } from "react";
import api from "@/api/axios";
import Link from "next/link";

export default function PlansPage() {
  const [plans, setPlans] = useState([]);

  const getPlans = async () => {
    const res = await api.get("/payments/plans");
    setPlans(res.data.data || []);
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Subscription Plans</h2>
        <Link href="/admin/create" className="bg-orange-600 px-4 py-2 text-white rounded-lg">
          + Create Plan
        </Link>
      </div>

      {/* PLAN TABLE */}
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Period</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((p) => (
            <tr key={p._id} className="border-b hover:bg-gray-50">
              <td className="p-3">{p.name}</td>
              <td className="p-3">₹{p.amount}</td>
              <td className="p-3">{p.period}</td>
              <td className="p-3">
                <Link
                  href={`/admin/plans/edit/${p._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
