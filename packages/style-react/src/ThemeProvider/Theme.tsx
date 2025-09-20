import React from 'react';

import is from '@onesy/utils/is';
import merge from '@onesy/utils/merge';
import hash from '@onesy/utils/hash';
import isEnvironment from '@onesy/utils/isEnvironment';
import { OnesyTheme, classNames } from '@onesy/style';
import { IOnesyTheme } from '@onesy/style/OnesyTheme';

import ThemeContext from './Context';
import useOnesyTheme from './useOnesyTheme';
import { ThemeRequired } from '../style';

export interface IThemeValue extends ThemeRequired {
  updateWithRerender: (value: IOnesyTheme) => ThemeRequired;
}

const l = (value: string) => value;

const hashValue = (value: OnesyTheme) => {
  const allowed = ['direction', 'preference', 'mode', 'palette', 'shape', 'breakpoints', 'space', 'shadows', 'typography', 'transitions', 'z_index'];

  const valueNew = {};

  Object.keys(value).filter(item => allowed.includes(item)).forEach(item => valueNew[item] = value[item]);

  return hash(valueNew);
};

const resolveValue = (value: OnesyTheme) => {
  const notAllowed = ['subscriptions', 'id', 'element', 'updateWithRerender'];

  const valueNew = {};

  Object.keys(value).filter(item => !notAllowed.includes(item)).forEach(item => valueNew[item] = value[item]);

  return valueNew;
};

export interface ITheme extends React.HTMLAttributes<any> {
  root?: boolean;

  value?: IOnesyTheme;

  addCssVariables?: boolean;

  children?: any;
}

const Theme: React.FC<ITheme> = React.forwardRef((props, ref: any) => {
  const [init, setInit] = React.useState(false);

  const {
    root = false,

    value: valueLocal = {},

    addCssVariables = true,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(undefined),
    init: React.useRef<any>(undefined),
    id: React.useId(),
    styleSheet: React.useRef<Element>(undefined)
  };

  refs.init.current = init;

  const valueParent = useOnesyTheme() as any || {};

  const [value, setValue] = React.useState<IThemeValue>(() => new OnesyTheme(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any) as any);

  const addCssVariablesMethod = React.useCallback(() => {
    if (!refs.styleSheet.current) {
      refs.styleSheet.current = window.document.createElement('style');

      refs.styleSheet.current.setAttribute('data-onesy', 'true');
      refs.styleSheet.current.setAttribute('data-version', 'static');
      refs.styleSheet.current.setAttribute('data-name', 'vars');

      window.document.head.append(refs.styleSheet.current);
    }

    const values = [];

    const prefix = 'onesy';

    // Palette
    // Color
    Object.keys(value.palette.color).forEach(item => {
      const itemValue = value.palette.color[item]?.main || value.palette.color[item]?.[50];

      if (itemValue) values.push(`--${prefix}-palette-color-${item}: ${itemValue}`);
    });

    // Text
    Object.keys(value.palette.text).filter(item => ['default'].includes(item)).forEach(item => {
      Object.keys(value.palette.text[item]).forEach(itemValue => {
        values.push(`--${prefix}-palette-text-${itemValue}: ${value.palette.text[item][itemValue]}`);
      });
    });

    Object.keys(value.palette.text).filter(item => ['active', 'divider', 'disabled', 'hover', 'focus', 'selected'].includes(item)).forEach(item => {
      values.push(`--${prefix}-palette-text-${item}: ${value.palette.text[item]}`);
    });

    // Background
    Object.keys(value.palette.background).filter(item => ['default'].includes(item)).forEach(item => {
      Object.keys(value.palette.background[item]).forEach(itemValue => {
        values.push(`--${prefix}-palette-background-${itemValue}: ${value.palette.background[item][itemValue]}`);
      });
    });

    // Visual contrast
    // Object.keys(value.palette.visual_contrast).forEach(item => {
    //   Object.keys(value.palette.visual_contrast[item].opacity).forEach(itemValue => {
    //     values.push(`--${prefix}-palette-visual-contrast-${item}-opacity-${itemValue}: ${value.palette.visual_contrast[item].opacity[itemValue]}`);
    //   });
    // });

    // Shape
    values.push(`--${prefix}-shape-radius-unit: ${value.shape.radius.unit}`);

    Object.keys(value.shape.radius.values).forEach(item => {
      values.push(`--${prefix}-shape-radius-${item}: ${value.shape.radius.values[item]}`);
    });

    // Space
    values.push(`--${prefix}-space-unit: ${value.space.unit}`);

    Object.keys(value.space.values).forEach(item => {
      values.push(`--${prefix}-space-${item}: ${value.space.values[item]}`);
    });

    // Shadows
    Object.keys(value.shadows.values).filter(item => ['default'].includes(item)).forEach(item => {
      Object.keys(value.shadows.values[item]).forEach(itemValue => {
        values.push(`--${prefix}-shadows-${itemValue}: ${value.shadows.values[item][itemValue]}`);
      });
    });

    // Typography
    Object.keys(value.typography.font_family).forEach(item => values.push(`--${prefix}-typography-font-family-${item}: ${value.typography.font_family[item]}`));
    values.push(`--${prefix}-typography-font-size-html: ${value.typography.font_size.html}`);
    values.push(`--${prefix}-typography-unit: ${value.typography.unit}`);

    // Transitions
    Object.keys(value.transitions.duration).forEach(item => values.push(`--${prefix}-transitions-duration-${item}: ${value.transitions.duration[item]}`));
    Object.keys(value.transitions.timing_function).forEach(item => values.push(`--${prefix}-transitions-timing-function-${item}: ${value.transitions.timing_function[item]}`));

    // zIndex
    Object.keys(value.z_index).forEach(item => values.push(`--${prefix}-z-index-${item}: ${value.z_index[item]}`));

    // Add to styleSheet innerHTML
    refs.styleSheet.current.innerHTML = `
${refs.root.current ? `#${refs.id}` : ':root'} {
${values.map(item => `\t${item};`).join('\n')}
}
`;
  }, [value]);

  React.useEffect(() => {
    if (refs.root.current) {
      const onesyTheme = new OnesyTheme(value as any, { element: refs.root.current }) as any;

      onesyTheme.id = value.id;

      onesyTheme.subscriptions = value.subscriptions;

      // Init
      setValue(onesyTheme);
    }

    setInit(true);
  }, []);

  React.useEffect(() => {
    addCssVariablesMethod();
  }, [refs.root.current, valueParent, value]);

  React.useEffect(() => {
    if (init) {
      value.update(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any);

      const onesyTheme = new OnesyTheme(value as any, { element: refs.root?.current }) as any;

      onesyTheme.id = value.id;

      onesyTheme.subscriptions = value.subscriptions;

      setValue(onesyTheme);
    }
  }, [hashValue(valueLocal as any), valueParent?.palette?.light]);

  const update = (updateValue: IOnesyTheme) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      const onesyTheme = new OnesyTheme(value as any, { element: refs.root?.current || (isEnvironment('browser') && window.document.body) }) as any;

      onesyTheme.id = value.id;

      onesyTheme.subscriptions = value.subscriptions;

      // Init
      setValue(onesyTheme);

      return value;
    }
  };

  // Update method
  (value as any).updateWithRerender = update;

  // locale method
  value.l = value.l || l;

  if (root) {
    return (
      <ThemeContext.Provider
        value={value}
      >
        <div
          ref={(item: any) => {
            refs.root.current = item;

            if (ref?.current) ref.current = item;
          }}

          {...other}

          id={refs.id}

          className={classNames(
            other?.className
          )}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
});

export default Theme;
