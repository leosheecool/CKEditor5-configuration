/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { InlineEditor,
Alignment,
Autoformat,
  Bold,
  Italic,
  Superscript,
  Underline,
BlockQuote,
Essentials ,
FontColor, FontSize ,
Heading,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
Link, LinkImage ,
List ,
MediaEmbed, MediaEmbedToolbar,
Paragraph,
PasteFromOffice,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
TextTransformation ,
Undo,
FindAndReplace} from 'ckeditor5';
import ImageStyleUtils from '@ckeditor/ckeditor5-image/src/imagestyle/utils';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends InlineEditor {
  public static override readonly builtinPlugins = [
    FindAndReplace,
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    Essentials,
    FontColor,
    FontSize,
    Heading,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Italic,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    MediaEmbedToolbar,
    Paragraph,
    PasteFromOffice,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline,
    Undo
  ];

  public static override readonly defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        'heading',
        'bold',
        'italic',
        'underline',
        '|',
        'fontSize',
        'fontColor',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'alignment',
        '|',
        'imageInsert',
        'blockQuote',
        'insertTable',
        'superscript'
      ]
    },
    language: 'en',
    image: {
      styles: {
        options: [
          {
            name: 'alignBackRight',
            icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0H1C0.4 0 0 0.4 0 1C0 1.6 0.4 2 1 2H8.6L0.3 10.3C-0.0999998 10.7 -0.0999998 11.3 0.3 11.7C0.7 12.1 1.3 12.1 1.7 11.7L10 3.4V11C10 11.6 10.4 12 11 12C11.6 12 12 11.6 12 11V1C12 0.4 11.6 0 11 0Z" fill="black"/></svg>',
            title: 'Back right image',
            className: 'image-back-right',
            modelElements: ['imageInline', 'imageBlock']
          },
          {
            name: 'alignFrontLeft',
            icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10H3.4L11.7 1.7C12.1 1.3 12.1 0.7 11.7 0.3C11.3 -0.0999998 10.7 -0.0999998 10.3 0.3L2 8.6V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1V11C0 11.1 -9.68575e-08 11.3 0.0999999 11.4C0.2 11.6 0.4 11.8 0.6 11.9C0.7 12 0.9 12 1 12H11C11.6 12 12 11.6 12 11C12 10.4 11.6 10 11 10Z" fill="black"/></svg>',
            title: 'Front left image',
            className: 'image-front-left',
            modelElements: ['imageInline', 'imageBlock']
          },
          {
            name: 'alignBackLeft',
            icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 2H11C11.6 2 12 1.6 12 1C12 0.4 11.6 0 11 0H1C0.4 0 0 0.4 0 1V11C0 11.6 0.4 12 1 12C1.6 12 2 11.6 2 11V3.4L10.3 11.7C10.7 12.1 11.3 12.1 11.7 11.7C12.1 11.3 12.1 10.7 11.7 10.3L3.4 2Z" fill="black"/></svg>',
            title: 'Back left image',
            className: 'image-back-left',
            modelElements: ['imageInline', 'imageBlock']
          },
          {
            name: 'alignFrontRight',
            icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0C10.4 0 10 0.4 10 1V8.6L1.7 0.3C1.3 -0.0999998 0.7 -0.0999998 0.3 0.3C-0.0999998 0.7 -0.0999998 1.3 0.3 1.7L8.6 10H1C0.4 10 0 10.4 0 11C0 11.6 0.4 12 1 12H11C11.6 12 12 11.6 12 11V1C12 0.4 11.6 0 11 0Z" fill="black"/></svg>',
            title: 'Front right image',
            className: 'image-front-right',
            modelElements: ['imageInline', 'imageBlock']
          },
					...ImageStyleUtils.getDefaultStylesConfiguration(true, true).options || []
        ]
      },
			resizeUnit: "%",
      resizeOptions: [
        {
          name: 'resizeImage:original',
          value: null
        },
        {
          name: 'resizeImage:25',
          value: '25'
        },
        {
          name: 'resizeImage:50',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          value: '75'
        }
      ],
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage',
        'imageStyle:alignLeft',
        'imageStyle:alignCenter',
        'imageStyle:alignRight',
        '|',
        'imageStyle:alignBackRight',
        'imageStyle:alignFrontLeft',
        'imageStyle:alignBackLeft',
        'imageStyle:alignFrontRight',
        '|',
        'imageTextAlternative',
        'toggleImageCaption',
        'resizeImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
  };
}

export default Editor;
