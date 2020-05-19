# Node project creation

1. Create app.js with basic JS:

    ```const path = require('path');
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    ```

2. Initialize Node Project:

    ```npm init```

3. Add Nodemon to the project. This will monitor and server changes to the project

    ```npm install nodemon --save-dev```

4. Add Express add-on to the project:

    ```npm install --save express```

5. Add Body-Parser add-on to the project:

    ```npm install --save body-parser```

6. Edit package.json in the scripts section, after the test line add a comma to the test line and:

    ```"start": "nodemon app.js"```

7. Install a templating package. There are 3 free popular packages:

    a. ejs

    `npm install --save ejs`

    b. pug

    `npm install --save pug`

    d. handlebars

    `npm install --save express-handlebars`

Download updates from Github:

`git pull origin master`


## Reference links

[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
