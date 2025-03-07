import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTacticFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TacticFilled'

      short_name='Tactic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-183-36 36q-11 11-27.5 11T628-148q-11-11-11-28t11-28l35-36-35-35q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35 35-36q11-12 27.5-12t28.5 12q12 12 12 28.5T811-275l-35 35 36 36q12 12 11.5 28T811-148q-12 11-28 11.5T755-148l-35-35Zm-480-17q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-35-35q-12-12-11.5-28.5T652-852q12-12 28.5-12t28.5 12l103 104q12 12 12 28t-12 28L708-588q-11 11-27.5 11.5T652-588q-12-11-12-28t11-29l35-35h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm0-543-36 36q-11 11-27.5 11T148-628q-11-11-11-28t11-28l35-36-35-35q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35 35-36q11-12 27.5-12t28.5 12q12 12 12 28.5T331-755l-35 35 36 36q12 12 11.5 28T331-628q-12 11-28 11.5T275-628l-35-35Z"/>
    </Icon>
  );
});

IconMaterialTacticFilled.displayName = 'OnesyIconMaterialTacticFilled';

export default IconMaterialTacticFilled;
