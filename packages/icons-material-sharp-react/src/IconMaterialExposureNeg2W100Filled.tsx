import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureNeg2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2W100Filled'

      short_name='ExposureNeg2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M533-254v-34l168-172q35-37 51.5-61.5T769-576q0-45-30-73.5T659-678q-36 0-62.5 15.5T555-618l-26-12q20-35 51-55.5t79-20.5q63 0 100.5 38t37.5 92q0 36-18.5 66T723-442L569-284v2h248v28H533ZM371-432H143v-28h228v28Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2W100Filled.displayName = 'OnesyIconMaterialExposureNeg2W100Filled';

export default IconMaterialExposureNeg2W100Filled;
