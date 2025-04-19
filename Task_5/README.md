# Pokemon Display Project

A responsive Pokemon card display application built with React, Vite, and Tailwind CSS.

## Tech Stack

- React (Frontend Framework)
- Vite (Build Tool)
- Tailwind CSS (Styling)

## Project Setup

1. Initialize project using Vite:
```bash
npm create vite@latest . -- --template react
```

2. Install dependencies:
```bash
npm install
npm install -D tailwindcss@3.4.1 postcss autoprefixer
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

## Project Structure
```plaintext
src/
├── components/
│   ├── PokemonCard.jsx        # Card component for mobile view
│   ├── PokemonCardDesktop.jsx # Card component for desktop view
│   └── PokemonDetail.jsx      # Modal for detailed Pokemon view
├── App.jsx                    # Main application component
└── main.jsx                   # Entry point
```

## Features
1. Responsive Design
   
   - Mobile-first approach
   - Desktop view optimization
   - Toggle between mobile and desktop layouts
2. View Modes
   
   - Grid view: Displays Pokemon in a grid layout
   - List view: Shows Pokemon in a detailed list format
3. Pokemon Card Features
   
   - Basic information display (Name, ID, Type)
   - Stats display (Health, Attack, Defense)
   - Interactive click for detailed view
4. Search Functionality
   
   - Search by Pokemon name
   - Search by Pokemon ID
5. Sorting Options
   
   - Sort by ID
   - Sort by Name
   - Sort by Attack
   - Sort by Defense

## Component Details
### PokemonCard
- Handles mobile view rendering
- Displays Pokemon information in a compact format
- Supports both grid and list views
### PokemonCardDesktop
- Optimized for desktop display
- Enhanced visual presentation
- Maintains consistent styling with mobile view
### PokemonDetail
- Modal component for detailed Pokemon information
- Displays enlarged Pokemon image
- Shows comprehensive Pokemon statistics

## Styling Approach
1. Tailwind CSS Classes
   
   - Custom color scheme using hex values
   - Responsive design utilities
   - Flexible grid system
2. Design System
   
   - Color Palette:
     - Background: #252A3E
     - Card Background: white
     - Text Colors: #212E4C, #666666
     - Type Color: #4CAF50
   - Typography:
     - Font sizes: 14px - 36px
     - Bold headings for Pokemon names
   - Spacing:
     - Consistent padding and margins
     - Grid gaps for proper spacing

## Best Practices Implemented
1. Component Organization
   
   - Separate components for different views
   - Props for component communication
   - Reusable styling classes
2. State Management
   
   - useState for local state management
   - Efficient state updates
   - Controlled components for forms
3. Event Handling
   
   - Click handlers for interactions
   - Search functionality
   - Sort operations
4. Responsive Design
   
   - Mobile-first approach
   - Breakpoint-based layouts
   - Flexible grid system
## Future Improvements
1. Performance Optimization
   
   - Image optimization
   - Lazy loading for cards
   - Virtual scrolling for large lists
2. Feature Enhancements
   
   - Additional sorting options
   - Filter by Pokemon type
   - Advanced search capabilities
3. UI/UX Improvements
   
   - Animation effects
   - Loading states
   - Error handling

## Running the Project
1. Development mode:
```bash
npm run dev
 ```

2. Build for production:
```bash
npm run build
 ```

3. Preview production build:
```bash
npm run preview
```

```plaintext
This documentation provides a comprehensive overview of the project's structure, features, and implementation details. It can be helpful for future reference or for other developers working on the project.
```
