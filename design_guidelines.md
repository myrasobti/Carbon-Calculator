# Carbon Calculator - Comprehensive Design Guidelines

## Design Approach: Reference-Based (Sustainability & Gamification)

**Justification**: This hackathon project requires high user engagement with sustainability themes, visual data presentation, and gamified progress tracking. Drawing inspiration from successful sustainability apps, fitness trackers (for progress visualization), and educational platforms (for step-by-step interactions).

**Key References**:
- **Duolingo** - Gamification, badges, achievement celebrations
- **Apple Health/Fitness** - Progress rings, clean data visualization
- **Ecosia/Forest App** - Sustainability-themed UI, environmental aesthetics
- **Modern Quiz Apps** - Step-by-step question flows, results reveals

**Core Design Principles**:
1. **Eco-Authentic**: Earth-inspired aesthetics without being overly literal
2. **Achievement-Driven**: Celebrate progress and small wins
3. **Educational First**: Make learning about carbon footprints engaging
4. **Data Clarity**: Complex calculations presented simply

---

## Core Design Elements

### A. Color Palette

**Light Mode**:
- Primary Brand: `142 70% 45%` (Forest green - trust, growth, sustainability)
- Secondary: `32 60% 50%` (Warm terracotta - earth, natural)
- Accent: `190 75% 45%` (Teal - clean energy, water)
- Success: `142 70% 35%` (Deep green for achievements)
- Warning: `45 90% 55%` (Amber for average footprints)
- Danger: `0 70% 50%` (Red for high carbon)
- Background: `0 0% 98%` (Off-white)
- Surface: `0 0% 100%` (Pure white cards)

**Dark Mode**:
- Primary: `142 65% 55%` (Lighter forest green)
- Secondary: `32 50% 60%` (Softer terracotta)
- Accent: `190 70% 55%` (Brighter teal)
- Background: `200 15% 8%` (Deep charcoal with blue undertone)
- Surface: `200 12% 12%` (Elevated dark cards)

### B. Typography

**Font Families** (via Google Fonts):
- Headings: `'Plus Jakarta Sans', sans-serif` (weights: 700, 800) - Modern, friendly, approachable
- Body: `'Inter', sans-serif` (weights: 400, 500, 600) - Exceptional readability
- Data/Numbers: `'JetBrains Mono', monospace` (weight: 500) - Calculator results, statistics

**Type Scale**:
- Hero: `text-5xl md:text-6xl lg:text-7xl font-bold` (Home page impact)
- H1: `text-4xl md:text-5xl font-bold` (Page titles)
- H2: `text-3xl md:text-4xl font-bold` (Section headers)
- H3: `text-xl md:text-2xl font-semibold` (Card titles)
- Body Large: `text-lg` (Feature descriptions)
- Body: `text-base` (Standard content)
- Small: `text-sm` (Captions, metadata)

### C. Layout System

**Spacing Primitives**: Tailwind units of `4, 6, 8, 12, 16, 20, 24` (as in p-4, mt-8, gap-6)
- Component padding: `p-6` mobile, `p-8` desktop
- Section spacing: `py-16 md:py-24` 
- Card gaps: `gap-6 md:gap-8`
- Max widths: `max-w-7xl` for content containers, `max-w-4xl` for forms/text

### D. Component Library

**Navigation**:
- Fixed top navigation with glassmorphism effect (`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md`)
- Logo with leaf icon, navigation links, user profile avatar
- Mobile: Hamburger menu with slide-in drawer

**Buttons**:
- Primary CTA: Solid green with white text, `rounded-full px-8 py-3`, subtle shadow
- Secondary: Outline variant with green border
- Icon buttons: Circular, ghost style for actions

**Cards**:
- Elevated cards: `rounded-2xl shadow-lg bg-white dark:bg-gray-800`
- Hover lift: `hover:shadow-xl transition-shadow duration-300`
- Feature cards: Icon top-left, title, description, optional CTA

**Calculator Components**:
- Question cards: Large, centered, one question at a time
- Input fields: `rounded-xl border-2 focus:border-primary` with label animations
- Progress indicator: Step dots at top showing 8 steps
- Navigation: "Previous" (ghost) and "Next" (primary) buttons at bottom

**Progress Visualization**:
- Carbon score: Large circular progress ring (inspired by Apple)
- Badge grid: 3-column layout with animated unlock states
- Achievement cards: Icon, title, description, unlock date

**Data Display**:
- Stat cards: Number (large mono font) + label + trend indicator
- Comparison bars: Horizontal bars showing footprint vs. thresholds
- Category breakdown: Donut chart showing carbon sources

**Product Cards**:
- Image (1:1 ratio), product name, eco-benefit tag, price, Amazon CTA button
- 3-column grid desktop, 2-column tablet, 1-column mobile

---

## Page-Specific Guidelines

### Home Page
**Hero Section** (100vh):
- Large hero image: Aerial view of green forest/sustainable city (nature meets technology)
- Overlaid content: Centered headline "Calculate Your Carbon Impact", subheadline, primary CTA
- Floating stat cards: "10,000+ Footprints Calculated", "5 Million lbs CO2 Reduced" with subtle animations

**Features Section**:
- 4-column grid showcasing: Calculator, Tips, Progress, Products
- Each card: Custom icon, title, short description, "Learn More" link
- Alternating green/teal accent colors

**Impact Visualization**:
- Animated counter showing global CO2 savings
- Visual comparison: "That's equivalent to 500 trees planted"
- CTA: "Join the Movement" button

### Calculator Page
- Clean, focused layout with single question per view
- Progress indicator: "Step 2 of 8" with visual progress bar
- Input variations: Number inputs for bills/mileage, button choices for flights, toggle switches for recycling
- Validation: Inline error messages, helpful hints ("Average electric bill: $100-150")
- Smooth transitions between questions (slide animation)

### Results Page
- Hero reveal: Large animated carbon score in center
- Color-coded threshold: Green (Very Low), Blue (Ideal), Amber (Average), Red (High)
- Breakdown cards: Show contribution by category (electric, transport, waste)
- CTA section: "Get Personalized Tips" button, "Share Your Score" social buttons

### Tips Page
- Personalized header: "Based on your 18,500 lbs footprint..."
- Priority tips first (highest impact actions)
- Tip cards: Impact score (lbs CO2/year), difficulty level, action description, "Mark Complete" checkbox
- Filter buttons: "All", "Easy Wins", "Home", "Transport", "Diet"

### Education Page
- Engaging hero: "What is a Carbon Footprint?" with illustration
- Scroll-triggered animations: Facts appear as you scroll
- Infographic section: Visual breakdown of average American footprint
- Interactive comparison: Slider comparing different lifestyles

### Profile Page
- User avatar, name, join date at top
- Stats dashboard: Total footprint, reduction achieved, current streak
- Calculation history: Timeline of past calculations with trend line
- Settings: Notification preferences, unit preferences

### Progress & Badges Page
- Achievement showcase: Large badge collection (locked/unlocked states)
- Unlock animation: Confetti effect + success sound when viewing new badges
- Badge categories: "First Steps", "Carbon Warrior", "Eco Champion", "Lifestyle Changes"
- Progress milestones: Visual timeline showing journey

### Products Page
- Category filters: "Home", "Personal Care", "Kitchen", "Transportation"
- Grid layout: 3 columns desktop, masonry style
- Product cards: Eco-benefit tags ("Saves 50 lbs CO2/year"), sustainability rating
- Amazon integration: "View on Amazon" buttons with external link icon

---

## Images

**Hero Image** (Home Page): 
- Large, vibrant aerial photograph of lush green forest canopy meeting modern sustainable architecture or solar panels
- Slightly desaturated for text overlay readability
- Position: Full viewport height, background-cover

**Additional Images**:
- Calculator success: Illustration of Earth with protective shield
- Education page: Infographic-style illustrations (pie charts, comparison visuals)
- Product page: High-quality product photography on white/minimal backgrounds
- Badge icons: Custom illustrated achievement badges (leaf levels, carbon reduction milestones)

---

## Interaction & Animation

**Micro-interactions**:
- Button hover: Slight scale (1.02) + shadow increase
- Card hover: Lift effect with larger shadow
- Input focus: Border color shift + subtle glow

**Page Transitions**:
- Calculator steps: Horizontal slide (300ms ease-in-out)
- Badge unlocks: Scale up from 0.8 to 1 + confetti particles
- Results reveal: Number count-up animation (2s duration)

**Sound Effects**:
- Badge unlock: Bright chime (C major chord)
- Calculation complete: Success bell tone
- Achievement milestone: Celebration fanfare
- (Using Web Audio API for playback)

---

## Accessibility & Responsiveness

- Color contrast: Minimum 4.5:1 for all text
- Dark mode: Consistent implementation across all inputs and components
- Focus indicators: Visible 2px outline on all interactive elements
- Responsive breakpoints: Mobile-first, sm (640px), md (768px), lg (1024px)
- Touch targets: Minimum 44x44px on mobile

This design creates an engaging, educational, and motivational experience that encourages users to understand and reduce their carbon footprint through beautiful, intuitive interfaces.