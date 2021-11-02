async function getMenuData(section) {
  $.getJSON('Menu/menu.json', function (json) {
    let appetizerDataArray = json.data.filter((menuObj) => menuObj.Section === section);
    let appetizerHTML = '';
    appetizerDataArray.forEach((item) => {
      let itemString = `<tr>
                          <td>${item.Number}.</td>
                          ${
                            item.Spicy === 'TRUE'
                              ? '<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>'
                              : '<td></td>'
                          }
                          <td>${item.Name}</td>
                          <td>${item.Price}</td>
                        </tr>`;
      appetizerHTML += itemString;
      if (item.Description) {
        let itemDescription = `<tr>
                                <td></td>
                                <td></td>
                                <td>
                                  <p id = "menudesc">${item.Description}</p>
                                </td>
                              </tr>`;
        appetizerHTML += itemDescription;
      }
    });
    document.getElementById('menutitle').innerHTML = section;
    document.getElementById('menubody').innerHTML = `<table>
            ${appetizerHTML}		
          </table>`;
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
function chefs() {
  getMenuData("Chef's Specials");
}
