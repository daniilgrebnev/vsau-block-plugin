import { registerBlockType } from "@wordpress/blocks";

import "./common.scss";
import "./editor.scss";
import "./style.scss";

import save from "../block-text/save";
import metadata from "./block.json";
import Edit from "./edit";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
});
