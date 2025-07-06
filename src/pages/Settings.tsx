
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const [autoResolveConflicts, setAutoResolveConflicts] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [publicViewAccess, setPublicViewAccess] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">System Settings</h1>
        <p className="text-gray-600">Configure the timetable management system settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
          <TabsTrigger value="scheduling">Scheduling Rules</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* System Information */}
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution Name</Label>
                  <Input
                    id="institution"
                    defaultValue="Olabisi Onabanjo University"
                    placeholder="The name of your institution"
                  />
                  <p className="text-sm text-gray-500">The name of your institution</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department Name</Label>
                  <Input
                    id="department"
                    defaultValue="Department of Computer Science"
                    placeholder="The name of your department"
                  />
                  <p className="text-sm text-gray-500">The name of your department</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-email">System Email</Label>
                  <Input
                    id="system-email"
                    type="email"
                    defaultValue="cs-timetable@oouagoiwoye.edu.ng"
                    placeholder="Email used for notifications and communications"
                  />
                  <p className="text-sm text-gray-500">Email used for notifications and communications</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-contact">Administrator Contact</Label>
                  <Input
                    id="admin-contact"
                    defaultValue="+234 801 234 5678"
                    placeholder="Contact number for technical support"
                  />
                  <p className="text-sm text-gray-500">Contact number for technical support</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Default Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Default Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="day-start">Default Day Start Time</Label>
                  <Input
                    id="day-start"
                    type="time"
                    defaultValue="08:00"
                  />
                  <p className="text-sm text-gray-500">Default start time for scheduling</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="day-end">Default Day End Time</Label>
                  <Input
                    id="day-end"
                    type="time"
                    defaultValue="18:00"
                  />
                  <p className="text-sm text-gray-500">Default end time for scheduling</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slot-duration">Default Slot Duration</Label>
                  <Select defaultValue="1-hour">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30-minutes">30 minutes</SelectItem>
                      <SelectItem value="1-hour">1 hour</SelectItem>
                      <SelectItem value="1.5-hours">1.5 hours</SelectItem>
                      <SelectItem value="2-hours">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">Default duration for a class session</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="week-start">Week Start Day</Label>
                  <Select defaultValue="monday">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sunday">Sunday</SelectItem>
                      <SelectItem value="monday">Monday</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">First day of the week in timetable view</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timetable-view">Default Timetable View</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily View</SelectItem>
                      <SelectItem value="weekly">Weekly View</SelectItem>
                      <SelectItem value="monthly">Monthly View</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">Default timetable display format</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <Select defaultValue="12-hour">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12-hour">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24-hour">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500">Format for displaying time</p>
                </div>
              </div>

              {/* System Options */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="auto-resolve">Automatically attempt to resolve scheduling conflicts</Label>
                    <p className="text-sm text-gray-500">System will try to automatically resolve conflicts when detected</p>
                  </div>
                  <Switch
                    id="auto-resolve"
                    checked={autoResolveConflicts}
                    onCheckedChange={setAutoResolveConflicts}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="email-notifications">Enable email notifications for important updates</Label>
                    <p className="text-sm text-gray-500">Send notifications about schedule changes and conflicts</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="public-access">Enable public timetable viewing (no login required)</Label>
                    <p className="text-sm text-gray-500">Allow external users to view timetables without authentication</p>
                  </div>
                  <Switch
                    id="public-access"
                    checked={publicViewAccess}
                    onCheckedChange={setPublicViewAccess}
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Save Changes
                </Button>
                <Button variant="outline">
                  Reset Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">User management settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Academic Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Academic calendar settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduling">
          <Card>
            <CardHeader>
              <CardTitle>Scheduling Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Scheduling rules configuration will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Appearance settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Notification settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup">
          <Card>
            <CardHeader>
              <CardTitle>Backup & Restore</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Backup and restore settings will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center text-sm text-gray-500 pt-6 border-t">
        © 2025 Olabisi Onabanjo University, Department of Computer Science. All rights reserved.
        <br />
        v1.0
      </div>
    </div>
  );
};

export default Settings;
