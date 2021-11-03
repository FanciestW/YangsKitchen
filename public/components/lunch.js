$(document).ready(function () {
  $.getJSON('Menu/menu.json', function (json) {
    let lunch1HTML = '';
    let lunch2HTML = '';
    let lunch3HTML = '';
    let lunchItemsArray = json.data.filter((menuObj) =>
      ['Lunch Special', 'Lunch Appetizers Combo'].includes(menuObj.Section)
    );
    console.log(lunchItemsArray);
    lunchItemsArray.forEach((item) => {
      lunchNum = parseInt(item.Number.slice(1));
      lunchItemHTML = `<tr>
                        <td class='item-number'>${item.Number}.</td>
                        <td class='spicy'>
                        ${
                          item.Spicy === 'TRUE'
                            ? '<img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15">'
                            : ''
                        }
                        </td>
                        <td>${item.Name}</td>
                        <td>${item.Price}</td>
                      </tr>`;
      if (lunchNum >= 1 && lunchNum < 15) {
        lunch1HTML += lunchItemHTML;
      } else if (lunchNum >= 15 && lunchNum < 30) {
        lunch2HTML += lunchItemHTML;
      } else if (lunchNum >= 30 && lunchNum < 33) {
        lunch3HTML += lunchItemHTML;
      }
    });
    $('table.lunch1').html(lunch1HTML);
    $('table.lunch2').html(lunch2HTML);
    $('table.lunch3').html(lunch3HTML);
  });
});
