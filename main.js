
var threatList = [
  {
    name: "Question Paper Server Access Attempt",
    risk: 96, level: "Critical", colour: "critical",
    reasons: ["Login from unknown account", "Access attempted at unusual time", "Multiple failed passwords"]
  },
  {
    name: "Question Paper Downloaded Before Exam Date",
    risk: 94, level: "Critical", colour: "critical",
    reasons: ["File opened 3 days before the exam", "Download from an unregistered device", "Copy sent to an outside email"]
  },
  {
    name: "Marks Database Edited After Result Lock",
    risk: 88, level: "Critical", colour: "critical",
    reasons: ["Marks changed after final submission", "Edit made from a new device", "No approval from head examiner"]
  },
  {
    name: "Unknown Administrator Login",
    risk: 79, level: "High", colour: "high",
    reasons: ["Account not in the approved admin list", "Login from a different state", "OTP was skipped"]
  },
  {
    name: "Repeated Password Changes",
    risk: 74, level: "High", colour: "high",
    reasons: ["Password changed 5 times in one hour", "All changes from the same IP address", "Old password entered wrongly 12 times"]
  },
  {
    name: "Exam Centre 23 Server Overload",
    risk: 58, level: "Medium", colour: "medium",
    reasons: ["Too many requests in 5 minutes", "All requests from one IP address", "Possible DDoS attack"]
  },
  {
    name: "Result Database Accessed At Night",
    risk: 52, level: "Medium", colour: "medium",
    reasons: ["Access at 2:40 AM", "Outside office hours", "No exam scheduled that day"]
  },
  {
    name: "Answer Sheet Scanner Not Verified",
    risk: 44, level: "Medium", colour: "medium",
    reasons: ["Scanner software not updated", "Device certificate has expired", "Used at 4 centres today"]
  },
  {
    name: "Question Paper Copied To USB Drive",
    risk: 92, level: "Critical", colour: "critical",
    reasons: ["USB device not registered with the board", "Copy made 40 minutes before the exam", "Centre camera was switched off"]
  },
  {
    name: "Fake Examination Centre Login",
    risk: 87, level: "Critical", colour: "critical",
    reasons: ["Centre code 88 does not exist", "Location does not match any centre", "Login repeated from 3 devices"]
  },
  {
    name: "OTP Verification Bypassed",
    risk: 83, level: "High", colour: "high",
    reasons: ["Login completed without OTP", "Same OTP used twice", "Request came from an unknown app"]
  },
  {
    name: "Invigilator Account Shared",
    risk: 71, level: "High", colour: "high",
    reasons: ["One account used at 2 centres together", "Two different devices at the same time", "Password not changed in 8 months"]
  },
  {
    name: "Result Website Page Changed",
    risk: 64, level: "High", colour: "high",
    reasons: ["Homepage file edited at midnight", "Editor account not recognised", "Backup copy does not match"]
  },
  {
    name: "CCTV Feed Offline At Centre 12",
    risk: 49, level: "Medium", colour: "medium",
    reasons: ["Camera offline for 25 minutes", "Happened during the exam", "No fault reported by the centre"]
  }
];


function scan() {
  document.getElementById('status').textContent = "Scanning examination infrastructure...";
  

  setTimeout(showThreats, 1500);
}

function showThreats() {

  
  var start = Math.floor(Math.random() * (threatList.length - 2));
  var boxes = "";

  for (var i = 0; i < 3; i++) {
    var t = threatList[start + i];

    boxes += `
      <div class="card threat" id="threat${i}">
        <h3>Threat ${i + 1}: ${t.name}</h3>
        <p class="risk-line">Risk: ${t.risk}% <span class="risk ${t.colour}">${t.level}</span></p>
        <p>Reason:</p>
        <ul><li>${t.reasons.join("</li><li>")}</li></ul>
        <div class="actions">
          <button onclick="action(${i}, 'Account locked')">Lock Account</button>
          <button onclick="action(${i}, 'Unauthorized access blocked')">Block Access</button>
          <button onclick="action(${i}, 'Sent for investigation')">Investigate</button>
        </div>
        <p class="done" id="done${i}"></p>
      </div>`;
  }

  document.getElementById('threats').innerHTML = boxes;
  document.getElementById('status').textContent = "3 threats detected. Status: Active";
}


function action(number, message) {
  document.getElementById('done' + number).textContent = "\u2705 " + message + ". Status: Resolved";
  document.getElementById('threat' + number).className = "card threat resolved";
}