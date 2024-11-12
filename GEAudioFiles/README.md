# Visualization
Welcome to the Dictionary of George Eliot's People and Places,
developed by Nathan Bradshaw, Ben Buckley, Spencer Dunn, and Will Tobens
--------------------------------------------------------------------------
This project was created for COMP 4710: Senior Design by the Visualization
Blue Team: Group 3. This is a comprehensive guide to use and interact with
the dictionary. The guide is split into developer and user info.
--------------------------------------------------------------------------
# For Developers
# - Usage
The dictionary is hosted on GitHub pages; to deploy your own version of the page:
1) Fork and clone the repository
2) Set up page tab on your repository
3) In package.json, change the 'homepage' url to your generated github page url
4) In your local terminal, run 'npm run build'
5) Run 'npm deploy'
---------------------------------------------------------------------------
# File Descriptions
Below is a general overview of our files and what they handle:
# - Backend_Services
api_test.py - uses Omeka API to pull the most recent data from the George Eliot
Archive and uses it to display on the page. This can be manually run to update the site's
information, but the page will need to be redeployed.

data/final.json - data storage for site display.

search_data.js - code for the site search bar

# - Components - all relevant css is imported to each file
MainScreen.js - loads description boxes (for search)

PopUpBox.js - loads description boxes (for main page)

ShowMoreText.js - code to expand description boxes for each work

Work.js - Loads expandable box data, such as descriptions, images, places, characters, etc.

WorkItems.js - generates the expanded boxes for each work 
-----------------------------------------------------------------------------
# For Users
Upon loading the dictionary, you will be greeted with all of George Eliot's works of fiction, each with a summary of the narrative and an
expandable box containing places, characters, and other named entities. You can expand each of
these categories and click on each item to see its information. Additionally, you can search for
a specific entity in the search bar in the top right.
------------------------------------------------------------------------------
# For Editors
Any data changed on Omeka will be reflected on the page within 12 hours, but those who have access to
the repository can run the deployment manually by going into Actions > Update JSON and Deploy > Run manually
