const item = document.querySelector('#categories');

const msg = (elem) => {
     let text = `Number of categories: ${elem.childElementCount}\n\n` + [...elem.children]
          .map(el => [...el.children]
               .map(ch => {
                    return ch.tagName === "H2" ? `Category: ${ch.textContent}` : `Elements: ${ch.childElementCount}`;
               })
               .join('\n'))
          .join('\n\n');
     return text
};

console.log(msg(item));

