import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermometerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerW100'

      short_name='Thermometer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-62 0-105-43t-43-105q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T480-788q29 0 48.5 19.5T548-720v268q36 21 57.5 55.5T628-320q-1 62-44 105t-104 43Zm0-28q50 0 85-35t35-85q0-29-12.5-54T552-416l-32-24v-280q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v280l-32 24q-23 17-35.5 42T360-320q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialThermometerW100.displayName = 'OnesyIconMaterialThermometerW100';

export default IconMaterialThermometerW100;
