# React Application with Routing and Cloudinary Integration

This project is a React-based web application featuring dynamic routing, user authentication, protected routes, admin and seller dashboards, and Cloudinary integration for media transfer. The backend is built using Express.js and supports RESTful APIs for seamless integration.

---

## **Features**

- **User Authentication**: Login, Signup, and Account Activation.
- **Dynamic Routing**: Seamless navigation using `react-router-dom`.
- **Role-Based Dashboards**:
  - **User**: Profile management, order tracking, and messaging.
  - **Seller**: Product and event management, orders, refunds, and financial withdrawals.
  - **Admin**: User, seller, and product management.
- **Payment Integration**: Stripe integration for secure transactions.
- **Media Handling**: Cloudinary is used for efficient media storage and retrieval.
- **Redux State Management**: Centralized state management for user and seller data.
- **Toast Notifications**: User feedback using `react-toastify`.
- **Protected Routes**: Secured access for users, sellers, and admins.
- **Backend APIs**: RESTful APIs for user, product, event, order, and more.

---

## **Technologies Used**

### **Frontend**
- **React**: Component-based UI development.
- **React Router**: Dynamic routing.
- **Redux**: State management.
- **Toastify**: Notifications.
- **Axios**: HTTP requests.
- **Stripe.js**: Payment handling.

### **Backend**
- **Express.js**: Backend framework.
- **MongoDB**: Database management.
- **Cookie-Parser**: Parsing cookies for session handling.
- **Body-Parser**: Handling large payloads.
- **Cors**: Cross-origin resource sharing.
- **Dotenv**: Environment variable management.

### **Media**
- **Cloudinary**: Cloud-based media storage and transfer.

### **Payment**
- **Stripe API**: Payment processing.

---

## **Setup Instructions**

### **Prerequisites**

1. Node.js and npm installed.
2. MongoDB installed and running.
3. A Cloudinary account (for media transfer).
4. A Stripe account (for payment integration).

### **Steps**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `config` folder with the following:
   ```env
   NODE_ENV=development
   PORT=4000
   MONGO_URI=<your-mongo-db-uri>
   JWT_SECRET=<your-jwt-secret>
   STRIPE_API_KEY=<your-stripe-secret-key>
   STRIPE_PUBLIC_KEY=<your-stripe-public-key>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

4. Start the backend server:
   ```bash
   npm run server
   ```

5. Start the development server:
   ```bash
   npm start
   ```

---

## **Key Functionalities**

### **Frontend**
- Routing is managed with `react-router-dom`.
- State is managed with Redux actions like `loadUser`, `loadSeller`, `getAllProducts`, and `getAllEvents`.
- Cloudinary handles media uploads.
- Stripe integration facilitates secure payments.

### **Backend**
- Built with Express.js.
- Middleware:
  - `ErrorHandler` for centralized error handling.
  - `Cookie-Parser` for managing cookies.
  - `Body-Parser` for handling JSON and URL-encoded payloads.
  - `Cors` for enabling cross-origin requests.
- RESTful APIs:
  - **User Routes**: `/api/v2/user`
  - **Conversation Routes**: `/api/v2/conversation`
  - **Message Routes**: `/api/v2/message`
  - **Order Routes**: `/api/v2/order`
  - **Shop Routes**: `/api/v2/shop`
  - **Product Routes**: `/api/v2/product`
  - **Event Routes**: `/api/v2/event`
  - **Coupon Routes**: `/api/v2/coupon`
  - **Payment Routes**: `/api/v2/payment`
  - **Withdraw Routes**: `/api/v2/withdraw`

---

## **Folder Structure**
```
backend/
├── controller/      # Route controllers
├── middleware/      # Middleware (e.g., ErrorHandler)
├── routes/          # API routes
├── config/          # Environment configurations
├── server.js        # Entry point
└── app.js           # Express application setup

frontend/
├── components/      # Reusable components
├── routes/          # Application routes
├── redux/           # Redux actions and reducers
├── App.css          # Application styles
├── App.js           # Main application component
├── index.js         # Entry point
```

---

## **Available Scripts**

### **Run Development Server**
```bash
npm start
```

### **Run Backend Server**
```bash
npm run server
```

### **Build for Production**
```bash
npm run build
```

### **Run Tests**
```bash
npm test
```

---

## **Future Enhancements**
- Improve UI/UX design.
- Add more granular roles and permissions.
- Optimize performance for large datasets.
- Implement advanced analytics and reporting.

---

## **Contributors**
- Ashen Samuditha 

---

## **License**
This project is licensed under the MIT License.




@copyright by becodemy 2023