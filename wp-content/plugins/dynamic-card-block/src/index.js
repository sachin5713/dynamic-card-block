import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import metadata from './block.json';
import './editor.css';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { title, description, imageUrl, buttonUrl  } = attributes;
        const onSelectImage = (media) => { setAttributes({ imageUrl: media.url }); };

            return (
            <>
                <InspectorControls>
                    <PanelBody title="Card Settings">
                        <TextControl
                            label="Button URL"
                            value={buttonUrl}
                            placeholder="https://example.com"
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="dynamic-card-block">
                    <MediaUpload
                        onSelect={(media) => setAttributes({ imageUrl: media.url })}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open} className="button button-large">
                                {imageUrl ? <img src={imageUrl} alt={title} /> : 'Upload Image'}
                            </Button>
                        )}
                    />

                    <RichText
                        tagName="h3"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder="Card Title"
                    />

                    <RichText
                        tagName="p"
                        value={description}
                        onChange={(value) => setAttributes({ description: value })}
                        placeholder="Card Description"
                    />
                </div>
            </>
        );
    },

    save: ( props ) => {
        const { attributes } = props;
        const { title, description, imageUrl, buttonUrl } = attributes;

        return (
            <div className="dynamic-card-block">
                {imageUrl && <img src={imageUrl} alt={title} />}
                <h3>{title}</h3>
                <p>{description}</p>

                {buttonUrl && (
                    <a className="dcb-button" href={buttonUrl} target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                )}
            </div>
        );
    }

});
