import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltW100Filled'

      short_name='ArrowRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-466H226q-6 0-10-4t-4-10q0-6 4-10t10-4h468L534-654q-4-4-4.5-9.5T534-674q5-5 10-5t10 5l173 173q5 5 7 10t2 11q0 6-2 11t-7 10L554-286q-4 4-9.5 4.5T534-286q-5-5-5-10t5-10l160-160Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltW100Filled.displayName = 'OnesyIconMaterialArrowRightAltW100Filled';

export default IconMaterialArrowRightAltW100Filled;
