import type { Schema, Struct } from '@strapi/strapi';

export interface ThreeKeyFiguresThreeKeyFigures extends Struct.ComponentSchema {
  collectionName: 'components_three_key_figures_three_key_figures';
  info: {
    displayName: 'ThreeKeyFigures';
  };
  attributes: {
    FirstKeyFigureNumber: Schema.Attribute.String;
    FirstKeyFigureParagraph: Schema.Attribute.String;
    SecondKeyFigureNumber: Schema.Attribute.String;
    SecondKeyFigureParagraph: Schema.Attribute.String;
    SectionTitle: Schema.Attribute.String;
    ThirdKeyFigureNumber: Schema.Attribute.String;
    ThirdKeyFigureParagraph: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'three-key-figures.three-key-figures': ThreeKeyFiguresThreeKeyFigures;
    }
  }
}
