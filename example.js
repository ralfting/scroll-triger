import $ from 'jquery';
import scrollTrigger from './index';

$(document).ready(() => {
  const config = { start: '#trigger' };

  scrollTrigger(
    config,
    () => console.log('Trigger!'),
    () => console.log('not yet!')
  );

});
