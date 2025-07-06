
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, User, CheckCircle, XCircle } from "lucide-react";

const Conflicts = () => {
  const conflicts = [
    {
      id: "CON-001",
      type: "Room Conflict",
      priority: "High",
      description: "Room LG 001 is double-booked",
      courses: ["CSC 401 - Dr. Adekoya", "CSC 403 - Prof. Johnson"],
      time: "Monday, 10:00 - 12:00",
      room: "LG 001",
      status: "Pending",
      detected: "2 hours ago"
    },
    {
      id: "CON-002",
      type: "Faculty Conflict",
      priority: "Medium",
      description: "Dr. Olatunji scheduled for two classes simultaneously",
      courses: ["CSC 407 - CSC Lab 1", "CSC 409 - LG 002"],
      time: "Wednesday, 9:00 - 10:00",
      room: "Multiple",
      status: "Resolved",
      detected: "1 day ago"
    },
    {
      id: "CON-003",
      type: "Time Conflict",
      priority: "Low",
      description: "Back-to-back classes in different buildings",
      courses: ["CSC 415 - Lab 1", "CSC 413 - LG 003"],
      time: "Friday, 11:00 - 13:00",
      room: "Lab 1 → LG 003",
      status: "Reviewing",
      detected: "3 hours ago"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge className="bg-red-100 text-red-800">High Priority</Badge>;
      case 'Medium':
        return <Badge className="bg-orange-100 text-orange-800">Medium Priority</Badge>;
      case 'Low':
        return <Badge className="bg-yellow-100 text-yellow-800">Low Priority</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Badge className="bg-red-100 text-red-800">Pending</Badge>;
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'Reviewing':
        return <Badge className="bg-blue-100 text-blue-800">Reviewing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getConflictIcon = (type: string) => {
    switch (type) {
      case 'Room Conflict':
        return <MapPin className="w-5 h-5 text-red-500" />;
      case 'Faculty Conflict':
        return <User className="w-5 h-5 text-orange-500" />;
      case 'Time Conflict':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Conflict Resolution</h1>
          <p className="text-gray-600">Manage and resolve scheduling conflicts automatically or manually</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            Scan for Conflicts
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Auto-Resolve All
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Active Conflicts</p>
              <p className="text-3xl font-bold text-gray-800">7</p>
              <p className="text-sm text-gray-500">Requiring attention</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Pending Review</p>
              <p className="text-3xl font-bold text-gray-800">3</p>
              <p className="text-sm text-gray-500">Awaiting manual review</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Auto-Resolved</p>
              <p className="text-3xl font-bold text-gray-800">15</p>
              <p className="text-sm text-gray-500">This week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <XCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="space-y-1">
              <p className="text-sm text-gray-600 uppercase tracking-wide">Manual Interventions</p>
              <p className="text-3xl font-bold text-gray-800">2</p>
              <p className="text-sm text-gray-500">Required manual fixes</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Conflicts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span>Active Conflicts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conflicts.map((conflict, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-4">
                      {getConflictIcon(conflict.type)}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-gray-800">{conflict.type}</h3>
                          {getPriorityBadge(conflict.priority)}
                          {getStatusBadge(conflict.status)}
                        </div>
                        <p className="text-gray-600">{conflict.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500"><strong>Affected Courses:</strong></p>
                            {conflict.courses.map((course, idx) => (
                              <p key={idx} className="text-gray-700">• {course}</p>
                            ))}
                          </div>
                          <div className="space-y-1">
                            <p className="text-gray-500"><strong>Time:</strong> {conflict.time}</p>
                            <p className="text-gray-500"><strong>Room:</strong> {conflict.room}</p>
                            <p className="text-gray-500"><strong>Detected:</strong> {conflict.detected}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Auto-Resolve
                      </Button>
                      <Button size="sm" variant="outline">
                        Manual Fix
                      </Button>
                      <Button size="sm" variant="outline" className="text-blue-600">
                        View Details
                      </Button>
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

export default Conflicts;
