var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var dir, startX, startY, startTime, offsetX, offsetY, elapsedTime;
const swipeTimeSpan = 100;
const swipeMinOffset = 100;
const swipeRestraint = 200;

const weekdays = ["", "sun", "mon", "tue", "wed", "thr", "fri", "sat"];

const MonYearTitle = (props) => 
  React.createElement("div", { className: "monthYearTitleContainer" }, 
    React.createElement("div", { className: "monthWrap" }, props.month), 
    React.createElement("div", { className: "yearWrap" }, props.year));



const WeekdayTitle = () => 
  React.createElement("div", { className: "weekdayTitleContainer" }, 
    React.createElement("div", { className: "weekWrap" }, "Sun"), 
    React.createElement("div", { className: "weekWrap" }, "Mon"), 
    React.createElement("div", { className: "weekWrap" }, "Tue"), 
    React.createElement("div", { className: "weekWrap" }, "Wed"), 
    React.createElement("div", { className: "weekWrap" }, "Thr"), 
    React.createElement("div", { className: "weekWrap" }, "Fri"), 
    React.createElement("div", { className: "weekWrap" }, "Sat"));