async function getMenuData(section) {
  $.getJSON('Menu/menu.json', function (json) {
    document.getElementById('menutitle').innerHTML = section;
    let menuItemsArray = json.data.filter((menuObj) => menuObj.Section === section);
    let menuHTML = '';
    menuItemsArray.forEach((item) => {
      menuHTML += `<tr>
                      <td class='item-number'>${item.Number}.</td>
                      <td class='spicy'>${
                        item.Spicy === 'TRUE'
                          ? '<img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15">'
                          : ''
                      }</td>
                      <td>${item.Name}</td>
                      ${section === 'Soup' ? `<td>${item['Pt. Price'] ?? ''}</td>` : ''}
                      <td>${item.Price}</td>
                    </tr>`;
      if (item.Description) {
        menuHTML += `<tr>
                      <td></td>
                      <td></td>
                      <td>
                        <p id = "menudesc">${item.Description}</p>
                      </td>
                    </tr>`;
      }
    });
    if (section === 'Appetizers') {
      appComboInnerTableHTML = '';
      let appComboArray = json.data.filter((menuObj) => menuObj.Section === 'Appetizers Combo');
      appComboArray.forEach((item) => {
        appComboInnerTableHTML += `<tr>
                                      <td class='item-number'>${item.Number}.</td>
                                      <td></td>
                                      <td>${item.Name}</td>
                                      <td>${item.Price}</td>
                                    </tr>`;
      });
      document.getElementById(
        'menubody'
      ).innerHTML = `<table>${menuHTML}</table><div id = "menutitle">Appetizer Combos</div><div class = "centered"><p id = "menudesc">(All Items Can Be Substituted)<br>(Any substitution to Beef Teriyaki is an extra $1.00)</p></div><table>${appComboInnerTableHTML}</table>`;
    } else {
      document.getElementById('menubody').innerHTML = `<table>
              ${section === 'Soup' ? '<tr><td></td><td></td><td></td><td>Pt.</td><td>Qt.</td></tr>' : ''}
              ${
                section === 'Diet Food'
                  ? '<div class = "centered"><p id = "menudesc">(served w/ Ginger or Brown Sauce)</p></div>'
                  : ''
              }
              ${menuHTML}		
            </table>`;
    }
  });
}

async function appetizers() {
  getMenuData('Appetizers');
}
function soup() {
  getMenuData('Soup');
}
function rice() {
  getMenuData('Rice');
}
function lomein() {
  getMenuData('Lo Mein');
}
function chicken() {
  getMenuData('Poultry');
}
function cantonese() {
  getMenuData('Cantonese');
}
function mooshu() {
  getMenuData('Moo Shi Dishes');
}
function ricesticks() {
  getMenuData('Rice Sticks');
}
function sweetsour() {
  getMenuData('Sweet & Sour');
}
function beefpork() {
  getMenuData('Beef & Pork');
}
function seafood() {
  getMenuData('Seafood Dishes');
}
function veggies() {
  getMenuData('Vegetables');
}
function dietfood() {
  getMenuData('Diet Food');
}
function chefs() {
  getMenuData("Chef's Specials");
}
