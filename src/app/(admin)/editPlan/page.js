"use client";

import { useEffect, useState } from "react";
import api from "@/api/axios";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditPlan() {
  const params = useParams();
  const planId = params.id;

  const [form, setForm] = useState(null);

  const getPlan = async () => {
    const res = await api.get(`/payments/plans/${planId}`);
    setForm(res.data.data);
  };

  const savePlan = async () => {
    await api.put(`/payments/plans/${planId}`, form);
    toast.success("Plan updated!");
  };

  useEffect(() => {
    getPlan();
  }, []);

  if (!form) return <p>Loading...</p>;

  return (
    <div className="max-w-xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Plan</h2>

      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="input mb-3"
      />

      <input
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="input mb-3"
      />

      <button onClick={savePlan} className="bg-orange-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </div>
  );
}
