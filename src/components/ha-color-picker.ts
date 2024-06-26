import "@material/mwc-list/mwc-list-item";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators";
import { styleMap } from "lit/directives/style-map";
import { computeCssColor, THEME_COLORS } from "../common/color/compute-color";
import { fireEvent } from "../common/dom/fire_event";
import { stopPropagation } from "../common/dom/stop_propagation";
import "./ha-select";
import "./ha-list-item";
import { HomeAssistant } from "../types";
import { LocalizeKeys } from "../common/translations/localize";

@customElement("ha-color-picker")
export class HaColorPicker extends LitElement {
  @property() public label?: string;

  @property() public helper?: string;

  @property({ attribute: false }) public hass!: HomeAssistant;

  @property() public value?: string;

  @property({ type: Boolean }) public defaultColor = false;

  @property({ type: Boolean }) public disabled = false;

  _valueSelected(ev) {
    const value = ev.target.value;
    if (value) {
      fireEvent(this, "value-changed", {
        value: value !== "default" ? value : undefined,
      });
    }
  }

  render() {
    return html`
      <ha-select
        .icon=${Boolean(this.value)}
        .label=${this.label}
        .value=${this.value || "default"}
        .helper=${this.helper}
        .disabled=${this.disabled}
        @closed=${stopPropagation}
        @selected=${this._valueSelected}
        fixedMenuPosition
        naturalMenuWidth
      >
        ${this.value
          ? html`
              <span slot="icon">
                ${this.renderColorCircle(this.value || "grey")}
              </span>
            `
          : nothing}
        ${this.defaultColor
          ? html` <ha-list-item value="default">
              ${this.hass.localize(`ui.components.color-picker.default_color`)}
            </ha-list-item>`
          : nothing}
        ${Array.from(THEME_COLORS).map(
          (color) => html`
            <ha-list-item .value=${color} graphic="icon">
              ${this.hass.localize(
                `ui.components.color-picker.colors.${color}` as LocalizeKeys
              ) || color}
              <span slot="graphic">${this.renderColorCircle(color)}</span>
            </ha-list-item>
          `
        )}
      </ha-select>
    `;
  }

  private renderColorCircle(color: string) {
    return html`
      <span
        class="circle-color"
        style=${styleMap({
          "--circle-color": computeCssColor(color),
        })}
      ></span>
    `;
  }

  static get styles() {
    return css`
      .circle-color {
        display: block;
        background-color: var(--circle-color);
        border-radius: 10px;
        width: 20px;
        height: 20px;
      }
      ha-select {
        width: 100%;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-color-picker": HaColorPicker;
  }
}
