# Instructions:
## REALLY IMPORTANT THINGS: You need AutoHotkey installed on your system. Get it [here](https://www.autohotkey.com) <br> The macros that click the screen (instalock, autobuy) are written for a 1920x1080 monitor, with the game running in fullscreen windowed mode. if they do not work, make your monitor that size and if they still don't work do the thing at the bottom to get coordinates.<br> ALL INSTALOCK MACROS USE THE SAME HOTKEY so if you select multiple be sure to change them or you're gonna have a mess, ALSO the agents on your screen may be in a different position based on what order you unlock them (i think) so if it selects an agent that you didnt want check the coordinates with the below method
#### there are 2 ways you can use this. you can either go to the individual-AHK folder and get the scripts you need individually, OR:
#### Go to this project's tab on [my website](https://gkieran.github.io/projects.html), and select the macros you want. Press Generate Script to make your custom script. Paste this into a new AutoHotkey script on your desktop.
#### With auto buy and instalock macros, you may need to change the coordinates in order for it to work. The scripts should work on most 1920x1080 monitors.
#### If you need to change the coordinates, ensure Python is installed on your system and install the `pyautogui` library using `pip3 install pyautogui`. Then run this code: <br>
```
import pyautogui

while True:
    x, y = pyautogui.position()
    print(f'Mouse cursor is at {x}, {y}')
```
open Valorant and go to a custom game and hover over the agent, then check your Python console to see the coordinates and copy them into the AutoHotkey script. Repeat for the select agenht button, and any weapons you want to auto buy.

![Example](https://raw.githubusercontent.com/bean-frog/Valorant-Macros-AHK-/main/image_2023-01-09_115628519.png)
#### This example code instalocks Sova, to change it or calibrate it, set the first coordinates to whatever your Python script outputs when hovering over. Set the second set of coordinates to the choose agent button.
## Pro tip: if you have a StreamDeck or other macropad, bind the hotkeys in the script to it
