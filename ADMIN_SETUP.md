# Admin Access Setup Instructions

## How to Access the Admin Panel

### Step 1: Configure Admin Access
1. Open the `.env.local` file in your project root
2. Update the `ADMIN_EMAILS` variable with your authorized email addresses:
   ```
   ADMIN_EMAILS=your-email@gmail.com,another-admin@example.com
   ```
3. Set a strong admin password:
   ```
   ADMIN_PASSWORD=YourStrongPassword123!
   ```

### Step 2: Access the Admin Panel
1. Go to your website's homepage
2. Scroll to the footer and click the small "Admin" link
3. Or directly navigate to: `https://yoursite.com/admin/login`

### Step 3: Login Process
1. **First**: Sign in with your regular Clerk account (the email must be in the ADMIN_EMAILS list)
2. **Second**: Enter the admin password you set in the environment variables
3. You'll be redirected to the admin dashboard

### Security Features
- **Email Whitelist**: Only emails listed in `ADMIN_EMAILS` can access admin features
- **Password Protection**: Additional password required beyond regular login
- **Session Timeout**: Admin sessions expire after 24 hours
- **Protected Routes**: All admin pages require both email authorization and password verification

### Default Configuration
The system comes with these default admin emails (update them in `.env.local`):
- `admin@libertygolddiamonds.com`
- `owner@libertygolddiamonds.com`

Default password: `LibertyGoldDiamonds2025!`

**⚠️ IMPORTANT**: Change these defaults before going live!

### Admin Features Available
- View inventory dashboard with statistics
- Add new jewelry items with complete details
- Edit existing jewelry items
- Delete items from inventory
- Search and filter inventory
- Track stock levels and pricing
- Manage categories and subcategories

### Troubleshooting
- **"Access Denied"**: Your email is not in the ADMIN_EMAILS list
- **"Invalid Password"**: Check your ADMIN_PASSWORD in .env.local
- **Redirected to Login**: Admin session expired or email not authorized
- **Can't Access Admin**: Make sure you're signed in with an authorized email first

### Adding More Admins
1. Add their email to the `ADMIN_EMAILS` list in `.env.local`
2. Share the admin password with them securely
3. They can then access the admin panel following the same process