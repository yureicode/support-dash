import CharOverview from "@/components/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Ticket,
  CheckCircle,
  Clock,
  AlertCircle,
  MessageSquare,
  User,
  Star,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Ticket Metrics */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Tickets Abertos
              </CardTitle>
              <Ticket className="ml-auto w-5 h-5 text-blue-500" />
            </div>
            <CardDescription>Em andamento no momento</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-blue-600">42</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Resolvidos (Hoje)
              </CardTitle>
              <CheckCircle className="ml-auto w-5 h-5 text-green-500" />
            </div>
            <CardDescription>Finalizados hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-green-600">18</p>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                SLA Cumprido
              </CardTitle>
              <Clock className="ml-auto w-5 h-5 text-purple-500" />
            </div>
            <CardDescription>Dentro do prazo acordado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1">
              <p className="text-base sm:text-lg font-bold text-purple-600">
                92%
              </p>
              <TrendingUp className="w-4 h-4 text-green-500 mb-1" />
              <span className="text-xs text-gray-500">+2%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Satisfação
              </CardTitle>
              <Star className="ml-auto w-5 h-5 text-yellow-500" />
            </div>
            <CardDescription>Avaliação média dos clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1">
              <p className="text-base sm:text-lg font-bold text-yellow-600">
                4.7
              </p>
              <span className="text-xs text-gray-500">/5.0</span>
            </div>
          </CardContent>
        </Card>

        {/* Additional Cards - Second Row */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pendentes
              </CardTitle>
              <AlertCircle className="ml-auto w-5 h-5 text-orange-500" />
            </div>
            <CardDescription>Aguardando resposta</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-orange-600">7</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Interações
              </CardTitle>
              <MessageSquare className="ml-auto w-5 h-5 text-cyan-500" />
            </div>
            <CardDescription>Mensagens hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-cyan-600">56</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                TMA
              </CardTitle>
              <Clock className="ml-auto w-5 h-5 text-red-500" />
            </div>
            <CardDescription>Tempo médio de atendimento</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-red-600">32m</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Atribuídos
              </CardTitle>
              <User className="ml-auto w-5 h-5 text-indigo-500" />
            </div>
            <CardDescription>Tickets designados</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold text-indigo-600">24</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <CharOverview />
      </section>
    </main>
  );
}
