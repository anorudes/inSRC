import beautifyJS from './beautify';
import beautifyCSS from './beautify-css';
import beautifyHTML from './beautify-html';

export default function(code) {
  code = beautifyJS.js_beautify(code, {indent_size: 2});
  code = beautifyHTML.html_beautify(code, {indent_size: 2});
  code = beautifyCSS.css_beautify(code, {indent_size: 2});
  return code;
}

