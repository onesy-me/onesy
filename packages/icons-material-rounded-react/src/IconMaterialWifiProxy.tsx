import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxy'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-110 60q-25 0-42.5-17.5T640-180v-160q0-25 17.5-42.5T700-400h50q25 0 42.5 17.5T810-340v50h50q25 0 42.5 17.5T920-230v50q0 25-17.5 42.5T860-120H700ZM480-800q113 0 218.5 35.5T892-660q14 11 21.5 26.5T922-601q1 17-5.5 33.5T896-537l-45 46q-12 11-28.5 11.5T794-491q-12-12-12-28.5t12-28.5l50-50q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 11-11q12-12 28.5-12t28.5 12q12 12 12 28.5T548-188l-11 11q-12 12-27 18t-30 6q-15 0-30-6t-27-18L63-537q-13-13-19.5-29.5T38-600q1-17 8-32.5T67-660q88-69 194-104.5T480-800Zm0 323Z"/>
    </Icon>
  );
});

IconMaterialWifiProxy.displayName = 'OnesyIconMaterialWifiProxy';

export default IconMaterialWifiProxy;
