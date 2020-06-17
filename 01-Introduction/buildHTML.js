const fs = require('fs');

/*   Read links.json file into links object   */
const links = JSON.parse(fs.readFileSync('../links.json').toString());
/*   Parse links object   */
let x = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="index.css" media="screen">
  <script src="app.js" defer></script>
  <title>My Links</title>
  <!-- https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535 -->
</head>
<body>
<nav>
<ul class="menu">\n<li class="logo"><a href="#">Jeff Trusty Links</a></li>\n`;
// console.log(x);
Object.keys(links).forEach(function (key) {
  if (links[key].type === 'Section' && links[key].navName === 'My Most Used') {
    // At end of Nav's
    // console.log('First Section: ' + links[key].navName);
    x += `<li class="toggle"><a href="#"><i class="fas fa-bars">\n</i></a></li>\n</ul></nav>\n<h1 class="panel-title" align="center"><b>${links[key].navName}</b></h1>`;
  } else if (
    links[key].type === 'Nav' &&
    links[key].navName !== 'My Most Used'
  ) {
    // console.log('Nav: ' + links[key].navName);
    x += `<li class="item has-submenu"><a tabindex="0">${links[key].navName}</a><ul class="submenu">`;
  } else if (links[key].type === 'Section') {
    // console.log('Section: ' + links[key].navName);
    x += `<h1 class="panel-title" align="center"><b>${links[key].navName}</b></h1>`;
  }

  let sectionLinks = links[key].navLinks;
  let sectionType = links[key].type;
  /*   Parse each section within links object   */
  Object.keys(sectionLinks).forEach(function (subkey) {
    if (sectionLinks[subkey].linkSite !== '' && sectionType === 'Nav') {
      x += `\n<li class="subitem" onclick="openInNewTab('${sectionLinks[subkey].linkSite}', '${sectionLinks[subkey].linkPwd}')"><a href="#">${sectionLinks[subkey].linkName}</a></li>`;
      // console.log('NavLink: ' + sectionLinks[subkey].linkName);
    } else if (
      sectionLinks[subkey].linkSite !== '' &&
      sectionType === 'Section'
    ) {
      x += `\n<button class="btn" onclick="openInNewTab('${sectionLinks[subkey].linkSite}', '${sectionLinks[subkey].linkPwd}')"><a href="#">${sectionLinks[subkey].linkName}</a></button>`;
      // console.log('SectionLink: ' + sectionLinks[subkey].linkName);
    }
  });
    x += '\n</ul>\n</li>\n';
});
x += `</body>
</html>
`;
// console.log(x);
fs.writeFileSync('links.html', x);
