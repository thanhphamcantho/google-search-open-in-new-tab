'use strict';

const url = new URL(window.location.href);
const domain = url.hostname;

const path = '/search';
const queryParams = url.searchParams.get('q');

const googleDomain = domain.includes('google');
const stackOverflowDomain = domain.includes('stackoverflow');

if (googleDomain && queryParams && url.pathname === path) {
  const openNewTabIcon =
    '<svg style="position:relative; top:5px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

  const openNewTabIcon0px =
    '<svg style="position:relative; top:0px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

  const svgWithSpace = `&nbsp; ${openNewTabIcon}`;
  const h3TitleTags = document.querySelectorAll('a > h3');
  const titleAnchorTags = document.querySelectorAll('h3 > a');
  const anchorTags = document.querySelectorAll('a');

  for (const h3TitleTag of h3TitleTags) {
    h3TitleTag.parentElement.setAttribute('target', '_blank');
    h3TitleTag.innerHTML += svgWithSpace;
  }

  for (const titleAnchorTag of titleAnchorTags) {
    titleAnchorTag.setAttribute('target', '_blank');
    titleAnchorTag.innerHTML += `&nbsp; ${openNewTabIcon0px}`;
  }

  for (const anchorTag of anchorTags) {
    anchorTag.setAttribute('target', '_blank');
  }
}

if (stackOverflowDomain) {
  const openNewTabIcon =
    '<svg style="position:relative; top:2px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

  const svgWithSpace = `&nbsp; ${openNewTabIcon}`;
  const titleAnchorTags = document.querySelectorAll('h3 > a');
  const anchorTags = document.querySelectorAll('a');

  for (const titleAnchorTag of titleAnchorTags) {
    titleAnchorTag.setAttribute('target', '_blank');
    titleAnchorTag.innerHTML += svgWithSpace;
  }

  for (const anchorTag of anchorTags) {
    anchorTag.setAttribute('target', '_blank');
  }
}
