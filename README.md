# Angular Practice Exercises

This project contains a series of beginner-to-intermediate Angular and JavaScript exercises focused on components, data binding, services, directives, observables, pipes, and core Angular concepts.  
It is structured as a single Angular project with multiple components.

---

## Features

### Angular Exercises (Part 1)

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

---

### Angular Applications (Part 2)

1. **Product Display**
   - A parent component displays a list of products.
   - A child component displays individual product cards.
   - Used `@Input` and `@Output` for communication between components.

2. **Calculator**
   - A calculator with two-way binding for inputs.
   - Performs addition, subtraction, multiplication, and division.

3. **User Management System**
   - `UserService` created to manage users.
   - User List Component displays all users.
   - User Add Component allows adding new users.
   - Navigation between listing and adding users is implemented.

4. **REST API Integration (Posts)**
   - Fetched posts from JSONPlaceholder API using `HttpClient`.
   - Handled API errors gracefully and displayed posts cleanly.

5. **Items Display (Pipes and Directives)**
   - Applied built-in Angular pipes: `UpperCasePipe`, `CurrencyPipe`, `DatePipe`, `PercentPipe`.
   - Applied built-in directives: `NgStyle`, `NgClass`, `NgIf`, `NgFor`.
   - Created a custom `TruncatePipe` to shorten descriptions.
   - Created custom directives `HighlightDirective` (hover highlight) and `IfLoggedInDirective` (conditional rendering).

6. **Blog Application (Router and Parameters)**
   - Created a blog listing page with category filtering using query parameters.
   - Implemented navigation to blog details using route parameters.
   - Provided a back link to return to the blog list.

7. **TODO Application**
   - Add, remove, and mark tasks as completed.
   - Tasks dynamically update UI based on completion status.
   - Clean structure with basic persistence during session.

8. **Real-Time Data Stream (Observables and AsyncPipe)**
   - Streamed random numbers using an observable service.
   - Displayed real-time data using `AsyncPipe`.
   - Calculated and displayed the average after stopping the stream.

---

### JavaScript Review
- Conditional statements based on a score variable.
- Looping through numbers and calculating squares.
- Using array methods: `map`, `filter`, and `forEach`.
- Calculator functions: `add`, `subtract`, `multiply`, `divide`.
- Temperature conversion functions with rounding to 2 decimal places.

---

## Demo

You can access a live demo version at:

> **[Watch Demo](https://youtu.be/L-fflFTJWg8?si=ET1fQ3L2F3oD6vnQ)**


---

## How to Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/shaghayegh-ghasemi/Angular_Fundamentals
   ```

2. Navigate to the project directory:

   ```
   cd angular_fundamentals
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the application:

   ```
   ng serve
   ```

5. Open the browser and navigate to:

   ```
   http://localhost:4200
   ```

---

## Project Structure

```
src/app/
│
├── part1/
│   ├── profile-card/         # Profile component
│   ├── like-button/          # Like button component
│   ├── input-display/        # Input field component, Show/hide component, List rendering with ngFor
│
├── part2/
│   ├── product-display/      # Product list and card communication
│   ├── calculator/           # Simple calculator
│   ├── user-management/
│   │   ├── user-list/
│   │   ├── user-add/
│   ├── posts-api/            # REST API integration
│   ├── items-display/        # Items with pipes and directives
│   ├── blog/
│   │   ├── blog-list/
│   │   ├── blog-detail/
│   ├── todo/                 # TODO Application
│   ├── data-stream/          # Real-time data stream with observables
│
├── services/                 # Shared services (UserService, PostService, DataService)
├── pipes/                    # Custom pipes (TruncatePipe)
├── directives/               # Custom directives (HighlightDirective, IfLoggedInDirective)
├── app.config.ts     # Application routes
├── app.component.ts          # Main app component
├── app.component.html        # Top-level layout and navigation
├── app.component.css         # Shared layout styles
```

---

## Requirements

- Node.js
- Angular CLI (`npm install -g @angular/cli`)

---

# Done

This project covers major fundamental concepts of Angular development and is structured for practice and learning purposes.