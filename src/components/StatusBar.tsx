import { Battery, Signal, Wifi } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="h-11 bg-white px-6 flex items-center justify-between">
      <div className="text-gray-900">9:41</div>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4 text-gray-900" />
        <Wifi className="w-4 h-4 text-gray-900" />
        <Battery className="w-6 h-4 text-gray-900" />
      </div>
    </div>
  );
}
