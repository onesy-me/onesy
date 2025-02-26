import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlinesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesFilled'

      short_name='Airlines'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m102-191 394-574q11-17 28.5-26t37.5-9h222q38 0 61.5 29t16.5 66l-96 512q-3 14-14 23.5t-25 9.5H118q-12 0-17.5-10.5T102-191Zm478-209q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialAirlinesFilled.displayName = 'OnesyIconMaterialAirlinesFilled';

export default IconMaterialAirlinesFilled;
