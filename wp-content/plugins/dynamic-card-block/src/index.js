import { registerBlockType } from '@wordpress/blocks';
import { 
    MediaUpload, 
    RichText, 
    InspectorControls 
} from '@wordpress/block-editor';

import { 
    Button, 
    PanelBody, 
    TextControl,
    ColorPicker
} from '@wordpress/components';

import metadata from './block.json';
import './editor.css';

registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { 
            title, 
            description, 
            imageUrl, 
            buttonUrl, 
            buttonText,
            padding, 
            borderColor, 
            borderRadius, 
            borderWidth,
            backgroundColor,
            titleColor,
            descriptionColor,
            buttonBgColor,
            buttonTextColor
        } = attributes;

        return (
            <>
                {/* --- Sidebar Settings --- */}
                <InspectorControls>
                    <PanelBody title="Card Settings">
                        <TextControl
                            label="Button URL"
                            value={buttonUrl}
                            placeholder="https://example.com"
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                        />
                        <TextControl
                            label="Button Text"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Design Settings">
                        <TextControl
                            label="Padding (px)"
                            value={padding}
                            onChange={(value) => setAttributes({ padding: value })}
                        />
                        <TextControl
                            label="Border Width (px)"
                            value={borderWidth}
                            onChange={(value) => setAttributes({ borderWidth: value })}
                        />
                        <TextControl
                            label="Border Radius (px)"
                            value={borderRadius}
                            onChange={(value) => setAttributes({ borderRadius: value })}
                        />
                        <TextControl
                            label="Border Color"
                            value={borderColor}
                            onChange={(value) => setAttributes({ borderColor: value })}
                        />
                    </PanelBody>
                    <PanelBody title="Color Settings">
                        <p><strong>Background Color</strong></p>
                        <ColorPicker
                            color={backgroundColor}
                            onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
                        />

                        <p><strong>Title Text Color</strong></p>
                        <ColorPicker
                            color={titleColor}
                            onChangeComplete={(value) => setAttributes({ titleColor: value.hex })}
                        />

                        <p><strong>Description Text Color</strong></p>
                        <ColorPicker
                            color={descriptionColor}
                            onChangeComplete={(value) => setAttributes({ descriptionColor: value.hex })}
                        />

                        <p><strong>Button Background Color</strong></p>
                        <ColorPicker
                            color={buttonBgColor}
                            onChangeComplete={(value) => setAttributes({ buttonBgColor: value.hex })}
                        />

                        <p><strong>Button Text Color</strong></p>
                        <ColorPicker
                            color={buttonTextColor}
                            onChangeComplete={(value) => setAttributes({ buttonTextColor: value.hex })}
                        />
                    </PanelBody>

                </InspectorControls>

                {/* --- Editor Preview --- */}
                <div 
                    className="dynamic-card-block"
                    style={{
                        padding,
                        borderWidth,
                        borderRadius,
                        borderColor,
                        backgroundColor
                    }}
                >
                    <MediaUpload
                        allowedTypes={['image']}
                        onSelect={(media) => setAttributes({ imageUrl: media.url })}
                        render={({ open }) => (
                            <Button onClick={open} className="button button-large">
                                {imageUrl ? <img src={imageUrl} alt="" /> : 'Upload Image'}
                            </Button>
                        )}
                    />

                    <RichText
                        tagName="h3"
                        style={{ color: titleColor }}
                        value={title}
                        placeholder="Card Title"
                        onChange={(value) => setAttributes({ title: value })}
                    />

                    <RichText
                        tagName="p"
                        value={description}
                        style={{ color: descriptionColor }}
                        placeholder="Card Description"
                        onChange={(value) => setAttributes({ description: value })}
                    />

                    {buttonUrl && (
                        <a
                            className="dcb-button"
                            href={buttonUrl}
                            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                        >
                            {buttonText}
                        </a>
                    )}
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { 
            title, 
            description, 
            imageUrl, 
            buttonUrl, 
            buttonText,
            padding, 
            borderColor, 
            borderRadius, 
            borderWidth,
            backgroundColor,
            buttonBgColor,
            buttonTextColor
        } = attributes;

        return (
            <div
                className="dynamic-card-block"
                style={{
                    padding,
                    borderWidth,
                    borderRadius,
                    borderColor,
                    backgroundColor
                }}
            >
                {imageUrl && <img src={imageUrl} alt="" />}
                <h3>{title}</h3>
                <p>{description}</p>

                {buttonUrl && (
                    <a
                        className="dcb-button"
                        href={buttonUrl}
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    >
                        {buttonText}
                    </a>
                )}

            </div>
        );
    }
});
