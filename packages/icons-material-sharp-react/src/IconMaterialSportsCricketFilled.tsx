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
      <path d="M460-252 65-647l168-168 395 395-168 168ZM744-80 574-250l56-56 170 170-56 56Zm-4-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketFilled.displayName = 'OnesyIconMaterialSportsCricketFilled';

export default IconMaterialSportsCricketFilled;
