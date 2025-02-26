import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOffW100Filled'

      short_name='NightSightAutoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m374-608-84-86q27-16 57-25.5t62-12.5q-18 28-26 59.5t-9 64.5Zm316 322-47-48q20 0 38.5-3t36.5-9q-5 16-12 31t-16 29ZM589-533l110-334h42l110 334h-29l-27-80H645l-26 80h-30Zm65-108h132l-66-201-66 201Zm105 529-20 20-117-117q-39 31-85.5 47T440-146q-122 0-208-86t-86-208q0-50 16-96.5t47-85.5L82-749l20-20 657 657Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOffW100Filled.displayName = 'OnesyIconMaterialNightSightAutoOffW100Filled';

export default IconMaterialNightSightAutoOffW100Filled;
