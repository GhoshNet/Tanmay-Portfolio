// Google Analytics 4 Event Tracking Helper
// This file provides utility functions to track user interactions on your portfolio

/**
 * Track custom events in Google Analytics
 * @param {string} eventName - Name of the event (e.g., 'resume_download', 'project_click')
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

/**
 * Track resume download
 */
export const trackResumeDownload = () => {
    trackEvent('resume_download', {
        event_category: 'engagement',
        event_label: 'Resume Download Button',
    });
};

/**
 * Track project link clicks
 * @param {string} projectName - Name of the project
 */
export const trackProjectClick = (projectName) => {
    trackEvent('project_click', {
        event_category: 'engagement',
        event_label: projectName,
    });
};

/**
 * Track social media link clicks
 * @param {string} platform - Social media platform (e.g., 'LinkedIn', 'GitHub')
 */
export const trackSocialClick = (platform) => {
    trackEvent('social_click', {
        event_category: 'engagement',
        event_label: platform,
    });
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmit = () => {
    trackEvent('contact_form_submit', {
        event_category: 'engagement',
        event_label: 'Contact Form',
    });
};

/**
 * Track section views (when user scrolls to a section)
 * @param {string} sectionName - Name of the section (e.g., 'About', 'Projects', 'Contact')
 */
export const trackSectionView = (sectionName) => {
    trackEvent('section_view', {
        event_category: 'engagement',
        event_label: sectionName,
    });
};
