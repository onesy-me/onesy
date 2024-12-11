import React from 'react';

import is from '@onesy/utils/is';
import { OnesyStyle, makeClassName, unit, rtl, sort, valueObject, prefix } from '@onesy/style';

import StyleContext from './Context';

function makeOnesyStyle(element?: Element) {
  const onesyStyle = new OnesyStyle({
    element
  });

  // Add all the plugins
  onesyStyle.plugins.add = [
    unit,
    makeClassName,
    prefix,
    sort,
    rtl,
    valueObject
  ];

  return onesyStyle;
}

export interface IStyle extends Partial<OnesyStyle> {
  updateWithRerender?: (value: any) => OnesyStyle;
}

const Style: React.FC<IStyle> = React.forwardRef((props, ref: any) => {
  const {
    root = false,

    remove,

    value: value_,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(undefined)
  };

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof OnesyStyle)) return makeOnesyStyle();

    (value_ as OnesyStyle).remove = remove;

    return (value_ as OnesyStyle);
  });

  React.useEffect(() => {
    if (refs.root.current) {
      value.element = refs.root.current;

      value.remove = remove;

      // Init
      value.init();

      const valueNew = new OnesyStyle();

      // Copy over from value
      Object.keys(value).forEach((prop: any) => valueNew[prop] = value[prop]);

      setValue(valueNew);
    }
  }, []);

  const update = (updateValue: any) => {
    if (updateValue !== undefined) {
      const valueNew = new OnesyStyle();

      valueNew.remove = remove;

      Object.keys(value).forEach((prop: any) => valueNew[prop] = value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach((prop: any) => valueNew[prop] = updateValue[prop]);

      setValue(valueNew);

      return valueNew;
    }
  };

  // Update method
  value.updateWithRerender = update;

  if (root) return (
    <StyleContext.Provider
      value={value}
    >
      <div
        ref={(item: any) => {
          refs.root.current = item;

          if (ref?.current) ref.current = item;
        }}

        {...other}
      >
        {children}
      </div>
    </StyleContext.Provider>
  );

  return (
    <StyleContext.Provider
      value={value}
    >
      {children}
    </StyleContext.Provider>
  );
});

export default Style;
