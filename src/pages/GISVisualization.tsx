import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Map as MapIcon, 
  Layers, 
  Maximize2, 
  Filter, 
  Info, 
  MousePointer2, 
  TrendingUp, 
  Navigation,
  Activity,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PUNJAB_DISTRICTS, MOCK_EMISSIONS } from '../constants';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIconRetina,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const GISVisualization: React.FC = () => {
    const [selectedDistrict, setSelectedDistrict] = useState<any>(null);
    const [activeLayer, setActiveLayer] = useState('co2');

    return (
        <div className="space-y-6 h-[calc(100vh-140px)] flex flex-col">
            <div className="flex justify-between items-center shrink-0 px-2">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase flex items-center gap-2">
                        <MapIcon className="w-5 h-5 text-emerald-600" />
                        Spatial Analysis Matrix
                    </h1>
                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.2em] mt-1">Satellite Grounding & Regional Emissions Topology</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-10 text-[10px] font-black uppercase tracking-widest border-emerald-100 text-emerald-800"><Layers className="w-4 h-4 mr-2" /> Topo Layers</Button>
                    <Button className="h-10 text-[10px] font-black uppercase tracking-widest bg-forest shadow-xl shadow-emerald-900/10"><Maximize2 className="w-4 h-4 mr-2" /> Expand Viewer</Button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                {/* Control Panel */}
                <div className="lg:col-span-3 space-y-4 overflow-y-auto pr-1 custom-scrollbar">
                    <Card className="p-5 border-emerald-50 bg-emerald-50/10">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Primary Indicator</label>
                                <select 
                                    value={activeLayer}
                                    onChange={(e) => setActiveLayer(e.target.value)}
                                    className="w-full bg-white border border-emerald-100 rounded-xl p-3 text-[11px] font-black uppercase outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                                >
                                    <option value="co2">CO2 Footprint (kt)</option>
                                    <option value="pm25">PM2.5 Density (ug/m3)</option>
                                    <option value="nox">NOx Saturation</option>
                                    <option value="ch4">Methane Detection</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Inventory Epoch</label>
                                <select className="w-full bg-white border border-emerald-100 rounded-xl p-3 text-[11px] font-black uppercase outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm">
                                    <option>Annual Cycle 2024</option>
                                    <option>Annual Cycle 2023</option>
                                    <option>Projection 2030 (Net Zero)</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Sector Exclusion</label>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    {['Transport', 'Energy', 'Agri', 'Waste'].map(s => (
                                        <button key={s} className="px-3 py-2.5 bg-white border border-emerald-100 rounded-xl text-[10px] font-black hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all uppercase tracking-tighter shadow-sm">{s}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-forest text-white border-none shadow-2xl relative overflow-hidden">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-6 flex items-center gap-2">
                             <Navigation className="w-3.5 h-3.5" />
                             Spectral Legend
                        </h4>
                        <div className="space-y-3 relative z-10">
                            {[
                                { range: '4000+ kt (Critical)', color: 'bg-emerald-950 border-emerald-500' },
                                { range: '2500 - 4000 (High)', color: 'bg-emerald-700' },
                                { range: '1000 - 2500 (Mid)', color: 'bg-emerald-500' },
                                { range: '< 1000 kt (Low)', color: 'bg-emerald-200' },
                            ].map((l, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${l.color} border shadow-[0_0_12px_rgba(16,185,129,0.3)]`}></div>
                                    <span className="text-[10px] font-black uppercase tracking-tight text-emerald-100">{l.range}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-4 border-t border-white/10 uppercase italic">
                            <p className="text-[9px] text-emerald-100/30 font-black tracking-widest">Protocol: Hybrid Raster Gridding</p>
                        </div>
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    </Card>

                    {selectedDistrict && (
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                            <Card className="p-6 border-emerald-500 bg-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 z-20">
                                     <button onClick={() => setSelectedDistrict(null)} className="w-6 h-6 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-800 hover:bg-forest hover:text-white transition-colors text-lg">×</button>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black text-forest uppercase tracking-tighter mb-4">{selectedDistrict.district}</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-gray-400">CO2 Footprint:</span>
                                            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{selectedDistrict.co2} kt</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-gray-400">PM2.5 Conc:</span>
                                            <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded">{selectedDistrict.pm25} ug/m3</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-gray-400">Saturation Score:</span>
                                            <Badge variant="error" className="text-[8px] font-black uppercase px-2 py-0.5">Critical Hotspot</Badge>
                                        </div>
                                    </div>
                                    <Button className="w-full mt-6 bg-forest text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all">Detailed Topology Report</Button>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </div>

                {/* Map Interactive Area */}
                <Card className="lg:col-span-9 p-0 bg-emerald-950 overflow-hidden relative border-none shadow-[0_0_50px_-12px_rgba(6,78,59,0.3)] min-h-[400px]">
                    {/* Simulated Map Header */}
                    <div className="absolute top-4 left-4 z-40 flex gap-2">
                        <div className="px-6 py-3 bg-forest/80 backdrop-blur-xl rounded-[20px] border border-emerald-100/10 flex items-center gap-4 shadow-2xl">
                             <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
                             <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">PNJ-SPATIAL-GRID_V4 OPERATIONAL</span>
                        </div>
                    </div>

                    <div className="w-full h-full z-0 leaflet-container-custom">
                        <MapContainer 
                            center={[31.17, 72.70]} 
                            zoom={7} 
                            style={{ height: '100%', width: '100%', background: '#064e3b' }}
                            zoomControl={false}
                            scrollWheelZoom={true}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            />
                            
                            {MOCK_EMISSIONS.map((d, i) => {
                                const val = (activeLayer === 'co2' ? d.co2 : d.pm25);
                                const isPeak = val > 4000;
                                const color = isPeak ? '#064e3b' : val > 2000 ? '#047857' : val > 1000 ? '#10b981' : '#a7f3d0';
                                const radius = Math.sqrt(val) * 0.5;

                                return (
                                    <CircleMarker 
                                        key={d.district}
                                        center={[d.lat, d.lng]}
                                        radius={radius + 5}
                                        pathOptions={{
                                            fillColor: color,
                                            fillOpacity: 0.8,
                                            color: isPeak ? '#10b981' : 'white',
                                            weight: isPeak ? 2 : 1,
                                        }}
                                        eventHandlers={{
                                            click: () => setSelectedDistrict(d)
                                        }}
                                    >
                                        <Popup className="custom-popup">
                                            <div className="p-2 font-black uppercase italic tracking-tighter">
                                                <h3 className="text-forest mb-1">{d.district}</h3>
                                                <div className="text-[10px] text-emerald-600">
                                                    {activeLayer.toUpperCase()}: {val.toLocaleString()}
                                                </div>
                                            </div>
                                        </Popup>
                                    </CircleMarker>
                                );
                            })}
                        </MapContainer>
                    </div>

                    {/* Status Overlay */}
                    <div className="absolute bottom-8 left-8 flex items-center gap-10 z-40">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                                <Activity className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase text-emerald-100/40 tracking-[0.2em]">Raster Fidelity</p>
                                <p className="text-xs font-black text-white italic tracking-widest">0.12 Arc-Min</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                                <Box className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase text-emerald-100/40 tracking-[0.2em]">Active Telemetry</p>
                                <p className="text-xs font-black text-white italic tracking-widest">1,240 Sync Nodes</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Dark gradient overlay for "Matrix" look */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-emerald-950/40 to-transparent z-10"></div>
                </Card>
            </div>
        </div>
    );
};


export default GISVisualization;
