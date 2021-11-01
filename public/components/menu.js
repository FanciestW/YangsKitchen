function getMenuData() {
  // TODO::Create a function that runs once everytime menu page loads and create the HTML for each section.
}

function appetizers() {
  $.getJSON('Menu/menu.json', function (json) {
    let appetizerDataArray = json.data.filter((menuObj) => menuObj.Section === 'Appetizers');
    let appetizerHTML = '';
    appetizerDataArray.forEach((item) => {
      let itemString = `<tr>
                          <td>${item.Number}.</td>
                          ${
                            item.Spicy === 'TRUE'
                              ? '<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" height = "15" width = "15"</td>'
                              : ''
                          }
                          <td>${item.Name}</td>
                          <td>${item.Price}</td>
                        </tr>`;
      appetizerHTML += itemString;
      if (item.Description) {
        let itemDescription = `<tr>
                                <td></td>
                                <td>
                                  <p id = "menudesc">${item.Description}</p>
                                </td>
                              </tr>`;
        appetizerHTML += itemDescription;
      }
    });
    console.log(appetizerHTML);
    document.getElementById('menubody').innerHTML = `<table>
          ${appetizerHTML}		
      </table>`;
  });
  document.getElementById('menutitle').innerHTML = 'Appetizers';
}
function soup() {
  document.getElementById('menutitle').innerHTML = 'Soup';
  document.getElementById('menubody').innerHTML =
    '<table>\
						<tr>\
							<td></td>\
							<td></td>\
							<td></td>\
							<td>Pt.</td>\
							<td>Qt.</td>\
						</tr>\
						<tr>\
							<td>16.</td>\
							<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
							<td>Hot &amp Sour Soup</td>\
							<td>$3.50</td>\
							<td>$5.50</td>\
						</tr>\
						<tr>\
							<td>17.</td>\
							<td></td>\
							<td>Wonton Soup</td>\
							<td>$2.95</td>\
							<td>$4.75</td>\
						</tr>\
						<tr>\
							<td>18.</td>\
							<td></td>\
							<td>Egg Drop Soup</td>\
							<td>$2.50</td>\
							<td>$4.25</td>\
						</tr>\
						<tr>\
							<td>19.</td>\
							<td></td>\
							<td>Vegetable Soup w/ Bean Curd</td>\
							<td></td>\
							<td>$5.50</td>\
						</tr>\
						<tr>\
							<td>20.</td>\
							<td></td>\
							<td>Seafood Soup</td>\
							<td></td>\
							<td>$7.50</td>\
						</tr>\
						<tr>\
							<td>21.</td>\
							<td></td>\
							<td>House Special Soup</td>\
							<td></td>\
							<td>$7.95</td>\
						</tr>\
				</table>';
}
function rice() {
  document.getElementById('menutitle').innerHTML = 'Rice';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Qt.</td>\
					</tr>\
					<tr>\
						<td>22.</td>\
						<td>Yang Chow Fried Rice</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>23.</td>\
						<td>House Special Fried Rice</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>24.</td>\
						<td>Fried Rice (Chicken or Pork)</td>\
						<td>$8.50</td>\
					</tr>\
					<tr>\
						<td>25.</td>\
						<td>Shrimp or Beef Fried Rice</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>26.</td>\
						<td>Vegetable Fried Rice</td>\
						<td>$7.95</td>\
					</tr>\
					<tr>\
						<td>27.</td>\
						<td>Boiled Rice</td>\
						<td>$2.75</td>\
					</tr>\
				</table>';
}
function lomein() {
  document.getElementById('menutitle').innerHTML = 'Lo Mein';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Qt.</td>\
					</tr>\
					<tr>\
						<td>28.</td>\
						<td>Chicken, Pork or Veg. Lo Mein</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>29.</td>\
						<td>House Special Lo Mein</td>\
						<td>$9.75</td>\
					</tr>\
					<tr>\
						<td>30.</td>\
						<td>Shrimp or Beef Lo Mein</td>\
						<td>$9.75</td>\
					</tr>\
					<tr>\
						<td>30a.</td>\
						<td>Plain Lo Mein</td>\
						<td>$7.50</td>\
					</tr>\
					<tr>\
						<td>31.</td>\
						<td>Two Sides Yellow Noodles w/ Seafood</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>32.</td>\
						<td>Shrimp, Beef, or Pork Pan Fried Noodle</td>\
						<td>$11.50</td>\
					</tr>\
					<tr>\
						<td>33.</td>\
						<td>Gai Po Lo Mein</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td>34.</td>\
						<td>Cold Summer Sesame Noodles</td>\
						<td>$8.50</td>\
					</tr>\
				</table>';
}
function chicken() {
  document.getElementById('menutitle').innerHTML = 'Chicken';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>35.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Chicken</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>36.</td>\
						<td></td>\
						<td>Chicken w/ Cashew Nuts</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>37.</td>\
						<td></td>\
						<td>Chicken w/ Broccoli</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>38.</td>\
						<td></td>\
						<td>Chicken w/ Pea Pods</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>39.</td>\
						<td></td>\
						<td>Moo Goo Gai Pan</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>40.</td>\
						<td></td>\
						<td>Eight Treasure Chicken</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>41.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Curry Chicken w/ Onion</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>42.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Chicken w/ Green Bean in Garlic Sauce</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>43.</td>\
						<td></td>\
						<td>Chicken w/ Mixed Vegetables</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>44.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Chicken w/ Garlic Sauce</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>45.</td>\
						<td></td>\
						<td>Chicken w/ Ginger &amp Scallions</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>46.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Hunan Chicken</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>47.</td>\
						<td></td>\
						<td>Hon Sue Gai</td>\
						<td>$10.95</td>\
					</tr>\
					<tr>\
						<td>48.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Stir Fried Chicken w/ Hot Sesame Sauce</td>\
						<td>$10.95</td>\
					</tr>\
				</table>';
}
function cantonese() {
  document.getElementById('menutitle').innerHTML = 'Cantonese';
  document.getElementById('menubody').innerHTML =
    '<table>\
				<tr>\
					<td>49.</td>\
					<td></td>\
					<td>Chow Mein</td>\
					<td>$8.95</td>\
				</tr>\
				<tr>\
					<td></td>\
					<td></td>\
					<td><div id = "menudesc">(Chicken, Beef, Pork, Shrimp or Vegetable)</div></td>\
					<td></td>\
				</tr>\
				<tr>\
					<td>50.</td>\
					<td></td>\
					<td>House Special Chow Mein</td>\
					<td>$9.75</td>\
				</tr>\
				<tr>\
					<td>51.</td>\
					<td></td>\
					<td>Chop Suey</td>\
					<td>$9.75</td>\
				</tr>\
				<tr>\
					<td></td>\
					<td></td>\
					<td><div id = "menudesc">(Chicken, Beef, Pork, Shrimp or Vegetable)</div></td>\
					<td></td>\
				</tr>\
				<tr>\
					<td>52.</td>\
					<td></td>\
					<td>House Special Chop Suey</td>\
					<td>$10.25</td>\
				</tr>\
				<tr>\
					<td>53.</td>\
					<td></td>\
					<td>Egg Foo Young</td>\
					<td>$9.25</td>\
				</tr>\
				<tr>\
					<td></td>\
					<td></td>\
					<td><div id = "menudesc">(Chicken, Beef, Pork, Shrimp or Vegetable)</div></td>\
					<td></td>\
				</tr>\
				<tr>\
					<td>54.</td>\
					<td></td>\
					<td>Mushroom Egg Foo Young</td>\
					<td>$8.50</td>\
				</tr>\
				</table>';
}
function mooshu() {
  document.getElementById('menutitle').innerHTML = 'Moo Shu Dishes';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>55.</td>\
						<td></td>\
						<td>Moo Shu Chicken or Pork</td>\
						<td>$9.75</td>\
					</tr>\
					<tr>\
						<td>56.</td>\
						<td></td>\
						<td>Moo Shu Shrimp or Beef</td>\
						<td>$10.25</td>\
					</tr>\
					<tr>\
						<td>57.</td>\
						<td></td>\
						<td>Moo Shu with Vegetables</td>\
						<td>$9.25</td>\
					</tr>\
				</table>';
}
function ricesticks() {
  document.getElementById('menutitle').innerHTML = 'Rice Sticks';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>58.</td>\
						<td></td>\
						<td>Curry Noodles Singapore Style</td>\
						<td>$10.50</td>\
					</tr>\
					<tr>\
						<td>59.</td>\
						<td></td>\
						<td>Rice Sticks with</td>\
						<td>$9.75</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><div id = "menudesc">(Shrimp, Pork, Beef, Vegetable)</div></td>\
						<td></td>\
					</tr>\
				</table>';
}
function sweetsour() {
  document.getElementById('menutitle').innerHTML = 'Sweet &amp Sour';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>60.</td>\
						<td></td>\
						<td>Sweet &amp Sour Chicken</td>\
						<td>$10.25</td>\
					</tr>\
					<tr>\
						<td>62.</td>\
						<td></td>\
						<td>Sweet &amp Sour Shrimp</td>\
						<td>$11.25</td>\
					</tr>\
				</table>';
}
function beefpork() {
  document.getElementById('menutitle').innerHTML = 'Beef &amp Pork';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>63.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Hunan Beef</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>64.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Beef</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>65.</td>\
						<td></td>\
						<td>Beef with Broccoli</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>66.</td>\
						<td></td>\
						<td>Beef with Seasonal Vegetables</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>67.</td>\
						<td></td>\
						<td>Pepper Steak with Onion</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>68.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Beef with Garlic Sauce</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>69.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Shredded Spicy Beef</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>70.</td>\
						<td></td>\
						<td>Beef with Green Bean</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>71.</td>\
						<td></td>\
						<td>Beef with Pea Pods</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>72.</td>\
						<td></td>\
						<td>Beef with Scallions</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>73.</td>\
						<td></td>\
						<td>Mongolian Beef</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>74.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Pork</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td>75.</td>\
						<td></td>\
						<td>Pork with Broccoli</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td>76.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Twice Cooked Pork</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td>77.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Pork with Garlic Sauce</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td>78.</td>\
						<td></td>\
						<td>Pork with Pea Pods</td>\
						<td>$11.25</td>\
					</tr>\
				</table>';
}
function seafood() {
  document.getElementById('menutitle').innerHTML = 'Seafood Dishes';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>79.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Shrimp</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>80.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Shrimp with Broccoli</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>81.</td>\
						<td></td>\
						<td>Shrimp with Mixed Vegetables</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>82.</td>\
						<td></td>\
						<td>Shrimp with Cashew Nuts</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>83.</td>\
						<td></td>\
						<td>Shrimp with Lobster Sauce</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>84.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Shrimp with Garlic Sauce</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>85.</td>\
						<td></td>\
						<td>Shrimp with Pea Pods</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>86.</td>\
						<td></td>\
						<td>Shrimp with Black Bean Sauce</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>87.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Shrimp Szechuan Style</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td>88.</td>\
						<td></td>\
						<td>Scallops with Mixed Vegetables</td>\
						<td>$13.25</td>\
					</tr>\
					<tr>\
						<td>89.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Scallops Szechuan Style</td>\
						<td>$13.25</td>\
					</tr>\
					<tr>\
						<td>90.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Scallops in Garlic Sauce</td>\
						<td>$13.25</td>\
					</tr>\
				</table>';
}
function veggies() {
  document.getElementById('menutitle').innerHTML = 'Vegetables';
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>91.</td>\
						<td></td>\
						<td>Vegetable Delight</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>92.</td>\
						<td></td>\
						<td>Pan Fried Green Beans</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>93.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Broccoli in Garlic Sauce</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>94.</td>\
						<td></td>\
						<td>Sauteed Broccoli</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>95.</td>\
						<td></td>\
						<td>Sauteed Waterchestnuts, Pea Pods,</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td>Bamboo Shoots</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>96.</td>\
						<td></td>\
						<td>Home Style Tofu</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>97.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Ma Po Tofu</td>\
						<td>$9.25</td>\
					</tr>\
					<tr>\
						<td>98.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Tofu with Peanut</td>\
						<td>$9.25</td>\
					</tr>\
				</table>';
}
function diet() {
  document.getElementById('menutitle').innerHTML = 'Diet Food';
  document.getElementById('menubody').innerHTML =
    '<div class = "centered">\
				<p id = "menudesc">(with Ginger or Brown Sauce)</p>\
				</div>\
				<table>\
					<tr>\
						<td>D1.</td>\
						<td></td>\
						<td>Steam Broccoli</td>\
						<td>$8.95</td>\
					</tr>\
					<tr>\
						<td>D2.</td>\
						<td></td>\
						<td>Steam Mix Vegetables</td>\
						<td>$8.95</td>\
					</tr>\
					<tr>\
						<td>D3.</td>\
						<td></td>\
						<td>Steam Chicken w/ Broccoli</td>\
						<td>$10.50</td>\
					</tr>\
					<tr>\
						<td>D4.</td>\
						<td></td>\
						<td>Steam Chicken w/ Snow Pea</td>\
						<td>$10.50</td>\
					</tr>\
					<tr>\
						<td>D5.</td>\
						<td></td>\
						<td>Steam Chicken w/ Mix Veg.</td>\
						<td>$10.50</td>\
					</tr>\
					<tr>\
						<td>D6.</td>\
						<td></td>\
						<td>Steam Shrimp w/ Broccoli</td>\
						<td>$11.50</td>\
					</tr>\
					<tr>\
						<td>D7.</td>\
						<td></td>\
						<td>Steam Shrimp w/ Snow Pea</td>\
						<td>$11.50</td>\
					</tr>\
					<tr>\
						<td>D8.</td>\
						<td></td>\
						<td>Steam Shrimp w/ Mix Veg.</td>\
						<td>$11.50</td>\
					</tr>\
				</table>';
}
function chefs() {
  document.getElementById('menutitle').innerHTML = "Chef's Specials";
  document.getElementById('menubody').innerHTML =
    '<table>\
					<tr>\
						<td>C1.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>General Tso\'s Chicken</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Chunks of chicken deep fried to crispy dipped into sweet &<br>sour sauce. Then served with broccoli.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C2.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Orange Flavored Crispy Chicken</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Fried crispy chicken with orange peel in spicy special sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C3.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Orange Flavored Crispy Beef</td>\
						<td>$12.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Fried crispy beef with orange peel in spicy special sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C4.</td>\
						<td></td>\
						<td>Sesame Chicken</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Chunks of chicken deep fried to crsipy, dipped in sweet sauce.<br>Then sprinkled with sesame seeds and served with broccoli.</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C5.</td>\
						<td></td>\
						<td>Sesame Beef</td>\
						<td>$12.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Chunks of beef deep fried to crispy, dipped in sweet sauce.<br>Then sprinkled with sesame seeds and served with broccoli.</td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C6.</td>\
						<td></td>\
						<td>Lemon Chicken</td>\
						<td>$11.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Deep fried tender white meat chicken bedded on top of<br>steamed broccoli with fresh sliced lemon on top with lemon<br>sauce on the side</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C7.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Ta Chien Chicken</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Boneless chicken fried crispy & mixed vegetables in hot<br>brown sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C8.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Salt & Pepper Crispy Shrimp</td>\
						<td>$12.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Fried large salt & pepper shrimp with steam broccoli.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C9.</td>\
						<td></td>\
						<td>Rainbow Shrimp</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Jumbo shrimp with shredded vegetable in light sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C10.</td>\
						<td></td>\
						<td>Rose Shrimp</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Shrimp, scallop & mixed vegetable in spicy brown sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C11.</td>\
						<td></td>\
						<td>House Special Seafood Delights</td>\
						<td>$16.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">An assortment of culinary sea treasures with mixed<br>vegetables.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C12.</td>\
						<td></td>\
						<td>Happy Family</td>\
						<td>$16.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Shrimp, beef, roast pork, scallop, lobster with mixed vegetables<br>in chef special sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C13.</td>\
						<td></td>\
						<td>Four Season</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Shrimp, scallops, roast pork & chicken with mixed<br>vegetables.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C14.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Dragon & Phoenix</td>\
						<td>$12.25</td>\
					</tr>\
					<tr>\
						<td>C15.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Shrimp & Scallops</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Jumbo shrimp & scallops, broccoli, red & green pepper in hot<br>spicy garlic sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C16.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Lake Tung Ting Shrimp</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Large shrimp with assorted vegetables & egg white in light<br>sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C17.</td>\
						<td></td>\
						<td>Marble Beef</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Scallop, beef, Chinese vegetable & broccoli in brown sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C18.</td>\
						<td></td>\
						<td>Triple Delight</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Large shrimp, chicken, beef,  baby corn, broccoli, mushroom,<br>in brown sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C19.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Kung Pao Three Delights</td>\
						<td>$12.50</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Large shrimp, beef, chicken, red & green pepper & peanuts.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C20.</td>\
						<td></td>\
						<td>Seven Stars Around the Moon</td>\
						<td>$19.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Combination of lobster, large shrimps, scallops, beef, crab<br>meat w/ mixed vegetables in our chef\'s special sauce and crispy<br>white meat chicken & crab rangoon on the side.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C21.</td>\
						<td><img src = "Pictures/chili.png" alt = "spicy" height = "15" width = "15"></td>\
						<td>Hunan Crispy Beef</td>\
						<td>$12.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Fried crispy beef in spicy sauce.</p></td>\
						<td></td>\
					</tr>\
					<tr>\
						<td>C22.</td>\
						<td></td>\
						<td>Wok Su Duck</td>\
						<td>$13.50</td>\
					</tr>\
					<tr>\
						<td>C23.</td>\
						<td></td>\
						<td>House Special Duck</td>\
						<td>$15.95</td>\
					</tr>\
					<tr>\
						<td></td>\
						<td></td>\
						<td><p id = "menudesc">Fried crispy duck, shrimp, roast pork, scallop with mixed<br>vegetables.</p></td>\
						<td></td>\
					</tr>\
				</table>';
}
