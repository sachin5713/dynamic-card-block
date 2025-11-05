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
  ColorPicker,
  SelectControl,
  RangeControl
} from '@wordpress/components';

import metadata from './block.json';
import './editor.css';

/**
 * Small helper: safe fallback for inline style values (avoid `undefined`).
 */
const safe = (val, fallback = '') => (typeof val !== 'undefined' ? val : fallback);

registerBlockType(metadata.name, {
  ...metadata,

  edit: ({ attributes, setAttributes }) => {
    const {
      title,
      description,
      imageUrl,
      imageMaxWidth,

      buttonUrl,
      buttonText,

      backgroundColor,
      titleColor,
      descriptionColor,
      buttonBgColor,
      buttonTextColor,
      buttonHoverBgColor,

      padding,
      borderWidth,
      borderRadius,
      borderColor,

      titleFontSize,
      titleFontWeight,
      titleLineHeight,

      descriptionFontSize,
      descriptionFontWeight,
      descriptionLineHeight,

      buttonPadding,
      buttonRadius
    } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title="Content" initialOpen>
            <TextControl
              label="Button URL"
              value={safe(buttonUrl)}
              placeholder="https://example.com"
              onChange={(val) => setAttributes({ buttonUrl: val })}
            />
            <TextControl
              label="Button Text"
              value={safe(buttonText)}
              onChange={(val) => setAttributes({ buttonText: val })}
            />
          </PanelBody>

          <PanelBody title="Design — Spacing & Border" initialOpen={false}>
            <TextControl
              label="Card Padding (e.g. 20px or 1rem)"
              value={safe(padding)}
              onChange={(val) => setAttributes({ padding: val })}
            />
            <TextControl
              label="Border Width (e.g. 1px)"
              value={safe(borderWidth)}
              onChange={(val) => setAttributes({ borderWidth: val })}
            />
            <TextControl
              label="Border Radius (e.g. 8px)"
              value={safe(borderRadius)}
              onChange={(val) => setAttributes({ borderRadius: val })}
            />
            <TextControl
              label="Border Color (hex)"
              value={safe(borderColor)}
              onChange={(val) => setAttributes({ borderColor: val })}
            />
          </PanelBody>

          <PanelBody title="Image" initialOpen={false}>
            <TextControl
              label="Image Max Width (e.g. 100% or 300px)"
              value={safe(imageMaxWidth)}
              onChange={(val) => setAttributes({ imageMaxWidth: val })}
            />
          </PanelBody>

          <PanelBody title="Typography — Title" initialOpen={false}>
            <TextControl
              label="Font Size (e.g. 20px)"
              value={safe(titleFontSize)}
              onChange={(val) => setAttributes({ titleFontSize: val })}
            />
            <SelectControl
              label="Font Weight"
              value={safe(titleFontWeight)}
              options={[
                { label: '300', value: '300' },
                { label: '400', value: '400' },
                { label: '500', value: '500' },
                { label: '600', value: '600' },
                { label: '700', value: '700' },
                { label: '800', value: '800' }
              ]}
              onChange={(val) => setAttributes({ titleFontWeight: val })}
            />
            <TextControl
              label="Line Height (e.g. 1.2)"
              value={safe(titleLineHeight)}
              onChange={(val) => setAttributes({ titleLineHeight: val })}
            />
          </PanelBody>

          <PanelBody title="Typography — Description" initialOpen={false}>
            <TextControl
              label="Font Size (e.g. 14px)"
              value={safe(descriptionFontSize)}
              onChange={(val) => setAttributes({ descriptionFontSize: val })}
            />
            <SelectControl
              label="Font Weight"
              value={safe(descriptionFontWeight)}
              options={[
                { label: '300', value: '300' },
                { label: '400', value: '400' },
                { label: '500', value: '500' },
                { label: '600', value: '600' }
              ]}
              onChange={(val) => setAttributes({ descriptionFontWeight: val })}
            />
            <TextControl
              label="Line Height (e.g. 1.6)"
              value={safe(descriptionLineHeight)}
              onChange={(val) => setAttributes({ descriptionLineHeight: val })}
            />
          </PanelBody>

          <PanelBody title="Colors" initialOpen={false}>
            <p><strong>Card Background</strong></p>
            <ColorPicker
              color={safe(backgroundColor)}
              onChangeComplete={(val) => setAttributes({ backgroundColor: val.hex })}
            />

            <p style={{ marginTop: 12 }}><strong>Title</strong></p>
            <ColorPicker
              color={safe(titleColor)}
              onChangeComplete={(val) => setAttributes({ titleColor: val.hex })}
            />

            <p style={{ marginTop: 12 }}><strong>Description</strong></p>
            <ColorPicker
              color={safe(descriptionColor)}
              onChangeComplete={(val) => setAttributes({ descriptionColor: val.hex })}
            />

            <p style={{ marginTop: 12 }}><strong>Button Background</strong></p>
            <ColorPicker
              color={safe(buttonBgColor)}
              onChangeComplete={(val) => setAttributes({ buttonBgColor: val.hex })}
            />

            <p style={{ marginTop: 12 }}><strong>Button Text Color</strong></p>
            <ColorPicker
              color={safe(buttonTextColor)}
              onChangeComplete={(val) => setAttributes({ buttonTextColor: val.hex })}
            />

            <p style={{ marginTop: 12 }}><strong>Button Hover Color</strong></p>
            <ColorPicker
              color={safe(buttonHoverBgColor)}
              onChangeComplete={(val) => setAttributes({ buttonHoverBgColor: val.hex })}
            />
          </PanelBody>

          <PanelBody title="Button — Size & Radius" initialOpen={false}>
            <TextControl
              label="Button Padding (e.g. 10px 18px)"
              value={safe(buttonPadding)}
              onChange={(val) => setAttributes({ buttonPadding: val })}
            />
            <TextControl
              label="Button Radius (e.g. 6px)"
              value={safe(buttonRadius)}
              onChange={(val) => setAttributes({ buttonRadius: val })}
            />
          </PanelBody>
        </InspectorControls>

        {/* Editor preview area */}
        <div
          className="dynamic-card-block"
          style={{
            backgroundColor: safe(backgroundColor),
            padding: safe(padding),
            borderStyle: 'solid',
            borderWidth: safe(borderWidth),
            borderRadius: safe(borderRadius),
            borderColor: safe(borderColor)
          }}
        >
          <div className="dcb-image-wrap" style={{ maxWidth: safe(imageMaxWidth) }}>
            <MediaUpload
              allowedTypes={['image']}
              onSelect={(media) => setAttributes({ imageUrl: media.url })}
              value={imageUrl}
              render={({ open }) => (
                <Button onClick={open} className="image-upload-btn">
                  {imageUrl ? <img src={imageUrl} alt="" /> : 'Upload Image'}
                </Button>
              )}
            />
          </div>

          <RichText
            tagName="h3"
            className="dcb-title"
            value={title}
            onChange={(val) => setAttributes({ title: val })}
            placeholder="Card Title"
            style={{
              color: safe(titleColor),
              fontSize: safe(titleFontSize),
              fontWeight: safe(titleFontWeight),
              lineHeight: safe(titleLineHeight)
            }}
          />

          <RichText
            tagName="p"
            className="dcb-desc"
            value={description}
            onChange={(val) => setAttributes({ description: val })}
            placeholder="Card description..."
            style={{
              color: safe(descriptionColor),
              fontSize: safe(descriptionFontSize),
              fontWeight: safe(descriptionFontWeight),
              lineHeight: safe(descriptionLineHeight)
            }}
          />

          {buttonUrl && (
            <div className="dcb-button-wrap">
              <a
                className="dcb-button"
                href={buttonUrl}
                style={{
                  backgroundColor: safe(buttonBgColor),
                  color: safe(buttonTextColor),
                  padding: safe(buttonPadding),
                  borderRadius: safe(buttonRadius)
                }}
              >
                {buttonText}
              </a>
            </div>
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
      imageMaxWidth,

      buttonUrl,
      buttonText,

      backgroundColor,
      titleColor,
      descriptionColor,
      buttonBgColor,
      buttonTextColor,
      buttonHoverBgColor,

      padding,
      borderWidth,
      borderRadius,
      borderColor,

      titleFontSize,
      titleFontWeight,
      titleLineHeight,

      descriptionFontSize,
      descriptionFontWeight,
      descriptionLineHeight,

      buttonPadding,
      buttonRadius
    } = attributes;

    return (
      <div
        className="dynamic-card-block"
        style={{
          backgroundColor: backgroundColor,
          padding: padding,
          borderStyle: 'solid',
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          borderColor: borderColor,
          // CSS custom property for hover color
          '--dcb-button-hover': buttonHoverBgColor || buttonBgColor
        }}
      >
        {imageUrl && (
          <div className="dcb-image-wrap" style={{ maxWidth: imageMaxWidth }}>
            <img src={imageUrl} alt="" />
          </div>
        )}

        <h3
          className="dcb-title"
          style={{
            color: titleColor,
            fontSize: titleFontSize,
            fontWeight: titleFontWeight,
            lineHeight: titleLineHeight
          }}
        >
          {title}
        </h3>

        <p
          className="dcb-desc"
          style={{
            color: descriptionColor,
            fontSize: descriptionFontSize,
            fontWeight: descriptionFontWeight,
            lineHeight: descriptionLineHeight
          }}
        >
          {description}
        </p>

        {buttonUrl && (
          <div className="dcb-button-wrap">
            <a
              className="dcb-button"
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                padding: buttonPadding,
                borderRadius: buttonRadius
              }}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    );
  }
});
