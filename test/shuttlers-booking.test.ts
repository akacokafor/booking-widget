import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { ShuttlersBooking } from '../src/shuttlers-booking.js';
import '../src/shuttlers-booking.js';

describe('ShuttlersBooking', () => {
  let element: ShuttlersBooking;
  beforeEach(async () => {
    element = await fixture(html`<shuttlers-booking></shuttlers-booking>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
