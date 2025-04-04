import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOffFilled'

      short_name='NightSightAutoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-585 272-713q29-18 61.5-28t67.5-13q18-2 28 14t0 32q-15 25-22 52t-7 56v15Zm313 313-88-88q18 2 36.5 1t35.5-8q19-8 33.5 5t9.5 33q-5 15-12 29t-15 28ZM440-120q-134 0-227-93t-93-227q0-42 10.5-81t30.5-75L42-715q-12-12-12-28.5T42-772q12-12 28.5-12T99-772l664 664q12 12 12 28t-12 28q-12 12-28.5 12T706-52L596-161q-36 20-75 30.5T440-120Zm216-480-20 56q-4 11-13 17.5t-20 6.5q-19 0-29.5-15.5T569-568l102-287q4-11 14-18t22-7h26q12 0 22 7t14 18l102 287q6 17-4.5 32.5T837-520q-11 0-20-6.5T804-544l-20-56H656Zm18-54h92l-46-146-46 146Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOffFilled.displayName = 'OnesyIconMaterialNightSightAutoOffFilled';

export default IconMaterialNightSightAutoOffFilled;
