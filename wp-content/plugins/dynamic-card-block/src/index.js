import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import metadate from './block.json';

registerBlockType( 'dcb/card', {
    edit: () => {
        return <div>Dynamic Card Block Editor</div>;
    },
    save: () => {
        return <div>Dynamic Card Block Frontend</div>;
    }
} );