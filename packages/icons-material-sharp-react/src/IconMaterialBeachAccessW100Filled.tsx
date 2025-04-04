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
      <path d="M771-168 533-404l20-20 238 238-20 18Zm-532-56q-69-94-69.5-211T239-646q-12 40-6.5 83.5t21.5 86q16 42.5 39.5 81.5t47.5 69L239-224Zm121-121q-40-45-63.5-95T264-536q-9-46-3-83t25-56q19-19 56-24t82.5 4.5q45.5 9.5 95 33.5t93.5 63L360-345Zm272-272q-29-23-67-46.5t-79.5-40Q444-720 401-727t-82 4q94-66 208-65.5T735-720L632-617Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100Filled.displayName = 'OnesyIconMaterialBeachAccessW100Filled';

export default IconMaterialBeachAccessW100Filled;
