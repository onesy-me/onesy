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
      <path d="m80-160 440-640h360L760-160H80Zm500-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialAirlinesFilled.displayName = 'OnesyIconMaterialAirlinesFilled';

export default IconMaterialAirlinesFilled;
