"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { monthlyData } from "@/Data/Chartdata";

export default function BarCharts() {
    return(
        <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
                Development over time
            </h2>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#2563eb" radius={[8,8,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}