import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ImageGalleryElement from '../ImageGallery';
import SectionElement, { ISection } from '../Section/Section';
import { IImageGallery } from '../ImageGallery/ImageGallery';
import { staticClassName } from '../utils';
import { IMediaObject } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-SectionImageGallery' });

export type ISectionImageGallery = ISection & {
  values?: IMediaObject[];

  value?: number;

  ImageGalleryProps?: IImageGallery;
};

const Element: React.FC<ISectionImageGallery> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySectionImageGallery?.props?.default, ...props_ };

  const Section = theme?.elements?.Section || SectionElement;

  const ImageGallery = theme?.elements?.ImageGallery || ImageGalleryElement;

  const {
    ref,

    values,

    value,

    ImageGalleryProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(undefined)
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'onesy-SectionImageGallery-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {!!values?.length && (
        <ImageGallery
          version='regular'

          items={values}

          value={value}

          {...ImageGalleryProps}
        />
      )}
    </Section>
  );
};

Element.displayName = 'onesy-SectionImageGallery';

export default Element;
