const pagesTrack = document.getElementById('pagesTrack');
const hudClock = document.getElementById('hudClock');
const currentDayLabel = document.getElementById('currentDayLabel');
const pageNumIndicator = document.getElementById('pageNumIndicator');

let currentActivePage = 0;
const totalPagesCount = 4;

// FUNCTION 01: Precision Real-Time Digital Clock Module
function updateHudClockTime() {
  const current = new Date();
  let hr = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();
  
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
  
  hudClock.textContent = hr + ':' + min + ':' + sec;
}
setInterval(updateHudClockTime, 1000);
updateHudClockTime();

// FUNCTION 02: Dynamic Local Device Calendar Day Sync Engine
function calculateCurrentWeekdayName() {
  const referenceDays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const current = new Date();
  const dayIndexValue = current.getDay();
  
  currentDayLabel.textContent = referenceDays[dayIndexValue];
}
calculateCurrentWeekdayName();

// FUNCTION 03: Right Arrow Interactive Viewport Paging Track Slider
function advanceHudPageView() {
  currentActivePage++;
  
  if (currentActivePage >= totalPagesCount) {
    currentActivePage = 0;
  }
  
  pagesTrack.style.transform = `translateX(-${currentActivePage * 100}vw)`;
  pagesTrack.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)';
  
  pageNumIndicator.textContent = currentActivePage + 1;
}
