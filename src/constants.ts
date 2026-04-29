import { UserRole, User, DataRequest, EmissionFactor, DistrictEmission } from './types';

export const PUNJAB_DISTRICTS = [
  'Lahore', 'Faisalabad', 'Rawalpindi', 'Gujranwala', 'Multan', 'Sialkot', 
  'Bahawalpur', 'Sargodha', 'Sheikhupura', 'Jhang', 'Rahim Yar Khan', 'Kasur'
];

export const DEPARTMENTS = [
  'Environmental Protection Department',
  'Transport Department',
  'Agriculture Department',
  'Industries, Commerce & Investment',
  'Energy Department',
  'Punjab Information Technology Board'
];

export const SECTORS = [
  'Energy (Stationary)',
  'Transport',
  'Agriculture',
  'Waste',
  'Industrial Processes & Product Use (IPPU)',
  'Forestry & Land Use'
];

export const POLLUTANTS = ['CO2', 'CH4', 'N2O', 'PM2.5', 'NOx', 'SO2', 'CO', 'NH3'];

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Zahid Khan', email: 'admin@punjab.gov.pk', role: UserRole.ADMIN },
  { id: '2', name: 'Sara Ahmed', email: 'manager@punjab.gov.pk', role: UserRole.MANAGER },
  { id: '3', name: 'Bilal Malik', email: 'focal@epa.punjab.gov.pk', role: UserRole.FOCAL_PERSON, department: 'Environmental Protection Department' },
  { id: '4', name: 'Asma Bibi', email: 'gis@punjab.gov.pk', role: UserRole.GIS_SPECIALIST },
  { id: '5', name: 'Farhan Sheikh', email: 'auditor@punjab.gov.pk', role: UserRole.AUDITOR },
  { id: '6', name: 'Min. Usman Buzdar', email: 'executive@punjab.gov.pk', role: UserRole.EXECUTIVE }
];

export const MOCK_REQUESTS: DataRequest[] = [
  {
    id: 'REQ-001',
    title: 'Fuel Consumption Data 2024',
    department: 'Transport Department',
    sector: 'Transport',
    year: 2024,
    dueDate: '2024-06-30',
    priority: 'High',
    status: 'Under Review',
    instructions: 'Provide monthly diesel and petrol consumption by vehicle type.',
    assignedFocalPersonId: '3'
  },
  {
    id: 'REQ-002',
    title: 'Crop Residue Burning Survey',
    department: 'Agriculture Department',
    sector: 'Agriculture',
    year: 2024,
    dueDate: '2024-05-15',
    priority: 'Medium',
    status: 'Sent',
    instructions: 'Estimate areas of stubble burning in northern districts.',
    assignedFocalPersonId: '3'
  }
];

const DISTRICT_COORDS: Record<string, { lat: number; lng: number }> = {
  'Lahore': { lat: 31.5204, lng: 74.3587 },
  'Faisalabad': { lat: 31.4187, lng: 73.0791 },
  'Rawalpindi': { lat: 33.5651, lng: 73.0169 },
  'Gujranwala': { lat: 32.1877, lng: 74.1945 },
  'Multan': { lat: 30.1575, lng: 71.5249 },
  'Sialkot': { lat: 32.4945, lng: 74.5229 },
  'Bahawalpur': { lat: 29.3544, lng: 71.6911 },
  'Sargodha': { lat: 32.0740, lng: 72.6861 },
  'Sheikhupura': { lat: 31.7131, lng: 73.9783 },
  'Jhang': { lat: 31.2681, lng: 72.3181 },
  'Rahim Yar Khan': { lat: 28.4195, lng: 70.3026 },
  'Kasur': { lat: 31.1179, lng: 74.4484 }
};

export const MOCK_EMISSIONS: DistrictEmission[] = PUNJAB_DISTRICTS.map(d => ({
  district: d,
  lat: DISTRICT_COORDS[d]?.lat || 31.17,
  lng: DISTRICT_COORDS[d]?.lng || 72.70,
  co2: Math.floor(Math.random() * 5000) + 1000,
  ch4: Math.floor(Math.random() * 500),
  n2o: Math.floor(Math.random() * 100),
  pm25: Math.floor(Math.random() * 1500) + 200,
  nox: Math.floor(Math.random() * 800),
  so2: Math.floor(Math.random() * 300)
}));

export const MOCK_FACTORS: EmissionFactor[] = [
  {
    id: 'EF-001',
    sector: 'Energy',
    fuelType: 'Diesel',
    pollutant: 'CO2',
    unit: 'kg/TJ',
    value: 74100,
    source: 'IPCC 2006',
    version: '1.0',
    effectiveDate: '2023-01-01'
  },
  {
    id: 'EF-002',
    sector: 'Transport',
    fuelType: 'Petrol',
    pollutant: 'CO2',
    unit: 'kg/TJ',
    value: 69300,
    source: 'IPCC 2006',
    version: '1.2',
    effectiveDate: '2023-01-01'
  }
];
