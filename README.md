foodprint-calc
==============

> Compare carbon foodprint of various custom diet plans

## TODO
+ Complete input method - allow ingredients to be searched, selected, displayed, quantities added and total emissions displayed.
+ Allow up to 5 meals to be added and displayed at once (also allow meals to be selected and edited later)
+ Make pretty! 

+ Get additional data needed
+	a) co2 per kg of foods
+	b) recipes (20 main, 20 lunch, 10 breakfast, 20 snacks, drinks?) and quantities
+ Need more comprehensive list of foods, and consistent data set e.g. transport etc left out, or appropriate to a specific location. 
+ decide best system to store info so calculations will work - separate into food groups to make searches faster? Would speed up array searches but need to include method to tell function which food arrays to search based on recipe contents…

## Links
+ Treehugger [plot](http://www.treehugger.com/green-food/meat-eaters-guide-get-to-know-the-carbon-footprint-of-your-diet-lamb-beef-cheese-are-the-worst.html)
+ [5 diets](http://shrinkthatfootprint.com/food-carbon-footprint-diet)
+ [Food groups](http://fivepercent.us/2008/05/29/link-relative-climate-impact-of-red-meat-vs-other-food-types/)
+ Low carbon diet [wiki](http://en.wikipedia.org/wiki/Low_carbon_diet)

## Sources of data
+ [EWG Meat Eater’s Guide] (http://static.ewg.org/reports/2011/meateaters/pdf/methodology_ewg_meat_eaters_guide_to_health_and_climate_2011.pdf) Use UK value if given, average if not.

## Issues
- do for my portion sizes for now?
- seasonal/geography issues? i.e. include food miles or just focus on production emissions? Would make big difference to e.g. [rice](http://en.wikipedia.org/wiki/Rice#Production), [sugar](http://en.wikipedia.org/wiki/Sugarcane#Production)… For now, include transport, processing etc as can only get data with processing included. Future - needs to be location based… perhaps add property to food objects so can separate production costs (will also vary my technique though so location dependent too) and transport costs.
