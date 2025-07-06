
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Eye, Edit, Trash2 } from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      code: "CSC 101",
      title: "Introduction to Computer Science",
      level: "100",
      units: 3,
      semester: "First",
      type: "Compulsory",
      faculty: "Dr. Adewale Olumide",
      status: "Active"
    },
    {
      code: "CSC 102",
      title: "Introduction to Problem Solving",
      level: "100",
      units: 2,
      semester: "First",
      type: "Compulsory",
      faculty: "Prof. Johnson Ade",
      status: "Active"
    },
    {
      code: "CSC 201",
      title: "Programming Concepts and Python",
      level: "200",
      units: 3,
      semester: "First",
      type: "Compulsory",
      faculty: "Dr. Olatunji Mary",
      status: "Active"
    },
    {
      code: "CSC 202",
      title: "Data Structures and Algorithms",
      level: "200",
      units: 3,
      semester: "Second",
      type: "Compulsory",
      faculty: "Dr. Adekoya Femi",
      status: "Inactive"
    },
    {
      code: "CSC 301",
      title: "Object-Oriented Programming",
      level: "300",
      units: 3,
      semester: "First",
      type: "Compulsory",
      faculty: "Dr. Babatunde Ajayi",
      status: "Active"
    },
    {
      code: "CSC 302",
      title: "Database Management",
      level: "300",
      units: 3,
      semester: "First",
      type: "Compulsory",
      faculty: "Prof. Adeleke",
      status: "Active"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'Active' 
      ? <Badge className="bg-green-100 text-green-800">Active</Badge>
      : <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
  };

  const getTypeBadge = (type: string) => {
    return <Badge className="bg-red-100 text-red-800">{type}</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
          <p className="text-gray-600">Add, edit, and manage all courses in the Computer Science department</p>
        </div>
      </div>

      {/* Course List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <CardTitle>Course List</CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Course
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="all-levels">
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-levels">All Levels</SelectItem>
                <SelectItem value="100">100 Level</SelectItem>
                <SelectItem value="200">200 Level</SelectItem>
                <SelectItem value="300">300 Level</SelectItem>
                <SelectItem value="400">400 Level</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-semesters">
              <SelectTrigger>
                <SelectValue placeholder="All Semesters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-semesters">All Semesters</SelectItem>
                <SelectItem value="first">First Semester</SelectItem>
                <SelectItem value="second">Second Semester</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-types">
              <SelectTrigger>
                <SelectValue placeholder="All Course Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Course Types</SelectItem>
                <SelectItem value="compulsory">Compulsory</SelectItem>
                <SelectItem value="elective">Elective</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold bg-gray-50">Course Code</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Course Title</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Level</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Units</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Semester</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Course Type</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Assigned Faculty</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Status</th>
                  <th className="text-center p-3 font-semibold bg-gray-50">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono font-medium">{course.code}</td>
                    <td className="p-3">
                      <div className="font-medium">{course.title}</div>
                    </td>
                    <td className="p-3 text-center">
                      <Badge variant="outline">{course.level}</Badge>
                    </td>
                    <td className="p-3 text-center">{course.units}</td>
                    <td className="p-3 text-center">{course.semester}</td>
                    <td className="p-3 text-center">{getTypeBadge(course.type)}</td>
                    <td className="p-3">{course.faculty}</td>
                    <td className="p-3 text-center">{getStatusBadge(course.status)}</td>
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
  );
};

export default Courses;
