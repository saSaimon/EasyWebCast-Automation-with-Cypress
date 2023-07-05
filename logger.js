const fs = require('fs');

module.exports = (logFileName) => {
  const logFilePath = `./cypress/logs/${logFileName}.log`;

  const writeLog = (message) => {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}\n`;

    fs.appendFileSync(logFilePath, formattedMessage);
  };

  return writeLog;
};
