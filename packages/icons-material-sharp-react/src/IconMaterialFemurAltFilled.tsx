import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemurAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAltFilled'

      short_name='FemurAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-440q17 0 28.5-11.5T580-480q0-6-6-23 11-4 18.5-14t7.5-23q0-17-11.5-28.5T560-580q-13 0-23 7t-14 19l-146-70q1-3 3-16 0-17-11.5-28.5T340-680q-17 0-28.5 11.5T300-640q0 6 7 22-11 4-19 14t-8 24q0 17 11.5 28.5T320-540q14 0 24-7.5t14-19.5l146 70-4 17q0 17 11.5 28.5T540-440Zm-421-60 243-339 257 117q64 29 102.5 88T760-503v423H394q-16-47-24-92.5t-10-86q-2-40.5-.5-74.5t4.5-58q-1 0 0 0-22-5-50.5-12.5t-61-20.5Q220-437 186-455.5T119-500Z"/>
    </Icon>
  );
});

IconMaterialFemurAltFilled.displayName = 'OnesyIconMaterialFemurAltFilled';

export default IconMaterialFemurAltFilled;
