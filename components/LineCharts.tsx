"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { monthlyData } from "@/data/chartData";

export default function LineCharts() {
    return(
        <div>
            <h2 className="mb-8 text-3x1 font-bold text-gray-900">
                Development over time
            </h2>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 5}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}