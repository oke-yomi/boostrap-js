import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { registerGlobals } from '@livekit/react-native';
// import { LogLevel, setLogLevel } from 'livekit-client';
// import { setJSExceptionHandler } from 'react-native-exception-handler';
// import ReactNativeForegroundService from '@supersami/rn-foreground-service';

// Import LogBox functions
// import {
//   observe as observeLogBoxLogs,
//   symbolicateLogNow,
// } from 'react-native/Libraries/LogBox/Data/LogBoxData';

// Set JavaScript exception handler
// setJSExceptionHandler((error) => {
//   console.log('error:', error, error.stack);
// }, true);

// setLogLevel(LogLevel.debug);
registerGlobals();
// ReactNativeForegroundService.register();
AppRegistry.registerComponent(appName, () => App);

// LogBox keeps all logs that you have not viewed yet.
// When a new log comes in, we only want to print out the new ones.
// let lastCount = 0;

// Observe LogBox logs
// observeLogBoxLogs((data) => {
//   const logs = Array.from(data.logs);

//   // Filter symbolicated logs
//   const symbolicatedLogs = logs.filter((log) => log.symbolicated.stack?.length);
//   for (let i = lastCount; i < symbolicatedLogs.length; i++) {
//     // Use log instead of warn/error to prevent resending error to LogBox
//     console.log(formatLog(symbolicatedLogs[i]));
//   }
//   lastCount = symbolicatedLogs.length;

//   // Trigger symbolication on remaining logs because
//   // logs do not symbolicate until you click on LogBox
//   logs
//     .filter((log) => log.symbolicated.status === 'NONE')
//     .forEach((log) => symbolicateLogNow(log));
// });

// function formatLog(log) {
//   const stackLines = (log.symbolicated.stack || [])
//     .filter((line) => !line.collapse)
//     .map(
//       (line) =>
//         `    at ${line.methodName} (${line.file}:${line.lineNumber}:${line.column})`
//     )
//     .join('\n');
//   return `Error has been symbolicated\nError: ${log.message.content}\n${stackLines}`;
// }
