# Nobzo Lite

A simplified property listing and engagement platform built as part of the Nobzo Frontend Internship Assessment. Users can browse property listings, view detailed property pages, like/comment on listings, and explore a basic admin dashboard.

## 🚀 Tech Stack

- **React.js** (with TypeScript)
- **React Router** – client-side routing
- **Tailwind CSS** – styling
- **Iconify** – icon library
- **Fetch API** – data fetching from mock JSON

## 📋 Features

- **Authentication Page** – simple login interface with local session storage
- **Property Feed Page** – browse all listings with filtering by type (rent/sale), like button, and comment count
- **Property Detail Page** – full property info, image, description, likes, and comments
- **Admin Dashboard (UI only)** – properties, users, and reports sections with mocked data

## 📂 Project Structure

```
src/
├── api/              # API/auth helper functions (auth.ts)
├── components/       # Reusable UI components (Button, PropCard, SideBar, ProtectedRoute, etc.)
├── layouts/          # Layout wrappers (MainLayout, DashBoard layout)
├── pages/            # Route-level pages (FeedPage, ExplorePropertyPage, SignInPage, Saved, DashBoard)
├── router/           # React Router route definitions (index.tsx)
├── Section/          # Admin dashboard sections (DashboardFeed, DashboardProperties, DashboardUsers, DashboardReports)
├── types/            # TypeScript interfaces and shared constants (index.ts)
├── utils/            # Helper functions (formatPrice.ts)
├── App.tsx
├── main.tsx
└── index.css
public/
└── frontend_db.json  # Mock API data (users, properties, comments, likes)
```

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nobzo-lite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔑 Demo Login

```
Email: user@nobzo.com
Password: Admin123
```

## 🗂️ Mock Data

This project uses a static `frontend_db.json` file (served from the `public/` folder) to simulate a backend API. It includes:

- `users` – demo user account for authentication
- `properties` – property listings (title, price, location, type, image, description)
- `comments` – comments linked to properties via `propertyId`
- `likes` – likes linked to properties via `propertyId` and `userId`

Data is fetched via the Fetch API and consumed as if it were a live backend response.

## 📸 Screenshots

### Feed Page
![Feed Page](/public/images/Preview.png)
 
### Property Detail Page
![Property Detail](/public/images/property-detail.png)
 
### Admin Dashboard
![Admin Dashboard](/public/images/dashboard.png)

## 🌐 Deployed Link
[Nobzo Lite](https://nobzo-lite-96u0txn7j-josseuns-projects.vercel.app/)


## 📝 Notes

- Fields such as beds, baths, square footage, and agent details shown in the original design reference are not part of the provided mock data structure, and were intentionally omitted to keep the implementation aligned with `db.json`.
- Session handling for authentication is stored locally (e.g. `localStorage`) rather than via a real backend, per assessment scope.

## 👤 Author

 - Github - [JOSHUA OLUWASEUN ODUSANYA](https://github.com/Josseun)