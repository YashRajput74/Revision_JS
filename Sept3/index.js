/* 
Input: const css = `
  :root {
    --main-color: #3498db;
    --padding: 10px 20px;
    --font-size: 16px;
  }
  
  body {
    background: var(--main-color);
  }
`;

console.log(parseCSSVariables(css));
Output:
{
  "--main-color": "#3498db",
  "--padding": "10px 20px",
  "--font-size": "16px"
}
*/

function parseCSSVariables(css) {
    //to detect the root variable and then return all the values present inside it
    //write a function that is able to check for the root maybe?
    
    return
}