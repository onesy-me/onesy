import React from 'react';

import hash from '@onesy/utils/hash';
import merge from '@onesy/utils/merge';

import { inline as onesyInlineMethod } from '@onesy/style';
import { IOptions } from '@onesy/style/inline';

import { TValue } from './style';
import { useOnesyStyle, useOnesyTheme } from '.';

export default function inline(value_: TValue, props?: any, options_: IOptions = { response: 'json' }) {
  const [value, setValue] = React.useState(undefined);

  const onesyStyle = useOnesyStyle();
  const onesyTheme = useOnesyTheme();

  const update = (update_ = true) => {
    const options = merge(options_, { onesy_style: { value: onesyStyle }, onesy_theme: { value: onesyTheme } }, { copy: true });

    // Options response value
    options.response = 'json';

    const valueNew = onesyInlineMethod(value_ as any, props, options);

    if (update_) setValue(valueNew as any);

    return valueNew;
  };

  // Update
  React.useEffect(() => {
    update();

    if (onesyTheme) onesyTheme.subscriptions.update.subscribe(update);

    // Clean up
    return () => {
      // Unsubscribe
      if (onesyTheme) onesyTheme.subscriptions.update.unsubscribe(update);
    };
  }, []);

  // Update props
  React.useEffect(() => {
    update();
  }, [hash(props)]);

  // Important for ssr value
  const value__ = value || update(false);

  return value__;
}
