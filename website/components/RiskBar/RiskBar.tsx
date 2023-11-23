"use client";

import { Progress } from "@mantine/core";

interface RiskBarProps {
    incomeAmount: number;
    taxAmount: number;
}

export default function RiskBar({incomeAmount, taxAmount}: RiskBarProps) {
    return (
        <Progress.Root size={20}>
            <Progress.Section value={incomeAmount / (taxAmount + incomeAmount) * 100 } color="green">
                <Progress.Label>Income</Progress.Label>
            </Progress.Section>

            <Progress.Section value={taxAmount / (taxAmount + incomeAmount) * 100 } color="red">
                <Progress.Label>Tax</Progress.Label>
            </Progress.Section>
        </Progress.Root>

    );
}