
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Eye, Edit, FileText, Phone, Mail, Building } from "lucide-react";

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const facultyMembers = [
    {
      id: "CS-001",
      name: "Prof. Adewale Adeyemi",
      rank: "Professor",
      department: "Computer Science",
      email: "adewale.adeyemi@oouagoiwoye.edu.ng",
      phone: "+234 801 123 4567",
      specialization: "Artificial Intelligence, Machine Learning, Neural Networks",
      courses: 3,
      units: 9,
      workload: "12 units",
      status: "Active",
      image: "/lovable-uploads/photo-1461749280684-dccba630e2f6"
    },
    {
      id: "CS-002",
      name: "Dr. Folake Ogunlana",
      rank: "Senior Lecturer",
      department: "Computer Science",
      email: "folake.ogunlana@oouagoiwoye.edu.ng",
      phone: "+234 802 234 5678",
      specialization: "Software Engineering, Database Systems",
      courses: 2,
      units: 6,
      workload: "8 units",
      status: "Active",
      image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: "CS-003",
      name: "Dr. Johnson Adebayo",
      rank: "Senior Lecturer",
      department: "Computer Science",
      email: "johnson.adebayo@oouagoiwoye.edu.ng",
      phone: "+234 803 345 6789",
      specialization: "Computer Networks, Cybersecurity",
      courses: 4,
      units: 12,
      workload: "16 units",
      status: "Active",
      image: "/lovable-uploads/photo-1498050108023-c5249f4df085"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'Active' 
      ? <Badge className="bg-green-100 text-green-800">Active</Badge>
      : <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
  };

  const getWorkloadBadge = (workload: string) => {
    const units = parseInt(workload);
    if (units > 12) {
      return <Badge className="bg-red-100 text-red-800">Workload: {workload}</Badge>;
    } else if (units > 8) {
      return <Badge className="bg-orange-100 text-orange-800">Workload: {workload}</Badge>;
    } else {
      return <Badge className="bg-green-100 text-green-800">Workload: {workload}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Faculty Management</h1>
          <p className="text-gray-600">Manage faculty profiles, teaching preferences, and course assignments</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Faculty
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name or ID..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="computer-science">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-ranks">
              <SelectTrigger>
                <SelectValue placeholder="All Ranks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-ranks">All Ranks</SelectItem>
                <SelectItem value="professor">Professor</SelectItem>
                <SelectItem value="associate">Associate Professor</SelectItem>
                <SelectItem value="senior">Senior Lecturer</SelectItem>
                <SelectItem value="lecturer">Lecturer</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Faculty Members */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Faculty Members (16)</CardTitle>
            <div className="flex items-center space-x-2">
              <Select defaultValue="20">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="name">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="rank">Sort by Rank</SelectItem>
                  <SelectItem value="workload">Sort by Workload</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="border-l-4 border-l-teal-500">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-lg">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>

                    {/* Faculty Info */}
                    <div className="flex-1 lg:ml-6 space-y-2">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{faculty.name}</h3>
                          <p className="text-blue-600 font-medium">{faculty.rank}</p>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          {getWorkloadBadge(faculty.workload)}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">Faculty ID: {faculty.id}</Badge>
                          <Mail className="w-4 h-4" />
                          <span>{faculty.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{faculty.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>{faculty.department}</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-600"><strong>Specialization:</strong> {faculty.specialization}</p>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <Badge variant="outline">AI</Badge>
                        <Badge variant="outline">Machine Learning</Badge>
                        <Badge variant="outline">PhD Supervisor</Badge>
                        <Badge variant="outline">HOD</Badge>
                      </div>
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex-shrink-0 lg:ml-6 space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-800">{faculty.courses}</p>
                          <p className="text-xs text-gray-500">Courses</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">{faculty.units}</p>
                          <p className="text-xs text-gray-500">Credit Units</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">12/16 hrs</p>
                          <p className="text-xs text-gray-500">Teaching Hours</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-blue-600">
                          <Eye className="w-4 h-4 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline" className="text-orange-600">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Faculty;
