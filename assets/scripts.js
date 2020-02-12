const headings = document.querySelectorAll('article.article h2, article.article h3, div.gist');
const linkContent = '#';
for (const heading of headings) {
    const linkIcon = document.createElement('a');
    linkIcon.setAttribute('href', `#${heading.id}`);
    linkIcon.setAttribute('title', 'permalink');
    linkIcon.setAttribute('class', 'heading-anchor');
    linkIcon.innerHTML = linkContent;
    heading.appendChild(linkIcon);
}
