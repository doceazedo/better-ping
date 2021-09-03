# 🏓 better-ping
This is a simply enhanced `ping` wrapper that will check your internet connection and print its status and latency with a timestamp every second.

![](https://i.imgur.com/swpedQ5.png)

## Installation
This is very straightforward, just be sure to have [Node.js](https://nodejs.org/en) installed and you will be good to go.

1. Clone this repository and open it
  
   ```
   git clone https://github.com/doceazedo/better-ping.git
   cd better-ping
   ```
2. Install the dependencies with npm (or yarn):
   ```
   npm install
   ```
3. Run it
   ```
   node .
   ```

## Usage
Optionally, you can pass some arguments when starting better-ping

| Argument | Description                                                      | Default value |
|----------|------------------------------------------------------------------|---------------|
| host     | The IP address or host to be pinged                              | 8.8.8.8       |
| ms       | Acceptable ping before printing a warning                        | 80            |
| packets  | Acceptable percentage of lost packages before printing a warning | 0.01          |
| interval | Interval in milliseconds between checks                          | 1000          |:

For example, you can ping a custom host within a specific interval like this:
```
node . --host=example.com --interval=2500
```