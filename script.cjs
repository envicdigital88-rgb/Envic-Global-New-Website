const fs = require('fs');
const html = fs.readFileSync('envic_home.html', 'utf-8');
const t_comments = html.match(/<div class="title_no_a_20 t_comment">([\s\S]*?)<\/div>/g) || [];
console.log(t_comments);

