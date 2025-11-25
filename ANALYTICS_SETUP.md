# Google Analytics Setup Guide

## Overview
Your portfolio now includes Google Analytics 4 (GA4) integration to track user interactions and gather insights about your visitors.

## Setup Steps

### 1. Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (gear icon)
4. Create a new property:
   - Property name: "Tanmay Ghosh Portfolio"
   - Time zone: Your timezone
   - Currency: Your currency

### 2. Get Your Measurement ID
1. In your new property, go to **Admin** → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your website URL (e.g., `https://tanmayghosh.dev`)
4. Stream name: "Portfolio Website"
5. Click **Create stream**
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Update Your Portfolio
1. Open `/Users/tanmay/Documents/PersonalProjects/Tanmay-Portfolio/index.html`
2. Find the two instances of `G-XXXXXXXXXX` (lines 33 and 38)
3. Replace both with your actual Measurement ID

**Example:**
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- After (with your actual ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

### 4. Deploy Your Changes
After updating the Measurement ID, deploy your portfolio to your hosting platform (Vercel, Netlify, GitHub Pages, etc.).

## What's Being Tracked

Your portfolio automatically tracks the following events:

### 1. **Page Views**
- Automatically tracked when users visit your portfolio
- View in GA4: **Reports** → **Engagement** → **Pages and screens**

### 2. **Resume Downloads**
- Tracked when users click "Download Resume" button
- Event name: `resume_download`
- View in GA4: **Reports** → **Engagement** → **Events**

### 3. **Social Media Clicks**
- Tracked when users click LinkedIn, GitHub, or Email links
- Event name: `social_click`
- Parameters: Platform name (LinkedIn, GitHub, Email)

### 4. **Project Clicks**
- Tracked when users click on project GitHub links
- Event name: `project_click`
- Parameters: Project name

### 5. **Contact Form Submissions**
- Tracked when users submit the contact form
- Event name: `contact_form_submit`

## How Analytics Work

### Analytics Utility File
Location: `/src/utils/analytics.js`

This file contains helper functions for tracking events:

```javascript
import { trackResumeDownload, trackSocialClick, trackProjectClick } from '../utils/analytics';

// Example usage in a component:
<button onClick={trackResumeDownload}>
  Download Resume
</button>
```

### Available Functions

1. **`trackEvent(eventName, eventParams)`**
   - Generic function to track any custom event
   - Used internally by other tracking functions

2. **`trackResumeDownload()`**
   - Tracks resume download button clicks

3. **`trackProjectClick(projectName)`**
   - Tracks clicks on project links
   - Pass the project name as parameter

4. **`trackSocialClick(platform)`**
   - Tracks social media link clicks
   - Pass platform name: 'LinkedIn', 'GitHub', 'Email'

5. **`trackContactFormSubmit()`**
   - Tracks contact form submissions

6. **`trackSectionView(sectionName)`**
   - Tracks when users scroll to different sections
   - Pass section name: 'About', 'Projects', 'Contact'

## Viewing Analytics Data

### Real-Time Reports
1. Go to Google Analytics
2. Navigate to **Reports** → **Realtime**
3. See live visitors and their activities

### Event Reports
1. Navigate to **Reports** → **Engagement** → **Events**
2. See all tracked events with counts
3. Click on an event to see detailed breakdown

### User Demographics
1. Navigate to **Reports** → **User** → **Demographics**
2. See visitor locations, devices, browsers

### Traffic Sources
1. Navigate to **Reports** → **Acquisition** → **Traffic acquisition**
2. See where your visitors come from (Google, LinkedIn, direct, etc.)

## Privacy Considerations

Google Analytics respects user privacy:
- No personally identifiable information (PII) is collected
- IP addresses are anonymized
- Users can opt-out via browser extensions
- Complies with GDPR and privacy regulations

## Testing Your Setup

### 1. Test Locally
1. Run your portfolio: `npm run dev`
2. Open browser console (F12)
3. Click "Download Resume" or other tracked elements
4. You should see analytics events in console (if in development mode)

### 2. Test in Production
1. Deploy your portfolio
2. Visit your live site
3. Go to Google Analytics → **Realtime**
4. Perform actions (download resume, click links)
5. See events appear in real-time

### 3. Verify Events
1. In GA4, go to **Configure** → **Events**
2. You should see your custom events listed:
   - `resume_download`
   - `social_click`
   - `project_click`
   - `contact_form_submit`

## Troubleshooting

### Events Not Showing Up
1. **Check Measurement ID**: Ensure you replaced `G-XXXXXXXXXX` with your actual ID
2. **Check Browser**: Some ad blockers block Google Analytics
3. **Wait Time**: Events may take a few minutes to appear in reports
4. **Console Errors**: Check browser console for JavaScript errors

### Real-time Not Working
1. Ensure you're on the deployed site (not localhost)
2. Try incognito/private browsing mode
3. Disable ad blockers temporarily

## Advanced: Custom Event Tracking

To track additional events, use the `trackEvent` function:

```javascript
import { trackEvent } from '../utils/analytics';

// Example: Track button clicks
const handleCustomAction = () => {
  trackEvent('custom_action', {
    event_category: 'engagement',
    event_label: 'Custom Button',
    value: 1
  });
};
```

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
- [GA4 Reports Overview](https://support.google.com/analytics/answer/9212670)

## Summary

Your portfolio is now equipped with comprehensive analytics tracking. Once you add your Measurement ID and deploy, you'll be able to:

✅ Track visitor counts and demographics
✅ Monitor resume downloads
✅ See which projects get the most clicks
✅ Understand user behavior and engagement
✅ Make data-driven improvements to your portfolio

**Next Step**: Get your Measurement ID from Google Analytics and update `index.html`!
