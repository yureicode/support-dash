"use client";
import {
  Ticket,
  FileText,
  Lock,
  HelpCircle,
  Package,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { ChartConfig } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { createElement } from "react";

const CharOverview = () => {
  const chartData = [
    {
      month: "Jan",
      nota_fiscal: 45,
      erro_acesso: 32,
      duvida: 28,
      devolucao: 15,
      outros: 12,
    },
    {
      month: "Fev",
      nota_fiscal: 38,
      erro_acesso: 41,
      duvida: 22,
      devolucao: 18,
      outros: 9,
    },
    {
      month: "Mar",
      nota_fiscal: 52,
      erro_acesso: 29,
      duvida: 35,
      devolucao: 12,
      outros: 14,
    },
    {
      month: "Abr",
      nota_fiscal: 47,
      erro_acesso: 36,
      duvida: 30,
      devolucao: 20,
      outros: 11,
    },
    {
      month: "Mai",
      nota_fiscal: 55,
      erro_acesso: 40,
      duvida: 25,
      devolucao: 15,
      outros: 8,
    },
    {
      month: "Jun",
      nota_fiscal: 60,
      erro_acesso: 35,
      duvida: 40,
      devolucao: 22,
      outros: 10,
    },
  ];

  const chartConfig = {
    nota_fiscal: {
      label: "Nota Fiscal",
      color: "#3b82f6",
      icon: FileText,
    },
    erro_acesso: {
      label: "Erro de Acesso",
      color: "#ef4444",
      icon: Lock,
    },
    duvida: {
      label: "Dúvidas",
      color: "#f59e0b",
      icon: HelpCircle,
    },
    devolucao: {
      label: "Devolução",
      color: "#10b981",
      icon: Package,
    },
    outros: {
      label: "Outros",
      color: "#8b5cf6",
      icon: Ticket,
    },
  } satisfies ChartConfig;

  const renderIcon = (value: keyof typeof chartConfig) => {
    const configItem = chartConfig[value];
    if (!configItem?.icon) return null;
    return createElement(configItem.icon, { className: "w-3 h-3" });
  };

  const totalGeral = chartData.reduce((sum, month) => {
    return (
      sum +
      month.nota_fiscal +
      month.erro_acesso +
      month.duvida +
      month.devolucao +
      month.outros
    );
  }, 0);

  const ultimoMes = chartData[chartData.length - 1];
  const totalUltimoMes =
    ultimoMes.nota_fiscal +
    ultimoMes.erro_acesso +
    ultimoMes.duvida +
    ultimoMes.devolucao +
    ultimoMes.outros;

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <CardTitle className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
              <Ticket className="w-5 h-5 text-blue-500" />
              Visão Geral de Atendimentos
            </CardTitle>
            <CardDescription className="mt-1">
              Distribuição por tipo de atendimento (últimos 6 meses)
            </CardDescription>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <span className="sr-only sm:not-sr-only">Últimos 6 meses</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Últimos 3 meses</DropdownMenuItem>
              <DropdownMenuItem>Últimos 6 meses</DropdownMenuItem>
              <DropdownMenuItem>Último ano</DropdownMenuItem>
              <DropdownMenuItem>Personalizado</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        <div className="flex flex-col gap-6">
          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Ticket className="w-4 h-4 text-blue-500" />
                Total Geral
              </div>
              <div className="text-2xl sm:text-3xl font-bold mt-1">
                {totalGeral}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Período completo
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Último Mês
              </div>
              <div className="text-2xl sm:text-3xl font-bold mt-1">
                {totalUltimoMes}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Junho 2023</div>
            </div>

            <div className="border rounded-lg p-4 hidden sm:block">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FileText className="w-4 h-4 text-blue-400" />
                Mais Comum
              </div>
              <div className="text-2xl sm:text-3xl font-bold mt-1">
                Nota Fiscal
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                45% dos casos
              </div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="h-[250px] sm:h-[300px] lg:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                accessibilityLayer
              >
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    fontSize: "14px",
                  }}
                  formatter={(value, name) => [
                    `${value} atendimentos`,
                    chartConfig[name as keyof typeof chartConfig]?.label ||
                      name,
                  ]}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      {renderIcon(value as keyof typeof chartConfig)}
                      {chartConfig[value as keyof typeof chartConfig]?.label ||
                        value}
                    </span>
                  )}
                />
                <Bar
                  dataKey="nota_fiscal"
                  fill={chartConfig.nota_fiscal.color}
                  radius={[4, 4, 0, 0]}
                  name="nota_fiscal"
                />
                <Bar
                  dataKey="erro_acesso"
                  fill={chartConfig.erro_acesso.color}
                  radius={[4, 4, 0, 0]}
                  name="erro_acesso"
                />
                <Bar
                  dataKey="duvida"
                  fill={chartConfig.duvida.color}
                  radius={[4, 4, 0, 0]}
                  name="duvida"
                />
                <Bar
                  dataKey="devolucao"
                  fill={chartConfig.devolucao.color}
                  radius={[4, 4, 0, 0]}
                  name="devolucao"
                />
                <Bar
                  dataKey="outros"
                  fill={chartConfig.outros.color}
                  radius={[4, 4, 0, 0]}
                  name="outros"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharOverview;
