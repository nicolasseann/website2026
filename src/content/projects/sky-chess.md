---
title: Sky Chess
order: 2
year: 2025
disciplines: [Robotics, Computer vision]
context: Independent study, spring of junior year
timeline: One quarter
summary: A physical chessboard you play against a machine. A camera reads the board, and a repurposed laser engraver moves the pieces.
cover: ../../assets/projects/sky-chess/cover.jpg
coverAlt: A gantry-mounted gripper hovering over a wooden chessboard set with black and blue 3D-printed pieces.
hero: ../../assets/projects/sky-chess/hero.jpg
heroAlt: The full Sky Chess rig, an aluminum XY-gantry framed over a chessboard on a workbench.
skills:
  - Computer vision (OpenCV)
  - Machine learning (scikit-learn)
  - Mechanism design
  - G-code
  - Serial communication
  - API integration
highlights:
  - value: "~65%"
    label: Success rate after one quarter
  - value: k-NN
    label: Model that reads the board
sections:
  - heading: Custom grippers
    body: To pick up the pieces, I designed a custom end-effector. A micro servo drives geared clamps that grab a piece, and a stepper motor on a lead screw raises and lowers it.
    image: ../../assets/projects/sky-chess/grippers.jpg
    imageAlt: Close-up of the custom end-effector, with geared clamps and a lead screw above the board.
  - heading: Computer vision + machine learning
    body: To read the state of the board, I taught myself computer vision. The system averages the color values of each square and feeds them into a k-nearest-neighbors classifier I trained with scikit-learn.
    image: ../../assets/projects/sky-chess/vision.jpg
    imageAlt: An OpenCV output window showing the board from above, with a green marker on every detected square.
  - heading: Gantry and communication
    body: I repurposed an inexpensive laser engraver as the XY-gantry. A Raspberry Pi talks to it over serial, pulling G-code positions from a Python dictionary driven by the game logic.
    image: ../../assets/projects/sky-chess/gantry.jpg
    imageAlt: Front view of the gantry carriage above the chessboard, with black pieces in the foreground.
gallery:
  - image: ../../assets/projects/sky-chess/raspberry-pi.jpg
    alt: A Raspberry Pi and camera ribbon cable mounted on the gantry frame above the board.
    caption: The Raspberry Pi and camera that run the vision pipeline.
---

A chessboard system that uses machine learning, OpenCV and an XY-gantry to let you play physical chess against a machine. I built it as an independent study in the spring of my junior year.

After one quarter it worked around 65% of the time, and I plan to make it more reliable.
