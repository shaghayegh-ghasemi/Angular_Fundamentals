# Angular Practice Exercises

This project contains a series of beginner-level Angular and JavaScript exercises focused on components, data binding, directives, and JavaScript logic. It is structured as a single Angular project with multiple components.

## Features

### Angular Exercises
1. **Profile Card Component**  
   - Displays name, bio, and profile image using property binding and interpolation.

2. **Like Button Component**  
   - Toggles like/unlike with a dynamic button label and like count using event binding.

3. **Input Display Component**  
   - Displays typed input live using event binding and string interpolation.

4. **Conditional Display (`*ngIf`)**  
   - Toggles visibility of additional content with a button click.

5. **List Rendering (`*ngFor`)**  
   - Renders a list of items with names and prices.

6. **Dynamic Styling (`*ngClass`)**  
   - Applies different CSS classes to list items based on price.

### JavaScript Review
- Conditional statements based on a score variable.
- Looping through numbers and calculating squares.
- Using array methods: `map`, `filter`, and `forEach`.
- Calculator functions: `add`, `subtract`, `multiply`, `divide`.
- Temperature conversion functions with rounding to 2 decimal places.

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/shaghayegh-ghasemi/Angular_Fundamentals
   ```

2. Navigate to the project directory:
   ```
   cd angular-practice-exercises
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open the browser and go to:
   ```
   http://localhost:4200
   ```

## Project Structure

```
src/app/
│
├── profile-card/         # Profile component
├── like-button/          # Like button component
├── input-display/        # Input field component
├── app.component.ts      # Main component logic
├── app.component.html    # Renders all components and exercises
├── app.component.css     # Shared styles and layout
```

## Requirements

- Node.js
- Angular CLI (`npm install -g @angular/cli`)

