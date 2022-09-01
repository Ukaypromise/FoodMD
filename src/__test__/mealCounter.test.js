/**
 * @jest-environment jsdom
 */

import { mealCount } from "../modules/mealCounter.js";

describe ('Counters', () => {

  it('Comments counters', () => {
    document.body.innerHTML =
    '<div id="meal-item" class="meal-item">meals (2)</div>';
    const count = document.querySelectorAll('.meal-item');
    expect(mealCount(count)).toBe(1);
  });

  it ('suma', () => {
    expect(5).toBe(5);
  });

})
