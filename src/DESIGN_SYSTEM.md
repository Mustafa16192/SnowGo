# SnowGo Design System

## Overview
SnowGo is a mobile-first community snow clearing app designed for accessibility, with large touch targets, clear typography, and a calm, friendly visual style suitable for older adults. The design follows iOS-style conventions with a phone-sized interface and smooth native-like interactions.

---

## Colors

### Brand Colors
- **Primary (Teal)**: `#14b8a6` / `teal-600`
  - Used for: Primary actions, active states, key UI elements
  - Active state: `#0d9488` / `teal-700`
  - Light variant: `#f0fdfa` / `teal-50`
  - Ring/Focus: `rgba(20, 184, 166, 0.2)` / `teal-600/20`

### Neutral Colors
- **Gray Scale**:
  - `gray-50`: `#f9fafb` - Background
  - `gray-100`: `#f3f4f6` - Card borders, subtle elements
  - `gray-200`: `#e5e7eb` - Borders, dividers
  - `gray-300`: `#d1d5db` - Input borders (default)
  - `gray-400`: `#9ca3af` - Inactive icons, secondary text
  - `gray-500`: `#6b7280` - Tertiary text
  - `gray-600`: `#4b5563` - Secondary buttons, body text
  - `gray-700`: `#374151` - Labels, important text
  - `gray-900`: `#111827` - Headings, primary text

### White
- **Background**: `#ffffff` - Card backgrounds, input fields

### Status Colors
- **Yellow** (Alerts/Pending):
  - Background: `#fef3c7` / `yellow-100`
  - Border: `#fde68a` / `yellow-200`
  - Text: `#92400e` / `yellow-900`
  - Icon: `#d97706` / `yellow-600`
  - Accent: `#fbbf24` / `yellow-400`

- **Red** (Danger/Error):
  - Background: `#ef4444` / `red-600`
  - Active: `#dc2626` / `red-700`
  - Light: `#fef2f2` / `red-50`

- **Green** (Success):
  - Background: `#10b981` / `green-600`
  - Light: `#d1fae5` / `green-100`

### Map Colors
- **Map Background**: `from-blue-50 to-blue-100` - Gradient
- **Snow Overlays**:
  - Light: `blue-200` at 40% opacity
  - Moderate: `blue-300` at 50% opacity
  - Heavy: `blue-400`

---

## Typography

### Font
- **System Font Stack**: Default system fonts (San Francisco on iOS, Roboto on Android)
- **Base Font Size**: `16px`

### Type Scale
```css
h1: 24px (--text-2xl), font-weight: 500, line-height: 1.5
h2: 20px (--text-xl), font-weight: 500, line-height: 1.5
h3: 18px (--text-lg), font-weight: 500, line-height: 1.5
h4: 16px (--text-base), font-weight: 500, line-height: 1.5
p: 16px (--text-base), font-weight: 400, line-height: 1.5
label: 16px (--text-base), font-weight: 500, line-height: 1.5
button: 16px (--text-base), font-weight: 500, line-height: 1.5
input: 16px (--text-base), font-weight: 400, line-height: 1.5
small: 12px (text-xs)
```

### Font Weights
- **Normal**: 400
- **Medium**: 500 (headings, labels, buttons)

### Text Colors
- Primary text: `text-gray-900`
- Secondary text: `text-gray-600`
- Tertiary text: `text-gray-500`
- Link text: `text-teal-600`
- Link active: `text-teal-700`

---

## Spacing

### Padding Scale
- `p-1`: 4px
- `p-2`: 8px
- `p-3`: 12px
- `p-4`: 16px (Card default)
- `p-6`: 24px
- `p-8`: 32px

### Gap/Margin Scale
- `space-y-1`: 4px
- `space-y-2`: 8px
- `space-y-3`: 12px (Home screen cards)
- `space-y-4`: 16px (Form fields, default spacing)
- `mb-1`: 4px
- `mb-2`: 8px
- `mb-3`: 12px
- `mb-4`: 16px

### Container Padding
- Screen padding: `p-4` (16px)
- Card padding: `p-4` (16px)

---

## Border Radius

### Scale
- **Small**: `rounded-lg` = `8px` (Inputs, small elements)
- **Medium**: `rounded-xl` = `12px` (Cards, buttons)
- **Full**: `rounded-full` = `9999px` (Pills, badges, avatar)

### Application
- Buttons: `rounded-xl` (12px)
- Cards: `rounded-xl` (12px)
- Inputs: `rounded-lg` (8px)
- Status badges: `rounded-full`
- Phone frame: `rounded-[3rem]` (48px)

---

## Buttons

### Primary Button
**Variant**: `primary`
```tsx
<PrimaryButton variant="primary">Label</PrimaryButton>
```
- **Background**: `bg-teal-600`
- **Text**: `text-white`
- **Padding**: `py-3 px-6` (12px top/bottom, 24px left/right)
- **Border Radius**: `rounded-xl` (12px)
- **Shadow**: `shadow-sm`
- **States**:
  - Default: `bg-teal-600`
  - Hover: `shadow-md`
  - Active/Pressed: `bg-teal-700`, `scale-95`
  - Focus: `ring-2 ring-teal-600/20`

### Secondary Button
**Variant**: `secondary`
```tsx
<PrimaryButton variant="secondary">Label</PrimaryButton>
```
- **Background**: `bg-gray-600`
- **Text**: `text-white`
- **Padding**: `py-3 px-6`
- **Border Radius**: `rounded-xl`
- **Shadow**: `shadow-sm`
- **States**:
  - Default: `bg-gray-600`
  - Hover: `shadow-md`
  - Active/Pressed: `bg-gray-700`, `scale-95`

### Outline Button
**Variant**: `outline`
```tsx
<PrimaryButton variant="outline">Label</PrimaryButton>
```
- **Background**: `transparent`
- **Text**: `text-gray-700`
- **Border**: `border-2 border-gray-300`
- **Padding**: `py-3 px-6`
- **Border Radius**: `rounded-xl`
- **States**:
  - Default: `border-gray-300`
  - Active/Pressed: `bg-gray-100`, `border-gray-400`, `scale-95`

### Danger Button
**Variant**: `danger`
```tsx
<PrimaryButton variant="danger">Label</PrimaryButton>
```
- **Background**: `bg-red-600`
- **Text**: `text-white`
- **Padding**: `py-3 px-6`
- **Border Radius**: `rounded-xl`
- **Shadow**: `shadow-sm`
- **States**:
  - Default: `bg-red-600`
  - Hover: `shadow-md`
  - Active/Pressed: `bg-red-700`, `scale-95`

### Ghost Button
**Variant**: `ghost`
```tsx
<PrimaryButton variant="ghost">Label</PrimaryButton>
```
- **Background**: `transparent`
- **Text**: `text-gray-700`
- **Padding**: `py-3 px-6`
- **Border Radius**: `rounded-xl`
- **States**:
  - Default: `transparent`
  - Active/Pressed: `bg-gray-100`, `scale-95`

### Icon Buttons
Used in navigation, back buttons, etc.
```tsx
<button className="transition-all active:scale-90">
  <Icon className="w-6 h-6" />
</button>
```
- **Size**: `w-6 h-6` (24px × 24px minimum touch target: 44px)
- **States**:
  - Active/Pressed: `scale-90`

### Text Link Buttons
```tsx
<button className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700">
  Label
  <ChevronRight className="w-4 h-4" />
</button>
```
- **Text**: `text-teal-600`
- **States**:
  - Default: `text-teal-600`
  - Active/Pressed: `text-teal-700`

### Full Width Option
All button variants support `fullWidth` prop:
```tsx
<PrimaryButton fullWidth>Label</PrimaryButton>
```
- Adds: `w-full`

---

## Cards

### Base Card
**Component**: `Card`
```tsx
<Card>Content</Card>
```
- **Background**: `bg-white`
- **Border**: `border border-gray-100`
- **Border Radius**: `rounded-xl` (12px)
- **Shadow**: `shadow-sm`
- **Padding**: `p-4` (16px)
- **States**: Static, no interaction

### Interactive Card
**Component**: `InteractiveCard`
```tsx
<InteractiveCard clickable>Content</InteractiveCard>
```
- **Background**: `bg-white`
- **Border**: `border border-gray-100`
- **Border Radius**: `rounded-xl` (12px)
- **Shadow**: `shadow-sm`
- **Padding**: `p-4` (16px)
- **States** (when `clickable={true}`):
  - Default: `shadow-sm`
  - Hover: `shadow-md`
  - Active/Pressed: `scale-[0.98]`, `shadow-none`
  - Cursor: `cursor-pointer`

### Selected Card
```tsx
<InteractiveCard selected>Content</InteractiveCard>
```
- **Border**: `border-2 border-teal-600`
- **Background**: `bg-teal-50`

### Alert Card (Yellow)
```tsx
<InteractiveCard className="border-l-4 border-yellow-400 bg-yellow-50">
  Content
</InteractiveCard>
```
- **Background**: `bg-yellow-50`
- **Left Border**: `border-l-4 border-yellow-400`
- **Text**: `text-yellow-900` (heading), `text-yellow-800` (body)
- **Icon**: `text-yellow-600`

---

## Form Inputs

### Text Input
```tsx
<input 
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
             transition-all focus:border-teal-600 focus:outline-none 
             focus:ring-2 focus:ring-teal-600/20"
/>
```
- **Background**: `bg-white`
- **Border**: `border border-gray-300`
- **Border Radius**: `rounded-lg` (8px)
- **Padding**: `px-4 py-3` (16px left/right, 12px top/bottom)
- **Font Size**: `16px` (prevents zoom on iOS)
- **States**:
  - Default: `border-gray-300`
  - Focus: `border-teal-600`, `ring-2 ring-teal-600/20`
  - Read-only: `bg-white`, `cursor-pointer` (for address picker)

### Label
```tsx
<label className="block text-gray-700 mb-2">
  Label text
</label>
```
- **Text**: `text-gray-700`
- **Font Weight**: `500`
- **Margin**: `mb-2` (8px below)
- **Display**: `block`

### Placeholder
- **Color**: Browser default (typically gray-400 equivalent)
- **Example**: `placeholder="Maya Patel"`

---

## Badges & Status Tags

### Status Tag/Chip
```tsx
<div className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                bg-yellow-100 text-yellow-800 border border-yellow-200">
  Waiting for volunteer
</div>
```
- **Background**: Varies by status (yellow-100, green-100, etc.)
- **Text**: Matches background tone (yellow-800, green-800, etc.)
- **Border**: `border` with matching color
- **Border Radius**: `rounded-full`
- **Padding**: `px-2.5 py-0.5`
- **Display**: `inline-flex items-center`
- **Font Size**: Inherits (typically base 16px or small 14px)

### Status Colors
- **Pending/Waiting**: Yellow (`bg-yellow-100`, `text-yellow-800`, `border-yellow-200`)
- **Active/In Progress**: Blue (`bg-blue-100`, `text-blue-800`, `border-blue-200`)
- **Completed**: Green (`bg-green-100`, `text-green-800`, `border-green-200`)
- **Cancelled**: Gray (`bg-gray-100`, `text-gray-800`, `border-gray-200`)

---

## Navigation

### Bottom Navigation
**Component**: `BottomNavInteractive`
```tsx
<BottomNavInteractive mode="resident" />
```
- **Height**: `h-20` (80px)
- **Background**: `bg-white`
- **Border**: `border-t border-gray-200`
- **Padding**: `px-4`, `pb-2` (accounts for iOS safe area)
- **Layout**: Flex, 4 equal tabs

#### Nav Tab
- **Icon Size**: `w-6 h-6` (24px)
- **Stroke Width**: `2`
- **Label**: `text-xs` (12px)
- **Gap**: `gap-1` (4px between icon and label)
- **States**:
  - Default: `text-gray-400`
  - Active: `text-teal-600`
  - Pressed: `scale-90`
- **Transition**: `transition-all duration-150`

### Header/Top Bar
```tsx
<div className="h-14 bg-white border-b border-gray-200 flex items-center px-4">
  {/* Back button, title, actions */}
</div>
```
- **Height**: `h-14` (56px)
- **Background**: `bg-white`
- **Border**: `border-b border-gray-200`
- **Padding**: `px-4`
- **Layout**: Flex with centered title

#### Back Button
```tsx
<button className="transition-all active:scale-90">
  <ArrowLeft className="w-6 h-6 text-gray-900" />
</button>
```
- **Icon**: `w-6 h-6`
- **Color**: `text-gray-900`
- **Pressed**: `scale-90`

---

## Icons

### Source
- **Library**: `lucide-react`

### Common Icons
- `Home` - Home tab
- `MapPin` - Map tab
- `FileText` - Requests tab
- `User` - Profile tab
- `ArrowLeft` - Back navigation
- `ChevronRight` - Forward/view more
- `Snowflake` - Snow alerts
- `MapPin` - Location markers
- `X` - Close/dismiss

### Sizes
- **Small**: `w-4 h-4` (16px) - Inline icons, chevrons
- **Medium**: `w-5 h-5` (20px) - Alert icons
- **Large**: `w-6 h-6` (24px) - Navigation, buttons
- **Extra Large**: `w-8 h-8` (32px) - Feature icons

### Stroke Width
- **Default**: `strokeWidth={2}` for navigation icons
- **Standard**: Default stroke for content icons

---

## Animations & Transitions

### Global Transition
```css
transition-all duration-150
```
- Used on most interactive elements
- Duration: `150ms`

### Scale Animations

#### Button Press
```css
active:scale-95
```
- Large buttons scale to 95% on press

#### Small Button/Icon Press
```css
active:scale-90
```
- Small icons and nav items scale to 90% on press

#### Card Press
```css
active:scale-[0.98]
```
- Cards scale to 98% on press (subtle)

### Shadow Transitions
```css
shadow-sm hover:shadow-md active:shadow-none
```
- Cards and buttons have shadow transitions

### Color Transitions
```css
transition-colors
```
- Used on navigation icons and text links

---

## Layout

### Phone Frame
**Component**: `PhoneFrame`
- **Container**: Centered with gradient background
- **Width**: `w-[375px]` (iPhone-sized)
- **Height**: `h-[812px]` (iPhone X/11/12 height)
- **Border Radius**: `rounded-[3rem]` (48px)
- **Background**: `bg-black`
- **Overflow**: `overflow-hidden`

### Screen Layout
```tsx
<PhoneFrame>
  <StatusBar />
  <Header /> {/* h-14 (56px) */}
  <Content /> {/* h-[calc(100%-124px)] or h-[calc(100%-56px)] */}
  <BottomNavInteractive /> {/* h-20 (80px) */}
</PhoneFrame>
```

### Content Area Heights
- **With Bottom Nav**: `h-[calc(100%-124px)]` (minus StatusBar 44px + BottomNav 80px)
- **Without Bottom Nav**: `h-[calc(100%-56px)]` (minus StatusBar 44px + Header 56px)
- **Overflow**: `overflow-y-auto` for scrollable content

### Status Bar
**Component**: `StatusBar`
- **Height**: `h-11` (44px)
- **Background**: `bg-white`
- **Content**: Time, signal indicators (decorative)

---

## Shadows

### Shadow Scale
- **None**: `shadow-none`
- **Small**: `shadow-sm` - Cards, buttons default
- **Medium**: `shadow-md` - Hover states
- **Large**: `shadow-lg` - Modals, important elements

### Application
- **Cards**: `shadow-sm` default, `shadow-md` on hover
- **Buttons**: `shadow-sm` (primary, secondary, danger only)
- **Modals/Sheets**: `shadow-lg`

---

## Modals & Sheets

### Bottom Sheet
**Component**: `AddressPickerSheet` (example)
```tsx
<div className="absolute inset-0 z-50">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/30" />
  
  {/* Sheet */}
  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl">
    {/* Content */}
  </div>
</div>
```

#### Structure
- **Backdrop**: `bg-black/30` (30% opacity)
- **Sheet Background**: `bg-white`
- **Top Radius**: `rounded-t-3xl` (24px)
- **Max Height**: Typically 70-90% of screen
- **Padding**: `p-4` or `p-6`

#### Handle (Optional)
```tsx
<div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
```
- **Width**: `w-12` (48px)
- **Height**: `h-1` (4px)
- **Color**: `bg-gray-300`
- **Position**: Centered with `mx-auto`

---

## Maps

### Map Container
```tsx
<div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
  {/* Map elements */}
</div>
```
- **Background**: `bg-gradient-to-br from-blue-50 to-blue-100`
- **Position**: `relative`
- **Overflow**: `overflow-hidden`

### Street Grid
```tsx
{/* Vertical streets */}
<div className="absolute top-0 bottom-0 left-20 w-1 bg-gray-300" />

{/* Horizontal streets */}
<div className="absolute left-0 right-0 top-32 h-1 bg-gray-300" />
```
- **Line Thickness**: `w-1` or `h-1` (4px)
- **Color**: `bg-gray-300`

### Location Marker
```tsx
<div className="bg-teal-600 rounded-full p-2 shadow-lg">
  <Home className="w-5 h-5 text-white" />
</div>
```
- **Background**: `bg-teal-600`
- **Shape**: `rounded-full`
- **Padding**: `p-2` (8px)
- **Shadow**: `shadow-lg`
- **Icon**: `w-5 h-5 text-white`

### Mini Map (Thumbnail)
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden relative">
  {/* Simplified street grid and marker */}
</div>
```
- **Size**: `w-16 h-16` (64px × 64px)
- **Border Radius**: `rounded-lg`
- **Elements**: Simplified version of full map

---

## Accessibility

### Touch Targets
- **Minimum Size**: 44px × 44px (iOS standard)
- **Button Height**: `py-3` = 12px + font height + 12px ≈ 44px minimum
- **Icon Buttons**: 24px icon + padding to reach 44px minimum

### Font Sizing
- **Base Size**: `16px` prevents iOS zoom on input focus
- **Never smaller than**: `14px` for body text
- **Small text**: `12px` (text-xs) for labels only

### Color Contrast
- Ensure WCAG AA compliance:
  - `gray-900` on `white` ✓
  - `gray-700` on `white` ✓
  - `teal-600` on `white` ✓
  - `white` on `teal-600` ✓

### Focus States
- All interactive elements have visible focus states
- Focus ring: `ring-2 ring-teal-600/20`
- Outline color: `outline-ring/50`

---

## Component Composition Examples

### Home Screen Card with Mini Map
```tsx
<InteractiveCard>
  <div className="flex justify-between items-start mb-2">
    <div>
      <div className="mb-1">W Hoover Ave</div>
      <div className="text-gray-600">41°F · Light snow</div>
    </div>
    {/* Mini Map */}
    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden relative flex-shrink-0">
      {/* Street grid */}
      <div className="absolute inset-0">
        <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 right-5 w-px bg-gray-300"></div>
        <div className="absolute left-0 right-0 top-5 h-px bg-gray-300"></div>
        <div className="absolute left-0 right-0 bottom-5 h-px bg-gray-300"></div>
      </div>
      {/* Snow overlay */}
      <div className="absolute top-1 left-1 w-6 h-6 bg-blue-200 opacity-40 rounded-full blur-sm"></div>
      {/* Location marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-teal-600 rounded-full p-0.5">
          <Home className="w-2 h-2 text-white" />
        </div>
      </div>
    </div>
  </div>
  <button className="text-teal-600 flex items-center gap-1 transition-all active:text-teal-700">
    View on map
    <ChevronRight className="w-4 h-4" />
  </button>
</InteractiveCard>
```

### Alert Card
```tsx
<InteractiveCard className="border-l-4 border-yellow-400 bg-yellow-50">
  <div className="flex items-start gap-3">
    <Snowflake className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
    <div>
      <div className="mb-1 text-yellow-900">Snow Alert</div>
      <p className="text-yellow-800">3 inches of snow expected tonight.</p>
    </div>
  </div>
</InteractiveCard>
```

### Form Field
```tsx
<div>
  <label className="block text-gray-700 mb-2">Full name</label>
  <input 
    type="text" 
    placeholder="Maya Patel"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
               transition-all focus:border-teal-600 focus:outline-none 
               focus:ring-2 focus:ring-teal-600/20"
  />
</div>
```

### Status Tag in Card
```tsx
<InteractiveCard clickable>
  <div className="flex items-center justify-between mb-2">
    <div>Your requests</div>
    <button className="text-teal-600 flex items-center gap-1">
      View all
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
  <div>
    <div className="text-gray-900 mb-2">Sidewalk clearing – Today if possible</div>
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
      Waiting for volunteer
    </div>
  </div>
</InteractiveCard>
```

---

## Design Principles

### 1. Mobile-First
- All designs are optimized for 375px width (iPhone standard)
- Touch targets meet iOS standards (44px minimum)
- Font sizes prevent zoom on input focus (16px minimum)

### 2. Accessibility
- High contrast text
- Clear visual hierarchy
- Large, easy-to-tap buttons
- Consistent navigation patterns
- Descriptive labels

### 3. Calm & Friendly
- Soft teal accent (not aggressive)
- Ample white space
- Rounded corners throughout
- Gentle animations
- Clear, conversational copy

### 4. Consistency
- Reusable components
- Standardized spacing
- Predictable interactions
- Unified color palette

### 5. Native Feel
- iOS-style conventions
- Smooth 150ms transitions
- Scale animations on press
- Bottom sheet modals
- Tab bar navigation

---

## File Structure

### Components
```
/components
  ├── PrimaryButton.tsx        # All button variants
  ├── Card.tsx                 # Static card
  ├── InteractiveCard.tsx      # Clickable/selectable card
  ├── StatusBar.tsx            # Top status bar
  ├── BottomNavInteractive.tsx # Bottom navigation
  ├── PhoneFrame.tsx           # Mobile container
  └── ...specific screens
```

### Usage
```tsx
import { PrimaryButton } from './components/PrimaryButton';
import { InteractiveCard } from './components/InteractiveCard';
import { PhoneFrame } from './components/PhoneFrame';
```

---

## Notes

- **DO NOT** use Tailwind font size, weight, or line-height classes unless specifically changing from defaults
- **DO** use system defaults from `/styles/globals.css`
- **DO** ensure all interactive elements have press states
- **DO** maintain 16px minimum font size for inputs
- **DO** keep animations subtle and fast (150ms)
- **DO** use teal-600 as the primary brand color consistently
- **DO** test touch targets are at least 44px × 44px
