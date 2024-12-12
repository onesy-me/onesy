import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsCricket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricket'

      short_name='SportsCricket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-252 65-647l168-168 395 395-168 168Zm0-112 56-56-284-284-56 56 284 284ZM744-80 574-250l56-56 170 170-56 56Zm-4-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T800-740q0-25-17.5-42.5T740-800q-25 0-42.5 17.5T680-740q0 25 17.5 42.5T740-680Zm0-60ZM346-534Z"/>
    </Icon>
  );
});

IconMaterialSportsCricket.displayName = 'OnesyIconMaterialSportsCricket';

export default IconMaterialSportsCricket;
