---
title: War Machine Turret
order: 9
year: 2024
disciplines: [Mechatronics, Electronics]
context: Personal project, built at Hacksmith Industries
summary: A shoulder-mounted pan-tilt turret that aims wherever your wrist points.
cover: ../../assets/projects/war-machine-turret/cover.jpg
coverAlt: A shoulder-mounted rotary-barrel turret on a pan-tilt mount, being adjusted by hand.
coverPosition: 50% 35%
hero: ../../assets/projects/war-machine-turret/prototype.jpg
heroAlt: The turret prototype, with a rotary barrel on a servo pan-tilt mount beside a 3D-printed shoulder dome.
skills:
  - Mechanism design
  - IMU data integration
  - Arduino / C++
  - Custom PCB design
  - Prototyping & testing
highlights:
  - value: 2-axis
    label: Servo pan-tilt mount
  - value: MPU6050
    label: Gyroscope in the wrist wearable
sections:
  - heading: Aim with your wrist
    body: An Arduino reads an MPU6050 gyroscope housed in a wrist-mounted wearable and drives two servos, mapping wrist movement to precise pan and tilt of the turret.
  - heading: From breadboard to PCB
    body: I prototyped the circuit on a breadboard first, then designed a custom printed circuit board so the whole system could be worn and carried.
photos:
  - image: ../../assets/projects/war-machine-turret/electronics-lab.jpg
    alt: Nicolas wearing the turret on his shoulder in an electronics lab while someone adjusts its wiring.
    caption: Trying it on in the electronics lab
  - image: ../../assets/projects/war-machine-turret/pcb.jpg
    alt: A purple custom PCB resting on a railing, with Nicolas Coleman and Stanford University printed on it.
    caption: The custom PCB, with my name on it
---

A shoulder-mounted toy blaster on a custom pan-tilt servo system that lets you aim in any direction, steered by a wrist-mounted IMU on a custom PCB. I created it as a personal project at the Hacksmith Industries facility, designed to look like War Machine’s shoulder cannon from the MCU.

While working at Hacksmith, I was learning so much every day that I started building personal projects after hours. This was the one I kept coming back to. Inspired by War Machine and Iron Man, I hacked a toy Orbeez turret onto the pan-tilt mount and built the shoulder system around it.

I stayed at work long hours for this one. James Hobson, Hacksmith’s CEO, and I even bonded over both being at work at 2 am.
