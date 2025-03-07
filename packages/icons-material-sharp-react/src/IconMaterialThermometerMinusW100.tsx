import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermometerMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerMinusW100'

      short_name='ThermometerMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M556-666v-28h268v28H556ZM359.59-172Q298-172 255-215t-43-105q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 58 55.5t22 76.5q0 62-43.41 105t-105 43ZM240-320h240q0-29-12.5-54T432-416l-32-24v-280q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v280l-32 24q-23 17-35.5 42T240-320Z"/>
    </Icon>
  );
});

IconMaterialThermometerMinusW100.displayName = 'OnesyIconMaterialThermometerMinusW100';

export default IconMaterialThermometerMinusW100;
