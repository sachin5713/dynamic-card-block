<?php
/**
 * Plugin Name: Dynamic Card Block
 * Description: A simple dynamic Gutenburg block - title, image, description
 * Version: 1.0.0
 * Author: Sachin
 * Text Domain: dynamic-card-block
 */

defined( 'ABSPATH' ) || exit;

add_action( 'init', function() {
    register_block_type( __DIR__ . '/build/block.json' );
} );