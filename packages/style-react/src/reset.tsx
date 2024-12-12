import React from 'react';

import is from '@onesy/utils/is';
import merge from '@onesy/utils/merge';

import { IResponse, reset as onesyResetMethod } from '@onesy/style';
import { IOptions } from '@onesy/style/reset';

import { useOnesyStyle, useOnesyTheme } from '.';
import { IResponseStyle, propsAreNew, TValue } from './style';

export default function reset(value: TValue = {}, options_: IOptions = {}) {
  const responses: Array<IResponseStyle> = [];

  const { name = 'Reset' } = options_;

  function useReset(props_?: any) {
    const onesyStyle = useOnesyStyle();
    const onesyTheme = useOnesyTheme();

    const refs = {
      update: React.useRef<any>(undefined)
    };

    const resolve = (theme = onesyTheme) => {
      let valueNew = value;

      if (is('function', value)) valueNew = (value as any)(theme);

      // Add style add & overrides
      if (onesyTheme.ui?.elements?.[name as any]?.style) {
        const { add, override } = onesyTheme.ui.elements[name as any].style;

        // Add
        if (add) {
          const object = is('function', add) ? (add as any)(theme) : add;

          valueNew = merge(object, valueNew, { copy: true });
        }

        // Override
        if (override) {
          const object = is('function', override) ? (override as any)(theme) : override;

          valueNew = {
            ...valueNew,
            ...object
          };
        }
      }

      return valueNew;
    };

    // Updates for onesyTheme
    const method = React.useCallback((updateValue: any, updatedTheme: any) => {
      if (is('function', value)) {
        const valueNew = resolve(updatedTheme);

        // Update
        if (response?.update !== undefined) response.update(valueNew);
      }
    }, []);

    const makeResponse = () => {
      let response_: any;

      // Method
      // If it's a new instance of onesyTheme
      // make a new responses with it
      response_ = responses.find((item: any) => item.onesyTheme.id === onesyTheme.id);

      if (response_) return response_;

      // If there's not add a new response and use it
      const options: any = {
        onesy_style: { value: undefined },
        onesy_theme: { value: undefined },
      };

      // OnesyStyle
      if (onesyStyle !== undefined) options.onesy_style.value = onesyStyle;

      // OnesyTheme
      if (onesyTheme !== undefined) options.onesy_theme.value = onesyTheme;

      response_ = onesyResetMethod(resolve() as any, merge(options, options_, { copy: true }));

      // Add the onesyTheme to the response_
      response_.onesyTheme = onesyTheme;

      // Add value to the responses
      responses.push(response_);

      // Update
      if (onesyTheme) onesyTheme.subscriptions.update.subscribe(method);

      return response_;
    };

    const response = React.useState<IResponseStyle>(makeResponse())[0];

    let props = props_;

    if (is('object', props)) {
      const newProps: any = {};

      const allowed = Object.keys(props).filter((prop: any) => is('array', props[prop]) ? !(props[prop].some((item: any) => React.isValidElement(item))) : !React.isValidElement(props[prop]));

      allowed.forEach((prop: any) => newProps[prop] = props[prop]);

      props = newProps;
    }

    const [values, setValues] = React.useState<IResponse>(() => response.add(props));

    // Add
    React.useEffect(() => {
      if (!values || ['refresh'].includes(refs.update.current)) setValues(() => {
        refs.update.current = undefined;

        return response.add(props);
      });

      // Clean up
      return () => {
        // Remove
        response?.remove(values?.ids?.dynamic);

        // Refresh
        refs.update.current = 'refresh';

        // Remove response from the responses
        // if users is 0 in onesyStyleSheetManager
        if (!response?.onesy_style_sheet_manager?.users) {
          const index = responses.findIndex((item: any) => item.onesyTheme.id === onesyTheme.id);

          if (index > -1) {
            responses.splice(index, 1);

            // Unsubscribe
            if (onesyTheme) onesyTheme.subscriptions.update.unsubscribe(method);
          }
        }
      };
    }, []);

    // Update props
    React.useEffect(() => {
      if (response !== undefined && values?.ids) response.props = { ids: values.ids.dynamic, props };
      // Only 1 lvl of values
    }, [propsAreNew(props)]);

    return values;
  }

  return useReset;
}
