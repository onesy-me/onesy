import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsCricketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketFilled'

      short_name='SportsCricket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-392 488-280q-12 12-28 12t-28-12L92-620q-12-12-12-27t12-27l112-112q12-12 29-12t29 12l338 338q12 12 12 28t-12 28Zm116 284L574-250l56-56 142 142q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm24-492q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketFilled.displayName = 'OnesyIconMaterialSportsCricketFilled';

export default IconMaterialSportsCricketFilled;
