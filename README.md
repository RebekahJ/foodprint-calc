foodprint-calc
==============

> Compare carbon foodprint of various custom diet plans

## TODO
####Short
+ Get some comparison info. Display result in kg + equivalent activities e.g. 60W bulb burning for x mins, x mile car journey, hours of tv, boiled kettles…
+ With calories, give % of daily requirements for an average adult man/woman (needed to compare nutritional value of different meals). (Later extension - protein? Carbs? Important nutritional groups rather than just calories?).
+ Add remove/edit buttons next to ingredients in the recipe list.
+ Change prompt when ingredient is clicked more than once.

.
####Long
+ Separate list for liquids with quantities in ml? (Currently rely on people converting to g).
+ Add form to take recipe name
+ Get additional data needed
+	a) co2 and cals per kg of foods
+	b) recipes (20 main, 20 lunch, 10 breakfast, 20 snacks, drinks?) and quantities
+ Need a more comprehensive list of foods, and consistent data set e.g. transport etc left out, or all data corresponding to the same country/region. 
+ Add tabs for the 2 modes - meal detail and week/month detail
+ Design - look into drag and drop methods for ingredients, test.
+ decide best system to store info so calculations will work - separate into food groups to make searches faster? Would speed up array searches (when ingredient choice is longer) but need to include method to tell function which food arrays to search based on recipe contents…
+ Make scrolling single page? About first, calc second, info/further reading last


## Design plans
+ Two modes for 2 different levels of detail: 
+ 	a) Fine detail: Drag and drop ingredients from categorized menus on left onto empty plate icons on right. Can name each plate. Add quantities to each ingredient. Can line up plates an compare emissions.
+ 	b) Bigger scale: Pre-designed meals with calculated emissions on left. Drag plates into meal calendar / table to create weekly diets with total emissions displayed. Can create different diets (with different names) to compare.


## Links
+ Treehugger [plot](http://www.treehugger.com/green-food/meat-eaters-guide-get-to-know-the-carbon-footprint-of-your-diet-lamb-beef-cheese-are-the-worst.html)
+ [5 diets](http://shrinkthatfootprint.com/food-carbon-footprint-diet)
+ [Food groups](http://fivepercent.us/2008/05/29/link-relative-climate-impact-of-red-meat-vs-other-food-types/)
+ Low carbon diet [wiki](http://en.wikipedia.org/wiki/Low_carbon_diet)
+ Calorie info [USDA](http://ndb.nal.usda.gov/ndb/foods/show/7555?qlookup=23568&max=25&man=&lfacet=&new=1)


## Sources of data
+ [EWG Meat Eater’s Guide] (http://static.ewg.org/reports/2011/meateaters/pdf/methodology_ewg_meat_eaters_guide_to_health_and_climate_2011.pdf) Use UK value if given, average if not.


## Issues
- week/month scale - do for my portion sizes for now?
- seasonal/geography issues? i.e. include food miles or just focus on production emissions? Would make big difference to e.g. [rice](http://en.wikipedia.org/wiki/Rice#Production), [sugar](http://en.wikipedia.org/wiki/Sugarcane#Production)… For now, include transport, processing etc as can only get data with processing included. Future - needs to be location based… perhaps add property to food objects so can separate production costs (will also vary my technique though so location dependent too) and transport costs.
