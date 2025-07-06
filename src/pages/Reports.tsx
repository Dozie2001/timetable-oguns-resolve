
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Download, Filter, Eye } from "lucide-react";

const Reports = () => {
  const roomUtilization = [
    { room: "Room 001", capacity: 120, hoursUsed: "32/40", utilization: 80, color: "bg-green-500" },
    { room: "Room 002", capacity: 80, hoursUsed: "36/40", utilization: 90, color: "bg-green-500" },
    { room: "Room 003", capacity: 60, hoursUsed: "28/40", utilization: 70, color: "bg-blue-500" },
    { room: "Lab 1", capacity: 40, hoursUsed: "22/40", utilization: 55, color: "bg-yellow-500" },
  ];

  const facultyWorkload = [
    { faculty: "Dr. Adekoya", courses: 3, units: 9, hours: "12/16 hrs", workload: 75 },
    { faculty: "Prof. Johnson", courses: 2, units: 6, hours: "8/16 hrs", workload: 50 },
    { faculty: "Dr. Olatunji", courses: 4, units: 12, hours: "16/16 hrs", workload: 100 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
        <p className="text-gray-600">Generate and view reports about timetable, resources, faculty workload and conflicts</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Semester</label>
              <Select defaultValue="second-2024-2025">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="second-2024-2025">Second Semester (2024/2025)</SelectItem>
                  <SelectItem value="first-2024-2025">First Semester (2024/2025)</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
              <label className="text-sm font-medium">Export Format</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Room Utilization */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Room Utilization</CardTitle>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600">
                <Eye className="w-4 h-4 mr-1" />
                Full View
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Chart Placeholder */}
            <div className="h-64 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Room Utilization Chart</h3>
                <p className="text-blue-100">A visualization showing classroom usage rates would appear here</p>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Room</th>
                    <th className="text-center p-2 font-semibold">Capacity</th>
                    <th className="text-center p-2 font-semibold">Hours Used</th>
                    <th className="text-left p-2 font-semibold">Utilization %</th>
                  </tr>
                </thead>
                <tbody>
                  {roomUtilization.map((room, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-medium">{room.room}</td>
                      <td className="p-2 text-center">{room.capacity}</td>
                      <td className="p-2 text-center">{room.hoursUsed}</td>
                      <td className="p-2">
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={room.utilization}
                            className="flex-1 h-2"
                          />
                          <span className="text-sm font-medium">{room.utilization}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Workload */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Faculty Workload</CardTitle>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600">
                <Eye className="w-4 h-4 mr-1" />
                Full View
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Chart Placeholder */}
            <div className="h-64 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Faculty Workload Chart</h3>
                <p className="text-green-100">A visualization showing teaching hours per faculty would appear here</p>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Faculty Member</th>
                    <th className="text-center p-2 font-semibold">Courses</th>
                    <th className="text-center p-2 font-semibold">Credit Units</th>
                    <th className="text-center p-2 font-semibold">Teaching Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyWorkload.map((faculty, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-medium">{faculty.faculty}</td>
                      <td className="p-2 text-center">{faculty.courses}</td>
                      <td className="p-2 text-center">{faculty.units}</td>
                      <td className="p-2 text-center">
                        <span className={`px-2 py-1 rounded text-sm ${
                          faculty.workload > 80 ? 'bg-red-100 text-red-800' :
                          faculty.workload > 60 ? 'bg-orange-100 text-orange-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {faculty.hours}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
