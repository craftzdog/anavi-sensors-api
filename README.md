RaspCon
===============

A REST server that controlls an aircon in my room for Raspbian, based on node.js.

## Prerequisites

* NodeJS (>= 8.9.4)
* LIRC

## How to use

### Install NodeJS on Raspbian

Find the CPU type of your Raspberry Pi.

```sh
uname -a
#-> Linux raspberrypi 4.9.59-v7+ #1047 SMP Sun Oct 29 12:19:23 GMT 2017 armv7l GNU/Linux
```

Download a binary from here: https://nodejs.org/en/download/


```sh
wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-armv7l.tar.xz
tar -xvf node-v8.9.4-linux-armv7l.tar.gz 
cd node-v8.9.4-linux-armv7l
```

Copy files to `/usr/local`:


```sh
sudo cp -R * /usr/local/
```

That's it. Verify that the right version of node.js is installed as expected:

```sh
node -v
#-> v8.9.4

npm -v
#-> 5.6.0
```

### Install dependencies

```sh
git clone git@github.com:craftzdog/raspcon.git
cd raspcon
npm install
```

### Run

```sh
npm start
```

## API

### PUT `/aircon/power`

Turn the AC on.

### DELETE `/aircon/power`

Turn the AC off.

