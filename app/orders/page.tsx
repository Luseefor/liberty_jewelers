import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Eye, RotateCcw, Truck, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "March 15, 2024",
      total: "$2,899.00",
      status: "Delivered",
      statusColor: "text-green-600 dark:text-green-400",
      icon: <CheckCircle className="h-4 w-4" />,
      items: [
        { name: "Diamond Engagement Ring", price: "$2,799.00" },
        { name: "Ring Box", price: "$100.00" }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "April 2, 2024",
      total: "$1,299.00",
      status: "In Transit",
      statusColor: "text-blue-600 dark:text-blue-400",
      icon: <Truck className="h-4 w-4" />,
      items: [
        { name: "Pearl Necklace", price: "$1,299.00" }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "April 10, 2024",
      total: "$899.00",
      status: "Processing",
      statusColor: "text-yellow-600 dark:text-yellow-400",
      icon: <Clock className="h-4 w-4" />,
      items: [
        { name: "Tennis Bracelet", price: "$899.00" }
      ]
    }
  ]

  return (
    <PageLayout title="My Orders - Liberty Gold & Diamonds">
      {/* Orders Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Orders
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track and manage your jewelry orders
            </p>
          </div>
          
          {/* Orders List */}
          <div className="space-y-6">
            {orders.map((order, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        Order {order.id}
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Placed on {order.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <div className={`flex items-center space-x-1 ${order.statusColor}`}>
                        {order.icon}
                        <span className="text-sm font-medium">{order.status}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {order.total}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <span className="text-gray-900 dark:text-white">{item.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Package className="h-4 w-4 mr-2" />
                      Track Package
                    </Button>
                    {order.status === "Delivered" && (
                      <Button variant="outline" className="flex-1">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Return/Exchange
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State for No Orders */}
          {orders.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No orders yet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start shopping to see your orders here
              </p>
              <Link href="/collections">
                <Button>
                  Browse Collections
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}