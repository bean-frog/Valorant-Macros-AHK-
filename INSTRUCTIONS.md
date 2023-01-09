# Instructions:
## FIRSTLY: You need AutoHotkey installed on your system. Get it [here](https://www.autohotkey.com)
#### Go to this project's tab on [my website](https://gkieran.github.io/projects.html), and select the macros you want. Press Generate Script to make your custom script. Paste this into a new AutoHotkey script on your desktop.
#### With auto buy and instalock macros, you may need to change the coordinates in order for it to work. The scripts should work on most 1920x1080 monitors.
#### If you need to change the coordinates, ensure Python is installed on your system and install the `pyautogui` library using `pip3 install pyautogui`. Then run this code: <br>
`
import pyautogui

while True:
    x, y = pyautogui.position()
    print(f'Mouse cursor)
` <br>
open Valorant and go to a custom game and hover over the agent, then check your Python console to see the coordinates and copy them into the AutoHotkey script. Repeat for the select agenht button, and any weapons you want to auto buy.
