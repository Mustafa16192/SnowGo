import { PhoneFrame } from './PhoneFrame';
import { StatusBar } from './StatusBar';
import { Card } from './Card';
import { ArrowLeft, Home, MapPin, FileText, User, ChevronRight, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router';

export function DesignSystem() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      
      <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
        <button 
          onClick={() => navigate('/')}
          className="transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <div className="flex-1 text-center mr-6">Design System</div>
      </div>

      <div className="h-[calc(100%-68px)] overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-6">
          
          {/* Colors */}
          <section>
            <h2 className="mb-3">Colors</h2>
            
            <div className="mb-3">
              <p className="text-gray-600 mb-2">Brand - Teal</p>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="h-16 bg-teal-50 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">teal-50</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-teal-600 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">teal-600</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-teal-700 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">teal-700</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-gray-600 mb-2">Neutrals - Gray</p>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="h-16 bg-gray-50 rounded-lg border border-gray-200 mb-1"></div>
                  <p className="text-xs text-gray-600">gray-50</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-gray-100 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">gray-100</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-gray-300 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">gray-300</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-gray-600 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">gray-600</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-gray-900 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">gray-900</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-600 mb-2">Status Colors</p>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="h-16 bg-yellow-100 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">yellow-100</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-red-600 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">red-600</p>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-green-100 rounded-lg mb-1"></div>
                  <p className="text-xs text-gray-600">green-100</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="mb-3">Typography</h2>
            <Card>
              <h1 className="mb-2">Heading 1 - 24px Medium</h1>
              <h2 className="mb-2">Heading 2 - 20px Medium</h2>
              <h3 className="mb-2">Heading 3 - 18px Medium</h3>
              <h4 className="mb-2">Heading 4 - 16px Medium</h4>
              <p className="mb-2">Paragraph - 16px Regular</p>
              <p className="text-gray-600 mb-2">Secondary text - gray-600</p>
              <p className="text-gray-500 mb-2">Tertiary text - gray-500</p>
              <p className="text-xs">Small text - 12px</p>
            </Card>
          </section>

          {/* Buttons - All States */}
          <section>
            <h2 className="mb-3">Buttons - All States</h2>
            
            {/* Primary Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Primary Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="w-full px-4 py-3 bg-teal-600 text-white rounded-xl transition-all">
                    Default
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <button className="w-full px-4 py-3 bg-teal-700 text-white rounded-xl scale-95">
                    Active
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Secondary Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Secondary Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-xl transition-all">
                    Default
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <button className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-xl scale-95">
                    Active
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Outline Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Outline Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="w-full px-4 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-xl transition-all">
                    Default
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <button className="w-full px-4 py-3 bg-teal-50 border-2 border-teal-600 text-teal-600 rounded-xl scale-95">
                    Active
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Danger Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Danger Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="w-full px-4 py-3 bg-white border border-red-600 text-red-600 rounded-xl transition-all">
                    Default
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <button className="w-full px-4 py-3 bg-red-50 border border-red-600 text-red-600 rounded-xl scale-95">
                    Active
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Ghost Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Ghost Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="w-full px-4 py-3 text-teal-600 transition-all">
                    Default
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <button className="w-full px-4 py-3 bg-teal-50 text-teal-600 scale-95">
                    Active
                  </button>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Icon Button States */}
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Icon Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                  <button className="p-2">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <p className="text-xs text-gray-500 mt-1">Default State</p>
                </div>
                <div className="flex flex-col items-center">
                  <button className="p-2 scale-90">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <p className="text-xs text-gray-500 mt-1">Active (Pressed)</p>
                </div>
              </div>
            </div>

            {/* Text Link Button States */}
            <div>
              <p className="text-gray-600 mb-2">Text Link Button</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-center">
                  <button className="text-teal-600 flex items-center gap-1">
                    View more
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-500 mt-1 ml-2 self-center">Default</p>
                </div>
                <div className="flex justify-center">
                  <button className="text-teal-700 flex items-center gap-1">
                    View more
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-500 mt-1 ml-2 self-center">Active</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cards - All States */}
          <section>
            <h2 className="mb-3">Cards - All States</h2>
            
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Basic Card</p>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="mb-1">Card Title</div>
                <p className="text-gray-600">Static card with no interaction</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 mb-2">Interactive Card States</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer">
                    <div className="mb-1">Default</div>
                    <p className="text-gray-600 text-sm">Not pressed</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Default State</p>
                </div>
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer scale-98">
                    <div className="mb-1">Active</div>
                    <p className="text-gray-600 text-sm">Being pressed</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Active (Pressed)</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 mb-2">Selectable Card States</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer">
                    <div className="mb-1">Unselected</div>
                    <p className="text-gray-600 text-sm">Not chosen</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Unselected</p>
                </div>
                <div>
                  <div className="bg-teal-50 rounded-xl shadow-sm border-2 border-teal-600 p-4 cursor-pointer">
                    <div className="mb-1 text-teal-900">Selected</div>
                    <p className="text-teal-700 text-sm">Currently chosen</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Selected State</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-600 mb-2">Alert Card</p>
              <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-xl shadow-sm p-4">
                <div className="flex items-start gap-3">
                  <Snowflake className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="mb-1 text-yellow-900">Alert Title</div>
                    <p className="text-yellow-800">Important information or warning message</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Inputs - All States */}
          <section>
            <h2 className="mb-3">Form Inputs - All States</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-700 mb-2">Default State</label>
                <input 
                  type="text" 
                  placeholder="Type something..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Focused State</label>
                <input 
                  type="text" 
                  placeholder="Active input..."
                  className="w-full px-4 py-3 border-2 border-teal-600 rounded-lg ring-2 ring-teal-600/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">With Value</label>
                <input 
                  type="text" 
                  value="User entered text"
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Status Tags - All Variants */}
          <section>
            <h2 className="mb-3">Status Tags - All Variants</h2>
            <Card>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                    Waiting for volunteer
                  </div>
                  <span className="text-xs text-gray-500">Pending state</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    In progress
                  </div>
                  <span className="text-xs text-gray-500">Active state</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-200">
                    Completed
                  </div>
                  <span className="text-xs text-gray-500">Success state</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                    Cancelled
                  </div>
                  <span className="text-xs text-gray-500">Cancelled state</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Icons - All Sizes */}
          <section>
            <h2 className="mb-3">Icons - All Sizes</h2>
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Home className="w-6 h-6 text-gray-900" />
                  <span className="text-sm text-gray-600">Large (24px) - Navigation</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Medium (20px) - Icons in content</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <ChevronRight className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-gray-600">Small (16px) - Inline icons</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Spacing Scale */}
          <section>
            <h2 className="mb-3">Spacing Scale</h2>
            <Card>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-teal-600"></div>
                  <span className="text-sm text-gray-600">4px - p-1 / gap-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-teal-600"></div>
                  <span className="text-sm text-gray-600">8px - p-2 / gap-2</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-8 bg-teal-600"></div>
                  <span className="text-sm text-gray-600">12px - p-3 / gap-3</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-8 bg-teal-600"></div>
                  <span className="text-sm text-gray-600">16px - p-4 / gap-4 (card default)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-8 bg-teal-600"></div>
                  <span className="text-sm text-gray-600">24px - p-6 / gap-6</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Border Radius */}
          <section>
            <h2 className="mb-3">Border Radius</h2>
            <Card>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-teal-600 rounded-lg"></div>
                  <span className="text-sm text-gray-600">rounded-lg (8px) - Inputs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-teal-600 rounded-xl"></div>
                  <span className="text-sm text-gray-600">rounded-xl (12px) - Cards, Buttons</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-teal-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">rounded-full - Badges, Avatars</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Shadows */}
          <section>
            <h2 className="mb-3">Shadows</h2>
            <Card>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white shadow-sm rounded-xl border border-gray-100"></div>
                  <span className="text-sm text-gray-600">shadow-sm - Default cards</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white shadow-md rounded-xl"></div>
                  <span className="text-sm text-gray-600">shadow-md - Hover state</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-xl"></div>
                  <span className="text-sm text-gray-600">shadow-lg - Modals, Overlays</span>
                </div>
              </div>
            </Card>
          </section>

          <div className="h-4"></div>
        </div>
      </div>
    </PhoneFrame>
  );
}