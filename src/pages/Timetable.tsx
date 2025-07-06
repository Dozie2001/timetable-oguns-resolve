
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Filter, Download } from "lucide-react";

const Timetable = () => {
  const [currentWeek, setCurrentWeek] = useState(6);
  const [viewMode, setViewMode] = useState('Weekly');

  const timetableData = [
    {
      time: "8:00 - 9:00",
      monday: { course: "CSC 401", room: "LG 001", lecturer: "Dr. Adekoya", color: "bg-green-100 text-green-800 border-green-200" },
      tuesday: null,
      wednesday: { course: "CSC 407", room: "CSC Lab 1", lecturer: "Dr. Olatunji", color: "bg-orange-100 text-orange-800 border-orange-200" },
      thursday: null,
      friday: { course: "CSC 413", room: "LG 003", lecturer: "Prof. Johnson", color: "bg-blue-100 text-blue-800 border-blue-200" }
    },
    {
      time: "9:00 - 10:00",
      monday: { course: "CSC 401", room: "LG 001", lecturer: "Dr. Adekoya", color: "bg-green-100 text-green-800 border-green-200" },
      tuesday: { course: "CSC 409", room: "LG 002", lecturer: "Dr. Adebayo", color: "bg-red-100 text-red-800 border-red-200" },
      wednesday: { course: "CSC 407", room: "CSC Lab 1", lecturer: "Dr. Olatunji", color: "bg-orange-100 text-orange-800 border-orange-200" },
      thursday: { course: "CSC 415", room: "LG 004", lecturer: "Prof. Akinola", color: "bg-purple-100 text-purple-800 border-purple-200" },
      friday: null
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Timetable View</h1>
          <p className="text-gray-600">View and manage the department's teaching schedule</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filter Options</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Level</label>
              <Select defaultValue="all-levels">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-levels">All Levels</SelectItem>
                  <SelectItem value="100">100 Level</SelectItem>
                  <SelectItem value="200">200 Level</SelectItem>
                  <SelectItem value="300">300 Level</SelectItem>
                  <SelectItem value="400">400 Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Lecturer</label>
              <Select defaultValue="all-lecturers">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-lecturers">All Lecturers</SelectItem>
                  <SelectItem value="dr-adekoya">Dr. Adekoya</SelectItem>
                  <SelectItem value="prof-johnson">Prof. Johnson</SelectItem>
                  <SelectItem value="dr-olatunji">Dr. Olatunji</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Venue</label>
              <Select defaultValue="all-venues">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-venues">All Venues</SelectItem>
                  <SelectItem value="lg-001">LG 001</SelectItem>
                  <SelectItem value="lg-002">LG 002</SelectItem>
                  <SelectItem value="lab-1">CSC Lab 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Course</label>
              <Select defaultValue="all-courses">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-courses">All Courses</SelectItem>
                  <SelectItem value="csc-401">CSC 401</SelectItem>
                  <SelectItem value="csc-407">CSC 407</SelectItem>
                  <SelectItem value="csc-409">CSC 409</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="sm">
              Reset
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Timetable */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <CardTitle>Computer Science Department Timetable</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  className={viewMode === 'Weekly' ? 'bg-blue-100 text-blue-600' : ''}
                  onClick={() => setViewMode('Weekly')}
                >
                  Weekly
                </Button>
                <Button
                  variant="outline"
                  className={viewMode === 'Daily' ? 'bg-blue-100 text-blue-600' : ''}
                  onClick={() => setViewMode('Daily')}
                >
                  Daily
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Week Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" onClick={() => setCurrentWeek(prev => Math.max(1, prev - 1))}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <h3 className="font-semibold text-lg">First Semester, 2024/2025 (Week {currentWeek})</h3>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCurrentWeek(prev => prev + 1)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Navigation */}
          <div className="flex justify-center space-x-2 mb-6">
            <Button variant="outline" size="sm">Today</Button>
            <Button variant="outline" size="sm">This Week</Button>
          </div>

          {/* Timetable Grid */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-left min-w-[120px]">Time</th>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-center min-w-[150px]">Monday</th>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-center min-w-[150px]">Tuesday</th>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-center min-w-[150px]">Wednesday</th>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-center min-w-[150px]">Thursday</th>
                  <th className="border border-gray-300 p-3 bg-gray-50 font-semibold text-center min-w-[150px]">Friday</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-3 font-medium bg-gray-50">{row.time}</td>
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                      <td key={day} className="border border-gray-300 p-2 text-center">
                        {row[day as keyof typeof row] ? (
                          <div className={`p-3 rounded-lg border-2 ${(row[day as keyof typeof row] as any).color}`}>
                            <div className="font-semibold text-sm">{(row[day as keyof typeof row] as any).course}</div>
                            <div className="text-xs mt-1">{(row[day as keyof typeof row] as any).room}</div>
                            <div className="text-xs">{(row[day as keyof typeof row] as any).lecturer}</div>
                          </div>
                        ) : (
                          <div className="text-gray-400 text-sm py-8">No Class</div>
                        )}
                      </td>
                    ))}
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

export default Timetable;
