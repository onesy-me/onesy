import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeachAccessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100Filled'

      short_name='BeachAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M762-177 543-394q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l218 218q4 4 4 10t-5 10q-4 4-9 3.5t-9-4.5Zm-495-75q-12 12-27 10t-23-16q-53-91-47.5-197T239-646q-12 40-6.5 83.5t21.5 86q16 42.5 39.5 81.5t47.5 69l-74 74Zm93-93q-40-45-63.5-95T264-536q-9-46-3-83t25-56q19-19 56-24t82.5 4.5q45.5 9.5 95 33.5t93.5 63L360-345Zm341-397q14 8 16 23t-10 27l-75 75q-29-23-67-46.5t-79.5-40Q444-720 401-727t-82 4q85-60 188-65t194 46Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100Filled.displayName = 'OnesyIconMaterialBeachAccessW100Filled';

export default IconMaterialBeachAccessW100Filled;
