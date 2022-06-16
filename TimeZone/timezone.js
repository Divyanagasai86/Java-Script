function getTime() {
    var timezone = document.getElementById("timezone").value;
    var result = luxon.DateTime.local().setZone(timezone);
    var date = result.c;
    readData =
      date.day  +
      " - "  +
      date.month  +
      " - "  +
      date.year +
      " - " +
      date.hour +
      " : "  +
      date.minute +
      " : " +
      date.second;
    document.getElementById("content").innerHTML = readData;
  }
  