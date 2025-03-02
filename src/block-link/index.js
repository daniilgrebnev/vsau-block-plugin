import { registerBlockType } from "@wordpress/blocks";

import "./common.scss";
import "./editor.scss";
import "./style.scss";

import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
});
