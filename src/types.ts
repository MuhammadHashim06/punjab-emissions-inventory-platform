/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UserRole {
  ADMIN = 'System Administrator',
  MANAGER = 'Inventory Manager',
  FOCAL_PERSON = 'Department Focal Person',
  GIS_SPECIALIST = 'GIS Specialist',
  AUDITOR = 'Auditor',
  EXECUTIVE = 'Executive Viewer',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

export type RequestStatus = 'Draft' | 'Sent' | 'Submitted' | 'Under Review' | 'Approved' | 'Rejected';

export interface DataRequest {
  id: string;
  title: string;
  department: string;
  sector: string;
  year: number;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: RequestStatus;
  instructions: string;
  assignedFocalPersonId: string;
}

export interface InventoryRun {
  id: string;
  year: number;
  status: 'Draft' | 'Calculated' | 'Under Approval' | 'Frozen' | 'Published';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface EmissionFactor {
  id: string;
  sector: string;
  fuelType: string;
  pollutant: string;
  unit: string;
  value: number;
  source: string;
  version: string;
  effectiveDate: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  module: string;
  action: string;
  details: string;
}

export interface DistrictEmission {
  district: string;
  lat: number;
  lng: number;
  co2: number;
  ch4: number;
  n2o: number;
  pm25: number;
  nox: number;
  so2: number;
}
