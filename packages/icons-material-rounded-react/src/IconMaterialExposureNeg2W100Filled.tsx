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
      <path d="M803-254H545q-4.97 0-8.48-3.4-3.52-3.4-3.52-8.2v-17.2q0-1.2 3-8.2l165-169q35-37 51.5-61.5T769-576q0-45-30-73.5T659-678q-32 0-56.5 12.5T562-630q-3.66 4.67-9.33 6.33-5.67 1.67-10.36-.18Q537-626 535-631.5t1-10.5q20-29 49.7-46.5Q615.39-706 659-706q63 0 100.5 38t37.5 92q0 36.3-18.5 66.15Q760-480 723-442L569-284v2h234q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM357-432H157q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h200q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2W100Filled.displayName = 'OnesyIconMaterialExposureNeg2W100Filled';

export default IconMaterialExposureNeg2W100Filled;
