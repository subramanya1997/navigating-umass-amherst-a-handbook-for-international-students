/**
 * Utterances Comments Loader for HonKit
 * Handles dynamic loading of comments on page navigation
 */

function loadUtterances() {
    const commentsSection = document.querySelector('.comments-section');
    if (!commentsSection) return;
    
    // Clear existing comments to prevent duplicates
    commentsSection.innerHTML = '';
    
    // Create and inject new Utterances script
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'subramanya1997/navigating-umass-amherst-a-handbook-for-international-students');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    
    commentsSection.appendChild(script);
}

// Load comments on initial page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadUtterances);
} else {
    loadUtterances();
}

// Reload comments on HonKit page navigation
require(['gitbook'], function(gitbook) {
    gitbook.events.bind('page.change', function() {
        // Small delay to ensure the new page content is rendered
        setTimeout(loadUtterances, 100);
    });
});

