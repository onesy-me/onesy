import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartlyCloudyNightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartlyCloudyNightW100Filled'

      short_name='PartlyCloudyNight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360q36 0 66 19.5t44 52.5l20 48h52q24 0 41 17.5t17 42.5q0 25-17.5 42.5T420-120H240q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5Zm151-409q0 92 34 176t99 149q65 65 149 99t176 34q-39 100-126.5 158.5T529-92q15-19 23-41.5t8-46.5q0-58-40-99t-96-40q-24-55-74-88t-110-33q-17 0-34 3t-34 9v-16q0-108 59.5-196.5T391-769Z"/>
    </Icon>
  );
});

IconMaterialPartlyCloudyNightW100Filled.displayName = 'OnesyIconMaterialPartlyCloudyNightW100Filled';

export default IconMaterialPartlyCloudyNightW100Filled;
