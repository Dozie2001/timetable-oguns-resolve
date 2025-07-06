
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Building, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  const weeklySchedule = [
    { time: "8:00 - 10:00", monday: "CSC 401\nRoom 001", tuesday: "CSC 405\nRoom 002", wednesday: "CSC 411\nLab 1", thursday: "", friday: "CSC 403\nRoom 001" },
    { time: "10:00 - 12:00", monday: "", tuesday: "CSC 423\nRoom 003", wednesday: "CSC 401\nLab 2", thursday: "CSC 407\nRoom 004", friday: "" },
    { time: "12:00 - 14:00", monday: "CSC 409\nRoom 002", tuesday: "", wednesday: "", thursday: "CSC 413\nRoom 001", friday: "CSC 415\nLab 1" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Admin!</h1>
        <p className="text-gray-600">Monday, May 5, 2025 | Second Semester (2024/2025)</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Total Courses</p>
              <p className="text-3xl font-bold text-gray-800">42</p>
              <p className="text-sm text-gray-500">Across all levels</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Faculty Members</p>
              <p className="text-3xl font-bold text-gray-800">16</p>
              <p className="text-sm text-gray-500">Active this semester</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-6 text-center">
            <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Classrooms</p>
              <p className="text-3xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-500">Available for scheduling</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Active Conflicts</p>
              <p className="text-3xl font-bold text-gray-800">7</p>
              <p className="text-sm text-gray-500">Requiring resolution</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Timetable Preview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-semibold">Weekly Timetable Preview</CardTitle>
          <Button variant="outline">View Full Timetable</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold bg-gray-50">Time</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Monday</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Tuesday</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Wednesday</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Thursday</th>
                  <th className="text-left p-3 font-semibold bg-gray-50">Friday</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{row.time}</td>
                    <td className="p-3">
                      {row.monday && (
                        <div className="bg-teal-100 text-teal-800 p-2 rounded text-sm whitespace-pre-line">
                          {row.monday}
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      {row.tuesday && (
                        <div className="bg-blue-100 text-blue-800 p-2 rounded text-sm whitespace-pre-line">
                          {row.tuesday}
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      {row.wednesday && (
                        <div className="bg-green-100 text-green-800 p-2 rounded text-sm whitespace-pre-line">
                          {row.wednesday}
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      {row.thursday && (
                        <div className="bg-purple-100 text-purple-800 p-2 rounded text-sm whitespace-pre-line">
                          {row.thursday}
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      {row.friday && (
                        <div className="bg-orange-100 text-orange-800 p-2 rounded text-sm whitespace-pre-line">
                          {row.friday}
                        </div>
                      )}
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

export default Dashboard;
