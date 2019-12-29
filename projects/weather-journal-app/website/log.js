// Helper functions
function appLog(logTxt, logObj, state) {
  logCount += 1;
  logTxt = `${logCount}: ${logTxt} `;
  if (state === `Start`) {
    console.log(
      `--------------------------
        ${logTxt}
        ${newDate}`
    );
  } else if (state === `End`) {
    console.log(
      `--------------------------
      ${logTxt}
      ${newDate}
      --------------------------`
    );
  } else if (state === `Log`) {
    console.log(logTxt, logObj);
  }
}

export default appLog;
