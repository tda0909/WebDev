// SiteTreeUtility - Shows the DOM tree layout of the current webpage.
//
//     Copyright (C) 2016 - 2017 Charles Vance Terry
//     Email: ct.jcpm@gmail.com
//
//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
//
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>.
// End License

/**
  Global Object
**/
var jcpm; if (typeof jcpm === `undefined`) jcpm = {};

/**
  Initializer
**/
jcpm.walkTreeStart = function(node) {
  jcpm.init = true;                              // Set Init Flag
  jcpm.walkTreeOutput = `HTML Tree Layout:\r\n`; // Reset Tree/Add Header
  node = node || document.body;
  jcpm.walkTree(node, 0);                        // Start
  jcpm.walkTreeOutput += `End of HTML Tree`;     // Add Footer to Tree
  jcpm.displayOutput();                          // Show Output in PopUp Window
  jcpm.init = false;                             // Clear Init Flag
};

/**
  Tree Walker
**/
jcpm.walkTree = function(node, depth) {
  /* Ensure Proper Initialization */
  if (!jcpm.init) {
    jcpm.walkTreeStart();
    return;
  }
  /* Output Various Node Details */
  if (typeof node.tagName !== `undefined`) {
    for (let i = 0; i < depth; i += 1) {
      jcpm.walkTreeOutput += `  :`;               // Indention & Guides
    }
    var tagName = node.tagName.toLowerCase();
    jcpm.walkTreeOutput += (`<` + tagName + `>`); // Element Type
    if (node.classList.length !== 0) {
      jcpm.walkTreeOutput += `    `;              // Element-Class Delimiter
      node.classList.forEach( function(val) {
        jcpm.walkTreeOutput += (`.` + val);       // Element Class Name(s)
      });
    }
    if (node.id !== ``) {
      jcpm.walkTreeOutput += `    `;              // Element-ID Delimiter
      jcpm.walkTreeOutput += (`#` + node.id);     // Element ID
    }
    jcpm.walkTreeOutput += `\r\n`;                // New Line
  }
  /* Recursion to Work Through the Tree */
  node.childNodes.forEach( function(val, i, arr) {
        jcpm.walkTree(arr[i], (depth + 1));
      });
};

/**
  PopUp Window Creator
**/
jcpm.displayOutput = function() {
  let popUp = window.open(``, ``, `width=1200,height=600`);
  let node = document.createElement(`TEXTAREA`);
  let outputText = document.createTextNode(jcpm.walkTreeOutput);
  node.appendChild(outputText);
  node.setAttribute(`warp`, `soft`);
  node.setAttribute(`style`, `margin:0px;border:0px;width:100%;height:100%;`);
  popUp.document.body.appendChild(node);
};
