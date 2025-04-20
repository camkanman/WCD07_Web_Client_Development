
# Pokémon Web Client

A modern React web application to browse, search, filter, and view details of Pokémon using the [PokéAPI](https://pokeapi.co/). This project demonstrates advanced React concepts including Context API, persistent storage, responsive design, and dynamic filtering.

---

## Features

- **Responsive Layout**:  
  The application supports both grid (2-column) and single-column views for displaying Pokémon cards. Users can toggle between these layouts using the view switcher in the header. On mobile devices, the layout automatically adapts to a 2-column grid for optimal viewing experience. This ensures the application remains user-friendly and visually appealing on all screen sizes.

- **Persistent Storage**:  
  Pokémon data (both the list and individual details) is cached in the browser's `localStorage`. This means that after the initial fetch from the PokéAPI, subsequent visits or reloads will load data from local cache, resulting in faster load times and reduced API calls. User preferences such as view mode, sorting, filtering, and pagination are also stored, so your settings persist across sessions.

- **Filtering & Sorting**:  
  Users can search for Pokémon by name using the search bar. Additionally, a dropdown allows filtering Pokémon by their type (e.g., Fire, Water, Grass). Sorting options are available to order Pokémon by ID, name, or base experience, in both ascending and descending order. All filtering and sorting is performed efficiently using React Context for global state management.

- **Pagination**:  
  The Pokémon list is paginated, allowing users to select how many Pokémon to display per page (6, 12, 24, or 48). Navigation controls are provided to move between pages, and the current page is remembered even after a reload.

- **Detail View**:  
  Clicking on a Pokémon card opens a detailed view, displaying comprehensive information such as stats, types, abilities, and moves. The detail page is styled for clarity and includes a back button for easy navigation.

- **User Preferences**:  
  All user settings (view mode, filters, sort, pagination, etc.) are automatically saved in `localStorage`. This ensures that your preferred way of browsing Pokémon is preserved every time you return to the app.

- **Mobile Friendly**:  
  The application is fully responsive, with layouts and controls optimized for both desktop and mobile browsers. Certain controls (like the type filter) are hidden on mobile to keep the interface clean and easy to use.

---

## Project Structure

src/
components/
Header.jsx
PokemonDetail.jsx
...
context/
PokemonContext.jsx
App.jsx
App.css
main.jsx
...
public/
pokemon-logo.png
README.md

---

## Usage

- Use the search bar to find Pokémon by name.
- Use the type dropdown to filter Pokémon by their type.
- Use the sort dropdown to change the order of Pokémon.
- Use the view toggle to switch between grid and single-column layouts.
- Click on a Pokémon card to view detailed information.
- Use pagination controls to navigate through the list.
- All your preferences and cached data are saved automatically.

## Technical Details

### State Management

- Context API is used for global state management, including search term, type filter, and the filtering logic itself. This allows all components to access and update filter/sort state without prop drilling.
- LocalStorage is used for:
  - Caching the Pokémon list ( pokemon_all )
  - Caching individual Pokémon details ( pokemon*detail*{name} )
  - Saving user preferences (sort, filter, view mode, pagination, search term, type filter)

### Filtering

- Filtering is performed in the context and includes both name and type.
- The filter is applied before pagination and sorting, ensuring only relevant Pokémon are shown to the user.

### Responsive Design

- Uses CSS media queries to adapt layout for mobile and desktop.
- The type filter dropdown is hidden on mobile for a cleaner UI.
- The grid layout automatically adjusts to 2 columns on smaller screens.

### API

- Data is fetched from PokéAPI .
- Caching is implemented to minimize API requests and improve performance.

## File Highlights

- src/components/Header.jsx Contains the header, search, filter, sort, pagination, and view toggle controls.
- src/context/PokemonContext.jsx Provides global state and filtering logic for the Pokémon list.
- src/App.jsx Main application logic, data fetching, pagination, and integration with context.
- src/App.css All styling, including responsive and theme styles.

## Customization

- To change the number of Pokémon fetched, modify the limit parameter in the API call in App.jsx .
- To add more filters or sorting options, update the context and header components accordingly.

---

## Main Implemented Features & Explanations

### 1. Page View Layout Switch (Grid & Single Column View)

**Explanation:**  
The application allows users to switch between a grid (2-column) and a single-column view for the Pokémon list. This enhances user experience by letting users choose their preferred layout, and on mobile devices, the layout automatically adapts for optimal usability.

**Implementation:**

- The `viewMode` state is managed in the main component and passed as a prop to the header.
- The header provides toggle buttons for switching between grid and single views.
- The selected view mode is saved in `localStorage` (`pokemonViewMode`) and restored on reload.
- CSS classes are conditionally applied to change the layout.

**Code Example:**

```javascript
    // In App.jsx
    const [viewMode, setViewMode] = useState(() => localStorage.getItem('pokemonViewMode') || 'grid');

    const toggleViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem('pokemonViewMode', mode);
    };

    // In Header.jsx
    <div className={`toggle-container ${viewMode === 'single' ? 'single-active' : ''}`}>
    <button
        className={`toggle-btn ${viewMode === 'single' ? 'active' : ''}`}
        onClick={() => toggleViewMode('single')}
        aria-label="Single View"
    >
        <div className="square-icon"></div>
    </button>
    <button
        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => toggleViewMode('grid')}
        aria-label="Grid View"
    >
        <div className="grid-icon">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </button>
    </div>
```

### 2. LocalStorage Implementation for Pokémon List and Details

**Explanation:**
To optimize performance and reduce unnecessary API calls, the application uses localStorage to cache both the Pokémon list and individual Pokémon details. User preferences (such as sorting, filtering, pagination, and view mode) are also stored for persistence.

**Implementation:**

- When fetching the Pokémon list or details, the app first checks localStorage .
- If data is available and valid, it is loaded from cache; otherwise, it is fetched from the API and then cached.
- User preferences are stored and restored from localStorage .

**Code Example:**

```javascript
// Fetch and cache Pokémon list
const cacheKey = 'pokemon_all';
const cachedData = localStorage.getItem(cacheKey);

if (cachedData && cachedData !== 'undefined' && cachedData !== 'null') {
  setPokemon(JSON.parse(cachedData));
} else {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify(data.results));
  setPokemon(data.results);
}

// Save user preference
useEffect(() => {
  localStorage.setItem('pokemonSortBy', sortBy);
}, [sortBy]);
```

### 3. Filter by Field using Context API

**Explanation:**
Filtering is a core feature, allowing users to search Pokémon by name and filter by type. This is implemented using React's Context API, providing a global state for filters and search terms, accessible across components.

**Implementation:**

- The PokemonContext manages the state for searchTerm , typeFilter , and the filtering logic.
- The header component uses this context to provide search and filter controls.
- The filtering logic is applied before sorting and pagination.
- Filter state is also saved in localStorage for persistence.
  **Code Example:**

```javascript
// context/PokemonContext.jsx
export const PokemonProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('pokemonSearchTerm') || '');
  const [typeFilter, setTypeFilter] = useState(() => localStorage.getItem('pokemonTypeFilter') || 'all');

  useEffect(() => {
    localStorage.setItem('pokemonSearchTerm', searchTerm);
  }, [searchTerm]);
  useEffect(() => {
    localStorage.setItem('pokemonTypeFilter', typeFilter);
  }, [typeFilter]);

  const filterPokemon = (pokemonList) => {
    return pokemonList.filter(pokemon => {
      const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = typeFilter === 'all' || pokemon.types.some(type => type.type.name === typeFilter);
      return nameMatch && typeMatch;
    });
  };

  return (
    <PokemonContext.Provider value={{
      searchTerm, setSearchTerm,
      typeFilter, setTypeFilter,
      filterPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Usage in Header.jsx
const { searchTerm, setSearchTerm, typeFilter, setTypeFilter } = usePokemonContext();
```

---