import { bindable, customAttribute } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { config } from "./../../config";

@customAttribute(config.button)
@inject(Element)
export class ButtonAttribute {

    @bindable()
    public disabled = false;

    @bindable()
    public flat = false;

    @bindable()
    public floating = false;

    @bindable()
    public large = false;

    @bindable({ defaultValue: ""})
    public waves: string;

    constructor(private element: Element) {
    }

    public attached() {
        if (this.flat) {
            this.element.classList.add("btn-flat");
        } else if (this.floating) {
            this.element.classList.add("btn-floating");
        } else {
            this.element.classList.add("btn");
        }

        if (this.large) {
            this.element.classList.add("btn-large");
        }

        if (this.disabled) {
            this.element.classList.add("disabled");
        }

        this.element.classList.add("waves-effect");
        this.waves = this.waves.trim().toLowerCase();

        if (this.waves !== "") {

            if (!config.allowedWaves.some(val => val === this.waves)) {
                throw new Error(`Waves cannot be '${this.waves}', must be one of the following values ${config.allowedWaves.join(",")}.`);
            }

            this.element.classList.add("waves-" + this.waves);
        }
    }

    public detached() {
        this.element.classList.remove("btn-flat", "btn-floating", "btn-large", "btn", "disabled", "waves-effect");
        config.allowedWaves.map(val => "waves-" + val).forEach(val => this.element.classList.remove(val));
    }
}
