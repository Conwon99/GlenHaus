# Google Indexing Guide - Glenhaus Garden Rooms

## Why Your Site Isn't Showing Up in Google

There are several reasons why your website might not appear when searching "GlenHaus Garden Rooms":

### 1. **Site Not Yet Indexed** (Most Common)
Google needs to discover and index your site. This can take **days to weeks** after launch.

### 2. **Not Submitted to Google Search Console**
Your site needs to be verified and submitted to Google Search Console for faster indexing.

### 3. **Brand Name Variation**
- Your site uses "Glenhaus" (lowercase 'h')
- Users might search "GlenHaus" (capital H)
- Google will eventually match these, but it takes time

---

## Steps to Get Your Site Indexed

### Step 1: Verify Your Site is Live
1. Visit `https://glenhausgardenroom.com` in a browser
2. Confirm the site loads correctly
3. Check that the sitemap is accessible: `https://glenhausgardenroom.com/sitemap.xml`

### Step 2: Submit to Google Search Console

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Your Property**
   - Click "Add Property"
   - Enter: `https://glenhausgardenroom.com`
   - Choose verification method (recommended: HTML file upload or DNS verification)

3. **Verify Ownership**
   - **Option A: HTML File Upload**
     - Download the HTML verification file Google provides
     - Upload it to your site's root directory (`/public/` or `/static/` in Astro)
     - Click "Verify" in Search Console
   
   - **Option B: DNS Verification** (if you have domain access)
     - Add the TXT record Google provides to your domain's DNS settings
     - Wait for DNS propagation (can take up to 48 hours)
     - Click "Verify" in Search Console

4. **Submit Your Sitemap**
   - Once verified, go to "Sitemaps" in the left menu
   - Enter: `sitemap.xml`
   - Click "Submit"
   - This tells Google to crawl all your pages

### Step 3: Request Indexing (Optional but Recommended)

1. In Google Search Console, go to "URL Inspection"
2. Enter your homepage URL: `https://glenhausgardenroom.com/`
3. Click "Request Indexing"
4. Repeat for: `https://glenhausgardenroom.com/garden-rooms`

### Step 4: Wait for Indexing

- **Initial indexing**: 1-7 days (usually 1-3 days)
- **Full indexing**: 2-4 weeks
- **Brand name recognition**: 2-6 weeks

---

## Additional SEO Improvements Made

### ✅ Fixed Issues:
1. **Sitemap Updated** - Now includes both homepage and `/garden-rooms` page
2. **Homepage Title Updated** - Now starts with "Glenhaus Garden Rooms" for better brand recognition
3. **Proper Meta Tags** - All pages have correct title, description, and canonical URLs
4. **Structured Data** - Schema.org markup for LocalBusiness, ProfessionalService, etc.
5. **Robots.txt** - Properly configured to allow all crawlers

### 📋 What to Check:

1. **Google Search Console Coverage**
   - After 1 week, check "Coverage" report
   - Look for any errors or warnings
   - Fix any issues reported

2. **Search Performance**
   - After 2-4 weeks, check "Performance" report
   - See which queries your site appears for
   - Monitor click-through rates

3. **Mobile Usability**
   - Check "Mobile Usability" report
   - Ensure no mobile issues

---

## Testing Your Indexing Status

### Quick Tests:

1. **Site Search**
   - Search: `site:glenhausgardenroom.com`
   - This shows all indexed pages

2. **Brand Search**
   - Search: `"Glenhaus Garden Rooms"`
   - Use quotes for exact phrase match

3. **URL Check**
   - Search: `glenhausgardenroom.com`
   - Should show your homepage

---

## Timeline Expectations

| Action | Expected Time |
|--------|---------------|
| Site submission to Search Console | Immediate |
| Initial crawl | 1-3 days |
| First pages indexed | 3-7 days |
| Full site indexed | 1-2 weeks |
| Brand name recognition | 2-6 weeks |
| Ranking for brand searches | 2-8 weeks |

---

## If Still Not Showing After 2 Weeks

1. **Check for Technical Issues**
   - Verify site is accessible
   - Check robots.txt isn't blocking
   - Ensure sitemap is valid

2. **Check Google Search Console**
   - Look for crawl errors
   - Check coverage report
   - Review any manual actions

3. **Improve Content**
   - Add more "Glenhaus Garden Rooms" mentions
   - Create more content (blog posts, case studies)
   - Get backlinks from other sites

4. **Consider Google Ads**
   - Run a small brand campaign
   - Helps Google learn about your brand faster

---

## Need Help?

If you're still not showing up after following these steps:
- Check Google Search Console for specific errors
- Verify your domain DNS settings
- Ensure your hosting is working correctly
- Contact your web developer for technical issues
