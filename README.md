foodprint-calc
==============

> Compare carbon foodprint of various custom diet plans

## TODO
####Short
+ Fix footer placement
+ Round results to 2dp
+ Add remove (and edit?) buttons next to each ingredient in recipe list
+ Add form to take recipe name


####Long
+ Get some comparison info - display result + equivalent activities e.g. x mile car journey, hours of tv, boiled kettles
+ Get additional data needed
+	a) co2 per kg of foods
+	b) recipes (20 main, 20 lunch, 10 breakfast, 20 snacks, drinks?) and quantities
+ Need more comprehensive list of foods, and consistent data set e.g. transport etc left out, or appropriate to a specific location. 
+ Add tabs for the 2 modes - meal detail and week/month detail
+ Design - look into drag and drop methods, test.
+ decide best system to store info so calculations will work - separate into food groups to make searches faster? Would speed up array searches (when ingredient choice is longer) but need to include method to tell function which food arrays to search based on recipe contents…
+ Make scrolling single page? About first, calc second, info/further reading last


## Design plans
+ Two modes? Could start with pre-designed meals and give option to go into more detail and make custom meals if interested to see where the differences in meal types come from… 
+ 	a) Fine detail: Drag and drop ingredients from categorized menus on left onto empty plate icons on right. Can name each plate. Add quantities to each ingredient. Can line up plates an compare emissions.
+ 	b) Bigger scale: Pre-designed meals with calculated emissions on left. Drag plates into meal calendar / table to create weekly diets with total emissions displayed. Can create different diets (with different names) to compare.


## Links
+ Treehugger [plot](http://www.treehugger.com/green-food/meat-eaters-guide-get-to-know-the-carbon-footprint-of-your-diet-lamb-beef-cheese-are-the-worst.html)
+ [5 diets](http://shrinkthatfootprint.com/food-carbon-footprint-diet)
+ [Food groups](http://fivepercent.us/2008/05/29/link-relative-climate-impact-of-red-meat-vs-other-food-types/)
+ Low carbon diet [wiki](http://en.wikipedia.org/wiki/Low_carbon_diet)

## Sources of data
+ [EWG Meat Eater’s Guide] (http://static.ewg.org/reports/2011/meateaters/pdf/methodology_ewg_meat_eaters_guide_to_health_and_climate_2011.pdf) Use UK value if given, average if not.

## Issues
- week/month scale - do for my portion sizes for now?
- seasonal/geography issues? i.e. include food miles or just focus on production emissions? Would make big difference to e.g. [rice](http://en.wikipedia.org/wiki/Rice#Production), [sugar](http://en.wikipedia.org/wiki/Sugarcane#Production)… For now, include transport, processing etc as can only get data with processing included. Future - needs to be location based… perhaps add property to food objects so can separate production costs (will also vary my technique though so location dependent too) and transport costs.
