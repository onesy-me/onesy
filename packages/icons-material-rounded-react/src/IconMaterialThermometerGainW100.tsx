import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermometerGainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerGainW100'

      short_name='ThermometerGain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M676-666H570q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H704v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106ZM359.7-172q-61.29 0-104.5-43Q212-258 212-320q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 57.5 55.5T508-320q-1 62-44 105t-104.3 43Zm.3-28q50 0 85-35t35-85q0-29-12.5-54T432-416l-32-24v-280q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v280l-32 24q-23 17-35.5 42T240-320q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialThermometerGainW100.displayName = 'OnesyIconMaterialThermometerGainW100';

export default IconMaterialThermometerGainW100;
