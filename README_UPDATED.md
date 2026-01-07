# E-Commerce Admin Dashboard

A modern, full-stack server-side rendered (SSR) e-commerce dashboard built with Next.js 15, MongoDB, and NextAuth.js.

## 🎯 Project Overview

A fully functional server-side rendered administrative dashboard for managing products, orders, and customers in an e-commerce system. Built with cutting-edge technologies for optimal performance and security.

## 🚀 Live Demo

### Live Application
[https://ecommerce-admin-dashboard-spyc.vercel.app/](https://ecommerce-admin-dashboard-spyc.vercel.app/)

### Default Admin Credentials
- **Email**: `admin@example.com`
- **Password**: `adminpassword123`

---

## ✅ Features Implemented

### Core Functionality
- **Authentication**: Secure admin login with NextAuth.js and JWT strategy
- **Product Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **Image Upload**: Cloudinary integration for product images
- **Protected Routes**: Middleware-based route protection for admin access only
- **Admin Onboarding**: Secret-key protected admin creation

### Analytics & Visualization
- Real-time analytics dashboard with key metrics:
  - Total Revenue tracking
  - Total Orders count
  - Average Order Value
  - Total Products inventory
- 6-month sales charts (line & bar graphs)
- Month-over-month growth percentages
- Interactive charts using Recharts

### Data Management
- Product listing with pagination and search
- Customer management with individual profiles
- Order tracking with detailed order information
- Advanced form validation with error handling

### Design & UX
- Professional dark theme with optimal contrast
- Responsive design (mobile, tablet, desktop)
- Smooth transitions and hover effects
- Modern gradient UI elements

---

## 📋 Project Requirements Status

### ✅ Completed Requirements (13/15)

| # | Requirement | Status | Details |
|---|-----------|--------|---------|
| 1 | Server-side Rendering (Next.js) | ✅ | Next.js 15 with App Router |
| 2 | Product CRUD Operations | ✅ | Full Create, Read, Update, Delete |
| 3 | Form Validation | ✅ | Zod schema validation |
| 4 | Data Visualization | ✅ | Recharts with multiple chart types |
| 5 | Image Upload & Storage | ✅ | Cloudinary integration ready |
| 6 | Authentication | ✅ | NextAuth.js with JWT |
| 7 | Authorization | ✅ | Middleware-based route protection |
| 8 | Admin Onboarding | ✅ | Secret-key protected creation |
| 9 | Logout Functionality | ✅ | Secure session termination |
| 10 | GitHub Repository | ✅ | Complete source code |
| 11 | README Documentation | ✅ | Full setup & feature guide |
| 12 | Working Application | ✅ | Fully functional dashboard |
| 13 | Dark Theme UI | ✅ | Modern professional design |
| 14 | Live Deployment | ⏳ | Ready for deployment |
| 15 | Demo Video | ⏳ | Optional (not created) |

### 📊 Overall Progress: **87% Complete**
- Functionality: **100% Complete** ✅
- Deliverables: **80% Complete** (13/15 items)
- Ready for: **Immediate Production Use**

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | Next.js 15 (App Router), React 19 |
| **Backend** | Next.js Server Components, Server Actions |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | NextAuth.js 5 with JWT |
| **Form Handling** | React Hook Form + Zod |
| **Styling** | Tailwind CSS |
| **Data Visualization** | Recharts |
| **Image Storage** | Cloudinary (ready to configure) |

---

## 📁 Project Structure

```
ecommerce-admin-dashboard/
├── app/
│   ├── actions/                 # Server actions for data mutations
│   │   ├── analytics.ts        # Analytics data fetching
│   │   ├── customer.ts         # Customer operations
│   │   ├── order.ts            # Order operations
│   │   └── product.ts          # Product CRUD operations
│   ├── api/
│   │   ├── auth/[...nextauth]/ # NextAuth configuration
│   │   └── onboard/            # Admin onboarding endpoint
│   ├── dashboard/              # Protected admin dashboard
│   │   ├── layout.tsx          # Dashboard layout
│   │   ├── page.tsx            # Dashboard home
│   │   ├── add/                # Add product page
│   │   ├── edit/[id]/          # Edit product page
│   │   ├── customers/          # Customer listing
│   │   ├── customers/[email]/  # Customer details
│   │   ├── orders/             # Order listing
│   │   └── orders/[id]/        # Order details
│   ├── login/                  # Admin login page
│   ├── onboard/                # Admin onboarding page
│   ├── globals.css             # Global styles with dark theme
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                 # Reusable components
│   ├── Navbar.tsx             # Navigation bar
│   ├── SalesChart.tsx         # Analytics charts & stats
│   ├── ProductsClient.tsx     # Product table
│   ├── ProductForm.tsx        # Product form
│   ├── EditProductForm.tsx    # Edit product form
│   ├── OrdersClient.tsx       # Orders table
│   ├── OrderDetailsClient.tsx # Order details
│   ├── CustomersClient.tsx    # Customers table
│   ├── CustomerDetailsClient.tsx # Customer details
│   ├── DeleteButton.tsx       # Delete action
│   ├── Providers.tsx          # Context providers
│   └── ...
├── lib/
│   ├── db.ts                  # MongoDB connection
│   └── validations.ts         # Zod schemas
├── models/                     # Mongoose schemas
│   ├── User.ts                # Admin user model
│   ├── Product.ts             # Product model
│   └── Order.ts               # Order model
├── middleware.ts               # Route protection
├── seed-admin.js              # Create admin user
├── seed-orders.js             # Seed sample orders
├── .env.local                 # Environment variables
├── package.json               # Dependencies
├── next.config.ts             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account (free)
- Vercel account (for deployment)

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ecommerce-admin-dashboard
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Set Up Environment Variables
Create `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# NextAuth Configuration
NEXTAUTH_SECRET=your-generated-secret-key
NEXTAUTH_URL=http://localhost:3000

# Admin Onboarding
ONBOARD_SECRET=your-secret-key-for-admin-creation

# Cloudinary (optional for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

#### 4. Create Admin User (Option 1: Seed Script)
```bash
node seed-admin.js
```

This creates an admin with:
- **Email**: `admin@example.com`
- **Password**: `adminpassword123`

#### 5. Create Admin User (Option 2: Onboarding Page)
1. Start the development server (next step)
2. Visit `http://localhost:3000/onboard`
3. Enter credentials and the secret key from `.env.local`

#### 6. (Optional) Seed Sample Data for Analytics
```bash
node seed-orders.js
```

This creates 64 orders distributed across 6 months for analytics demonstration.

#### 7. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Default Credentials

Use these credentials to log in after running seed-admin.js:

- **Email**: `admin@example.com`
- **Password**: `adminpassword123`

---

## 📍 Key Routes

| Route | Purpose | Access |
|-------|---------|--------|
| `/` | Home page | Public |
| `/login` | Admin login | Public |
| `/onboard` | Admin registration | Public (requires secret key) |
| `/dashboard` | Product dashboard with analytics | Admin only |
| `/dashboard/add` | Add new product form | Admin only |
| `/dashboard/edit/[id]` | Edit product form | Admin only |
| `/dashboard/customers` | Customer listing | Admin only |
| `/dashboard/customers/[email]` | Customer details | Admin only |
| `/dashboard/orders` | Order listing | Admin only |
| `/dashboard/orders/[id]` | Order details | Admin only |

---

## 🎨 Features in Detail

### 1. Product Management
- ✅ View all products with pagination
- ✅ Search products by name
- ✅ Add new products with validation
- ✅ Edit existing products
- ✅ Delete products
- ✅ Upload product images
- ✅ Manage product pricing and inventory

### 2. Analytics Dashboard
- ✅ Real-time revenue metrics
- ✅ Order count and trends
- ✅ Average order value calculation
- ✅ Product inventory tracking
- ✅ 6-month sales visualization
- ✅ Growth percentages (month-over-month)

### 3. Order Management
- ✅ View all orders
- ✅ Order details and status
- ✅ Order history per customer

### 4. Customer Management
- ✅ View all customers
- ✅ Customer profiles
- ✅ Customer order history

### 5. Security Features
- ✅ Secure authentication with NextAuth.js
- ✅ JWT-based sessions
- ✅ Middleware route protection
- ✅ Admin-only access control
- ✅ Secret-key protected onboarding

---

## 🔐 Security Considerations

- All routes protected by middleware
- Admin verification required for dashboard access
- Secure password hashing with bcryptjs
- JWT token-based authentication
- CSRF protection via NextAuth.js
- Sensitive operations protected with server actions

---

## 🎬 Workflow Example

1. **Admin Login** → Submits credentials at `/login`
2. **Authentication** → Server validates credentials and creates JWT
3. **Dashboard Access** → Redirected to `/dashboard` with protected session
4. **View Products** → Server fetches products from MongoDB and renders
5. **Add Product** → Submit form with validation → Server action creates product
6. **View Analytics** → Real-time calculations from database
7. **Logout** → Session terminated securely

---

## 📦 Optional: Enable Image Uploads

### Configure Cloudinary

1. Sign up for free at [Cloudinary](https://cloudinary.com)
2. Get your **Cloud Name** from dashboard
3. Create an unsigned **upload preset**
4. Update `.env.local`:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-actual-preset
   ```

The image upload functionality is already implemented and will work once credentials are configured.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Final project submission"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [Vercel](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Post-Deployment**
   - Update `NEXTAUTH_URL` to your production URL
   - Test login and product operations
   - Verify analytics display

### Alternative Deployment Platforms
- **AWS**: EC2 + RDS/MongoDB Atlas
- **DigitalOcean**: App Platform + Managed Database
- **Railway**: Full-stack deployment platform
- **Render**: Free tier with PostgreSQL option

---

## ⚙️ Scripts

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production

# Production
npm start            # Run production server

# Admin Setup
node seed-admin.js   # Create admin user
node seed-orders.js  # Seed sample orders

# Data Verification
node scripts/verify-data.ts  # Verify database data
```

---

## 📊 Performance Metrics

- ⚡ Server-side rendering for fast initial load
- 📦 Optimized bundle size with Next.js
- 🗄️ Efficient database queries with Mongoose
- 🖼️ Image optimization with Cloudinary
- 📱 Mobile-first responsive design

---

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- Verify `MONGODB_URI` in `.env.local`
- Ensure MongoDB Atlas network access is enabled
- Check database user credentials

### "Admin login fails"
- Verify email and password match seed data
- Check `NEXTAUTH_SECRET` is set
- Clear browser cookies and try again

### "Image upload not working"
- Verify Cloudinary credentials in `.env.local`
- Check upload preset is created in Cloudinary
- Ensure preset is unsigned

### "Routes redirect to login"
- Verify admin is created with `node seed-admin.js`
- Check `NEXTAUTH_URL` matches current URL
- Verify session secret is set

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Zod Validation](https://zod.dev/)

---

## 💡 Future Enhancements

- Multi-step product wizard
- Real-time notifications
- Advanced filtering and sorting
- Payment integration
- Inventory alerts
- Email notifications
- Dark/Light theme toggle
- User roles and permissions

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Admin Account

**Created with seed script:**
- **Email**: `admin@example.com`
- **Password**: `adminpassword123`

---

## 📞 Support

For issues or questions, please refer to:
- Project checklist: `PROJECT_CHECKLIST.md`
- Technical documentation in code comments
- GitHub repository issues

---

**Project Status**: ✅ **Production Ready**
**Last Updated**: January 7, 2026
**Version**: 1.0.0

