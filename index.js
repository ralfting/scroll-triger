import $ from 'jquery';

function init({
  start,
  end,
  respire = 0,
}, fn, exceptFn) {
  const windowHeight = $(window).height();

  const $start = $(start);
  const $end = $(end);

  const topOfDivStart = $start.offset().top;
  const heightStart = $start.outerHeight();

  let topOfDivEnd;

  if (end !== undefined && $end.length > 0) {
    topOfDivEnd = $end.offset().top;
  }

  $(window).scroll(() => {
    const isStart = $(window).scrollTop() > ((topOfDivStart - windowHeight) + (heightStart - respire));

    if (end !== undefined && $end.length > 0) {
      const isNotEnd = $(window).scrollTop() <= ((topOfDivEnd) - windowHeight);

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
