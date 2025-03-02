<?php

/**
 * Plugin Name:       Vsau Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       vsau-blocks
 *
 * @package CreateBlock
 */

use function PHPSTORM_META\type;

if (! defined('ABSPATH')) {
	exit;
}

function create_block_vsau_blocks_block_init1()
{
	// Регистрируем блок "block-text"
	register_block_type(__DIR__ . '/build/block-text', array(
		'style'         => 'vsau-blocks-text-style', // Уникальный хэндл для стилей блока "block-text"
		'editor_script' => 'vsau-blocks-editor-script',
		'editor_style'  => 'vsau-blocks-editor-style',
	));

	// Регистрируем блок "block-link"
	register_block_type(__DIR__ . '/build/block-link', array(
		'style'         => 'vsau-blocks-link-style', // Уникальный хэндл для стилей блока "block-link"
		'editor_script' => 'vsau-blocks-editor-script',
		'editor_style'  => 'vsau-blocks-editor-style',
	));
}
add_action('init', 'create_block_vsau_blocks_block_init1');
function vsau_register_metabox()
{
	// Метаполе для ссылки
	register_post_meta('', '_link_vsau_box', array(
		'show_in_rest' => true,
		'type' => 'string',
		'single' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	));

	// Метаполе для дополнительного текста
	register_post_meta('', '_text_vsau_box', array(
		'show_in_rest' => true,
		'type' => 'string',
		'single' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	));
}
add_action('init', 'vsau_register_metabox');


function create_block_vsau_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/block-text');
	register_block_type(__DIR__ . '/build/block-link');
}
add_action('init', 'create_block_vsau_blocks_block_init');
