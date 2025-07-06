
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Computer, Users } from "lucide-react";

const Classrooms = () => {
  const resources = [
    {
      name: "Room 001",
      type: "Classroom",
      capacity: 60,
      features: ["Projector", "AC"],
      status: "Available",
      utilization: "80%",
      utilizationColor: "bg-green-500"
    },
    {
      name: "Room 002",
      type: "Classroom",
      capacity: 75,
      features: ["Projector", "Smart Board"],
      status: "Occupied",
      utilization: "90%",
      utilizationColor: "bg-green-500"
    },
    {
      name: "Room 003",
      type: "Classroom",
      capacity: 45,
      features: ["AC"],
      status: "Available",
      utilization: "70%",
      utilizationColor: "bg-blue-500"
    },
    {
      name: "CS Lab 1",
      type: "Laboratory",
      capacity: 40,
      features: ["Computers", "Projector", "AC"],
      status: "Maintenance",
      utilization: "55%",
      utilizationColor: "bg-yellow-500"
    },
    {
      name: "CS Lab 2",
      type: "Laboratory",
      capacity: 35,
      features: ["Computers", "Smart Board"],
      status: "Available",
      utilization: "92%",
      utilizationColor: "bg-green-500"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return <Badge className="bg-green-100 text-green-800">Available</Badge>;
      case 'Occupied':
        return <Badge className="bg-red-100 text-red-800">Occupied</Badge>;
      case 'Maintenance':
        return <Badge className="bg-orange-100 text-orange-800">Maintenance</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getFeatureBadge = (feature: string) => {
    const colorMap: { [key: string]: string } = {
      'Projector': 'bg-blue-100 text-blue-800',
      'AC': 'bg-green-100 text-green-800',
      'Smart Board': 'bg-purple-100 text-purple-800',
      'Computers': 'bg-orange-100 text-orange-800'
    };
    return <Badge className={colorMap[feature] || 'bg-gray-100 text-gray-800'}>{feature}</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Resource Management</h1>
          <p className="text-gray-600">Manage classrooms, labs, and equipment for the Computer Science Department</p>
        </div>
      </div>

      {/* Resource Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Resource List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <CardTitle>Classroom & Laboratory Management</CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Resource
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Select defaultValue="all-types">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-types">All Resource Types</SelectItem>
                    <SelectItem value="classroom">Classroom</SelectItem>
                    <SelectItem value="laboratory">Laboratory</SelectItem>
                    <SelectItem value="seminar">Seminar Room</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-capacities">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-capacities">All Capacities</SelectItem>
                    <SelectItem value="small">Small (≤30)</SelectItem>
                    <SelectItem value="medium">Medium (31-60)</SelectItem>
                    <SelectItem value="large">Large (>60)</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-features">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-features">All Features</SelectItem>
                    <SelectItem value="projector">Projector</SelectItem>
                    <SelectItem value="ac">Air Conditioning</SelectItem>
                    <SelectItem value="computers">Computers</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-statuses">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-statuses">All Statuses</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="occupied">Occupied</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Resource Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold bg-gray-50">Resource Name</th>
                      <th className="text-center p-3 font-semibold bg-gray-50">Type</th>
                      <th className="text-center p-3 font-semibold bg-gray-50">Capacity</th>
                      <th className="text-left p-3 font-semibold bg-gray-50">Features</th>
                      <th className="text-center p-3 font-semibold bg-gray-50">Status</th>
                      <th className="text-center p-3 font-semibold bg-gray-50">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resources.map((resource, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{resource.name}</td>
                        <td className="p-3 text-center">
                          <Badge variant="outline">{resource.type}</Badge>
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span>{resource.capacity}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {resource.features.map((feature, idx) => (
                              <span key={idx}>{getFeatureBadge(feature)}</span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 text-center">{getStatusBadge(resource.status)}</td>
                        <td className="p-3">
                          <div className="flex justify-center space-x-2">
                            <Button size="sm" variant="outline" className="text-blue-600 hover:bg-blue-50">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-orange-600 hover:bg-orange-50">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Utilization */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resource Utilization</CardTitle>
              <Select defaultValue="this-week">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="this-semester">This Semester</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Utilization chart will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Most Utilized</span>
                <div className="text-right">
                  <p className="font-semibold">CS Lab 2</p>
                  <p className="text-sm text-green-600">92% usage</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Least Utilized</span>
                <div className="text-right">
                  <p className="font-semibold">Room 003</p>
                  <p className="text-sm text-red-600">32% usage</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
