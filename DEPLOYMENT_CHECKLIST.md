# ✅ Vercel Deployment Checklist

## Pre-Deployment (Do First)

- [ ] Ensure all code is committed to Git
- [ ] Push code to GitHub: `git push origin main`
- [ ] Verify `.env.local` is NOT in GitHub (should be in `.gitignore`)
- [ ] Test locally: `npm run dev` and test login/dashboard

## Vercel Setup

- [ ] Create Vercel account at [vercel.com](https://vercel.com)
- [ ] Sign in with GitHub
- [ ] Go to Dashboard → New Project
- [ ] Select your GitHub repository: `ecommerce-admin-dashboard`
- [ ] Click Import

## Add Environment Variables (Critical!)

Add these variables in Vercel → Project Settings → Environment Variables:

- [ ] `MONGODB_URI` = `mongodb+srv://adminexamplecom:adminpassword123@cluster0.rafipeu.mongodb.net/ecommerce?retryWrites=true&w=majority`
- [ ] `NEXTAUTH_SECRET` = `9f2vK8nL3mP5qR7sT1uV2wX4yZ6aB8cD0eF3gH5iJ7kL9mN`
- [ ] `NEXTAUTH_URL` = `https://your-project-name.vercel.app` (UPDATE AFTER FIRST DEPLOY!)
- [ ] `ONBOARD_SECRET` = `supersecretkey123`
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` = `your-cloud-name` (optional)
- [ ] `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` = `your-preset` (optional)

## Initial Deployment

- [ ] Click "Deploy" button
- [ ] Wait for build to complete (2-3 minutes)
- [ ] See "Congratulations!" message
- [ ] **Copy your new production URL**

## Post-Deployment (MUST DO!)

⚠️ **This step is critical for authentication to work!**

- [ ] Go to Vercel Dashboard → Settings → Environment Variables
- [ ] Find `NEXTAUTH_URL` variable
- [ ] **Update it to your actual production URL**: `https://your-actual-url.vercel.app`
- [ ] Click Save
- [ ] Go to Deployments tab
- [ ] Click three dots on latest deployment
- [ ] Click "Redeploy" to apply the new NEXTAUTH_URL
- [ ] Wait for redeploy to complete

## Verification

- [ ] Visit your production URL
- [ ] Test login: `admin@example.com` / `adminpassword123`
- [ ] Navigate to `/dashboard`
- [ ] Check if analytics loads
- [ ] Try adding a product
- [ ] Verify product appears in list
- [ ] Check MongoDB Atlas shows new data

## Optional: MongoDB Setup

- [ ] Verify MongoDB Atlas network access allows Vercel
- [ ] Go to [MongoDB Atlas](https://cloud.mongodb.com)
- [ ] Click Clusters → Network Access
- [ ] If needed, add IP: `0.0.0.0/0` (allow all IPs)
- [ ] Or add specific Vercel IP (from error logs if any)

## Troubleshooting

If login doesn't work:
- [ ] Check Vercel logs (red banner in deployment)
- [ ] Verify NEXTAUTH_URL is exactly correct
- [ ] Make sure NEXTAUTH_SECRET is set
- [ ] Check MongoDB connection in logs
- [ ] Try redeploy if you made any changes

If database doesn't update:
- [ ] Check MongoDB Atlas shows data
- [ ] Clear browser cache and cookies
- [ ] Check Vercel logs for errors
- [ ] Verify MONGODB_URI is correct

## Final Steps

- [ ] Bookmark your production URL
- [ ] Test all features one more time
- [ ] Share app with others (production URL)
- [ ] Set up domain (optional, see deployment guide)
- [ ] Monitor analytics in Vercel dashboard

## Credentials for Demo

Share these with anyone testing:
```
URL: https://your-project-name.vercel.app
Email: admin@example.com
Password: adminpassword123
```

---

## 🎉 Deployment Complete!

Your app is now live and will auto-deploy whenever you push to GitHub!

**Quick Reference:**
- Production Dashboard: `https://vercel.com/dashboard`
- Deployment Logs: Click on deployment to see build logs
- Environment Variables: Settings → Environment Variables
- Redeploy: Deployments tab → three dots → Redeploy

Need help? Check:
1. **Vercel logs** - Click deployment for error details
2. **NEXTAUTH_URL** - Must be updated after first deploy!
3. **MongoDB network** - Check IP whitelist
4. **Deployment guide** - See VERCEL_DEPLOYMENT.md

---

**Date Deployed**: ________________
**Production URL**: https://_______________________.vercel.app
**Status**: [ ] ✅ Live & Working
