import { Battery, Signal, Wifi } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="h-[54px] bg-white px-6 flex items-end pb-2 justify-between relative z-40">
      <div className="text-gray-900">9:41</div>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4 text-gray-900" />
        <Wifi className="w-4 h-4 text-gray-900" />
        <Battery className="w-6 h-4 text-gray-900" />
      </div>
    </div>
  );
}
