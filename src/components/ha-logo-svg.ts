import { css, CSSResultGroup, LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-logo-svg")
export class HaLogoSvg extends LitElement {
  protected render(): TemplateResult {
    return html`<svg viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_419_15)">
<path d="M227.383 465.17C162.569 465.17 109.817 411.949 109.817 346.489C109.817 314.74 121.97 284.926 144.184 262.539C166.503 240.127 195.982 227.782 227.383 227.782C258.901 227.782 288.381 240.127 310.673 262.539C333.005 285.004 345.145 314.753 345.145 346.489C345.145 411.949 292.392 465.17 227.383 465.17ZM481.985 117C513.085 166.219 531.196 224.644 531.196 287.136C531.092 385.705 472.407 470.596 388.541 508.361C429.52 466.844 454.988 409.635 454.988 346.489C454.988 285.122 431.31 227.547 388.358 184.212C345.328 140.917 288.185 117 227.383 117C166.594 117 109.53 140.956 66.6559 184.212C23.6648 227.586 0 285.122 0 346.424V346.489V346.79C0 425.078 30.2637 498.658 85.1199 553.997C140.094 609.428 213.127 639.935 290.759 640C483.788 640.052 640.922 481.855 641 287.214C641 226.776 628.469 169.227 605.954 117H481.985Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_419_15">
<rect width="640" height="640" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: var(--ha-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentcolor;
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
      }
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: block;
      }
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "ha-logo-svg": HaLogoSvg;
  }
}
