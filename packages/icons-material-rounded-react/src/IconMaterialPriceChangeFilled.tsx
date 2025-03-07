import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceChangeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeFilled'

      short_name='PriceChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm240-240H280q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320h40q0 17 11.5 28.5T360-280q17 0 28.5-11.5T400-320h40q17 0 28.5-11.5T480-360v-120q0-17-11.5-28.5T440-520H320v-40h120q17 0 28.5-11.5T480-600q0-17-11.5-28.5T440-640h-40q0-17-11.5-28.5T360-680q-16 0-22.5 14.5T320-640h-40q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440h120v40Zm247 83 56-56q5-5 2.5-11t-9.5-6H584q-7 0-9.5 6t2.5 11l56 56q3 3 7 3t7-3Zm-63-243h112q7 0 9.5-6t-2.5-11l-56-56q-3-3-7-3t-7 3l-56 56q-5 5-2.5 11t9.5 6Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeFilled.displayName = 'OnesyIconMaterialPriceChangeFilled';

export default IconMaterialPriceChangeFilled;
