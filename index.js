import $ from 'jquery';

function init({ start, end, respire = 0 }, fn, exceptFn) {
  const $start = $(start);
  const $end = $(end);

  const topOfDivStart = $start.offset().top;
  const heightStart = $start.outerHeight();

  let topOfDivEnd;
  let heightEnd;

  if (end !== undefined) {
    topOfDivEnd = $end.offset().top;
    heightEnd = $end.outerHeight();
  }

  $(window).scroll(() => {
    const isStart = $(window).scrollTop() > (topOfDivStart + (heightStart - respire));
    let isNotEnd;

    if (end !== undefined) {
      isNotEnd = $(window).scrollTop() <= (topOfDivEnd + heightEnd);

      return (isStart && isNotEnd) ? fn() : exceptFn();
    }

    return (isStart) ? fn() : exceptFn();
  });
}

function scrollTrigger(config, isTriggerFn = () => {}, isNotTriggerFn = () => {}) {
  const { length } = $(config.start);
  if (length) init(config, isTriggerFn, isNotTriggerFn);
}

export default scrollTrigger;
