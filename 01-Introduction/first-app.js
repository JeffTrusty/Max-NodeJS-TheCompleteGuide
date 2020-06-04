const fs = require('fs');

// fs.writeFileSync(
//   'hello.txt',
//   'Hello from Node.JS'
// );

const links = JSON.parse(
  fs
    .readFileSync('../links.json')
    .toString()
);

const nav1Title = links.nav1.navName;
const nav1Links = links.nav1.navLinks;

for (navTitle in links) {
  console.log(
    'Section: ' +
      links[navTitle].navName
  );
  for (const navLink in nav1Links) {
    console.log(
      'Link Info: ' +
        nav1Links[navLink].linkName,
      nav1Links[navLink].linkSite,
      nav1Links[navLink].linkPwd
    );
  }
}

// console.log(nav1Links[0].linkName);
// console.log(nav1Links[0].linkSite);
// console.log(nav1Links[0].linkPwd);

//console.log(links);
