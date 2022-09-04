import { Application } from "@hotwired/stimulus";
import { KeybindingsController } from "./controllers/keybindings_controller";

const application = Application.start();
application.register("keybindings", KeybindingsController);