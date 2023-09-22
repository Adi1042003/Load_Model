# ScaleBot - IoT Weight Monitoring System

![ScaleBot Logo](blob:https://web.telegram.org/fb05fc56-fd4c-40f7-93ce-88778ed13f0b)

ScaleBot is an Internet of Things (IoT) weight monitoring system built with an ESP32, load cell, and various sensors. This project allows you to monitor weight measurements remotely using Blynk and receive alerts through Telegram.

## Features

- **Remote Weight Monitoring**: Keep track of weight measurements remotely using the Blynk app.
- **Threshold Alerts**: Receive alerts via Telegram when the weight exceeds a predefined threshold.
- **Wi-Fi Provisioning**: Easily configure Wi-Fi credentials using either BLE or SoftAP provisioning methods.
- **LCD Display**: Display real-time weight data on an I2C LCD display.

## Hardware Requirements

- ESP32 development board
- Load cell and HX711 ADC
- I2C LCD display
- Push button and buzzer
- Power supply and wiring components

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ScaleBot.git
