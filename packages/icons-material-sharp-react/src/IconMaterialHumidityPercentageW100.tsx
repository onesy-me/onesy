import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityPercentageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageW100'

      short_name='HumidityPercentage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559.88-286q14.12 0 24.12-9.88 10-9.88 10-24T584.12-344q-9.88-10-24-10T536-344.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM378-279l223-223-19-20-224 224 20 19Zm21.88-167q14.12 0 24.12-9.88 10-9.88 10-24T424.12-504q-9.88-10-24-10T376-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Zm79.94 314Q365-132 288.5-211.1T212-408q0-82 66.5-182.5T480-812q135 121 201.5 221.5T748-408q0 117.8-76.68 196.9-76.69 79.1-191.5 79.1Zm.18-28q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-312Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageW100.displayName = 'OnesyIconMaterialHumidityPercentageW100';

export default IconMaterialHumidityPercentageW100;
