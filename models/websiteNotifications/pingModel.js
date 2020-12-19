const fs = require('fs');
const path = require('path');

exports.pingModel = class PingModel {
  constructor() {}
  fetchPings() {
    let pings;

    const pingData = fs.readFileSync(
      path.join(__dirname, './data', 'pings.json'),
      'utf-8'
    );
    const parsedPings = [...JSON.parse(pingData)];
    parsedPings.forEach((obj) => {
      pings = obj.pings;
    });

    return pings;
  }

  static writePing() {
    let ping;
    const pingData = fs.readFileSync(
      path.join(__dirname, './data', 'pings.json'),
      'utf-8'
    );
    const parsedPings = [...JSON.parse(pingData)];
    parsedPings.forEach((obj) => {
      ping = obj.pings;
    });
    const newPing = [
      {
        pings: ping + 1,
      },
    ];

    fs.writeFileSync(
      path.join(__dirname, './data', 'pings.json'),
      JSON.stringify(newPing)
    );
  }
};
