/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

 /**
   * Class representing custom element
   */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

/**
 * @property name to say "Hello" to.
 */
  @property({type: String})
  name = 'World';

  /**
   * @property count number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  /**
   * Render custom element.
   */
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  /**
   * Callback when user click button.
   */
  private _onClick() {
    this.count++;
  }

  /**
   * Foo method.
   */
  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
