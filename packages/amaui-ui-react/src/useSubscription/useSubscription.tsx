import React from 'react';

import { is } from '@onesy/utils';
import OnesySubscription from '@onesy/subscription';

const useSubscription = <Type extends unknown = undefined>(onesySubscription: OnesySubscription, method?: any, value?: any) => {
  // an array of the value
  // we are getting the same reference value
  // from some of the subscriptions
  // in order for rerender to be made
  const [response, setResponse] = React.useState<[Type]>([value !== undefined ? value : onesySubscription?.value]);

  React.useEffect(() => {
    if (value !== undefined) {
      if (is('function', (onesySubscription as any).init)) (onesySubscription as any).init({
        ...value,

        loaded: true
      });
    }
  }, []);

  React.useEffect(() => {
    if (!is('function', onesySubscription?.subscribe)) return;

    const subscription = onesySubscription.subscribe(async (valueItem: any) => {
      if (is('function', method)) await method(valueItem, setResponse);
      else setResponse([valueItem]);
    });

    if (onesySubscription.value !== undefined) setResponse([onesySubscription.value]);

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [onesySubscription]);

  return response[0];
};

export default useSubscription;
