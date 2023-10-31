function getRealAlarms(suppressions, alarms) {
    const realAlarms = new Set();
    for (const alarm of alarms) {
      if (!suppressions.has(alarm)) {
        realAlarms.add(alarm);
      } else {
        let suppressed = false;
        for (const suppressedAlarm of suppressions.get(alarm)) {
          if (realAlarms.has(suppressedAlarm)) {
            realAlarms.delete(suppressedAlarm);
            suppressed = true;
          }
        }
        if (!suppressed) {
          realAlarms.add(alarm);
        }
      }
    }
    return [...realAlarms].join(' ');
  }
  
  // console.log(getRealAlarms(2,'ABBCABCD'));