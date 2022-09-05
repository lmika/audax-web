import { Controller } from "@hotwired/stimulus"

export class KeybindingsController extends Controller {
	static targets = [
		"showBindingNames",
		"keyBindingTable"
	];

	bindingNamesChanged() {
		let showBindingNames = this.showBindingNamesTarget;
		if (showBindingNames.checked) {
			this.keyBindingTableTarget.classList.add("show-binding-names");
		} else {
			this.keyBindingTableTarget.classList.remove("show-binding-names");
		}
	}
}