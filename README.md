# Project Setup Instructions

Follow the steps below to set up and run the project:

## Step 1: Download or Clone Repository

Download or clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of the repository.

## Step 2: Set Up Individual Folders

Navigate to the `client`, `api`, and `admin` folders individually and run the following command in each folder to initialize the project:

```bash
npm init
```

## Step 3: Set Up API Environment Variables

The `api` folder requires an `.env` file to store environment variables. Create an `.env` file in the `api` folder and add the following variables:

```dotenv
MONGO_URL=<your-mongodb-url>
PASS_SEC=<your-secret-key>
JWT_SEC=<your-secret-key>
STRIPE_KEY=<your-stripe-api-key> (optional)
```

Replace `<your-mongodb-url>` with the URL of your MongoDB database. Replace `<your-secret-key>` with a secret key of your choice for password hashing and JWT authentication. If you plan to use Stripe for payment processing, replace `<your-stripe-api-key>` with your Stripe API key.

## Step 4: Configure Firebase for Admin (Images)

Open the `admin/src/firebase.js` file and replace the code with the Firebase configuration code provided during Firebase app initialization. This step is necessary for handling images in the admin section.

## Step 5: Run the API

In the `api` folder, run the following command to start the API:

```bash
npm start
```

## Step 6: Create Admin User

To create an admin user in the backend, you can use Postman or a similar tool. Make a POST request to `localhost:5000/api/auth/register` with the following JSON format:

```json
{
  "username": "admin-username",
  "email": "admin-email@example.com",
  "password": "admin-password"
}
```

Make sure to replace the values with your desired admin username, email, and password.

## Step 7: Set Admin Privileges

In the backend database, set the admin privilege for the created user to `true`. This step grants administrative access in the admin section of the application.

## Step 8: Run the Admin Section

In the `admin` folder, run the following command to start the admin section:

```bash
npm start
```

## Step 9: Add Products

Once the admin section is running, you can log in using the admin credentials and add products to the application.

## Step 10: Run the Client

In the `client` folder, run the following command to start the client section:

```bash
npm start
```

Now, you can access the application and continue shopping through the client section.

Feel free to reach out if you have any questions or encounter any issues during the setup process. Enjoy your shopping experience!
