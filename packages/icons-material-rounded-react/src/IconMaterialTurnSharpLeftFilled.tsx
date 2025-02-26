import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftFilled'

      short_name='TurnSharpLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-160v-200H320q-33 0-56.5-23.5T240-440v-248l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v248h320q33 0 56.5 23.5T720-360v200q0 17-11.5 28.5T680-120q-17 0-28.5-11.5T640-160Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftFilled.displayName = 'OnesyIconMaterialTurnSharpLeftFilled';

export default IconMaterialTurnSharpLeftFilled;
