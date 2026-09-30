# Nexus Store

Nexus Store is a React-based product management dashboard built for browsing and managing a catalog of products from the Fake Store API. The application includes product discovery, category filtering, search, product details, wishlist management, cart interactions, and a protected dashboard route.

## Overview

This project demonstrates a modern e-commerce storefront interface using React, Vite, Zustand, and React Router. It provides a clean, responsive experience for exploring a product catalog while emphasizing a smooth user flow for shopping, saving favorites, and navigating product details.

## Features

- Responsive storefront layout for desktop and mobile
- Live product data from the Fake Store API
- Search by product name
- Category-based filtering
- Product detail pages
- Wishlist support with persistent state using Zustand
- Cart functionality with item count tracking
- Protected dashboard route
- Loading and error states for async product data
- Clean, branded UI designed for a storefront experience

## Tech Stack

- React 19
- Vite
- React Router DOM
- Zustand
- Tailwind CSS
- Fake Store API

## Project Structure

```text
src/
├── App.jsx
├── components/
│   ├── CategoryFilter.jsx
│   ├── ErrorState.jsx
│   ├── Footer.jsx
│   ├── LoadingState.jsx
│   ├── navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   ├── SearchBar.jsx
│   └── WishlistButton.jsx
├── pages/
│   ├── about.jsx
│   ├── cart.jsx
│   ├── contact.jsx
│   ├── dashboard.jsx
│   ├── home.jsx
│   ├── login.jsx
│   ├── productDetails.jsx
│   ├── products.jsx
│   └── Wishlist.jsx
├── services/
│   └── productService.js
├── stores/
│   ├── authStore.js
│   ├── useCartStore.js
│   └── useWishlistStore.js
├── assets/
├── App.css
├── index.css
├── main.jsx
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd G1-Product-management-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production build for deployment.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint checks across the project.

## Application Flow

- Home page displays a hero section and featured products.
- Products page allows browsing all items with search and filtering.
- Clicking a product opens its detailed page with more information.
- Wishlist items can be toggled from product cards or the product detail view.
- Cart updates reflect the number of selected items globally.
- The dashboard route is protected and available only to authenticated users.

## State Management

The project uses Zustand for lightweight global state. Key stores include:

- `useWishlistStore` for persistent wishlist state
- `useCartStore` for cart data and totals
- `authStore` for authentication state and access control

## Notes

This project is designed as a frontend demo and uses the Fake Store API for product data, which is suitable for learning and portfolio-style demonstration. The wishlist is persisted in the browser using Zustand persistence middleware.

## License

This project is for educational/demo purposes.
