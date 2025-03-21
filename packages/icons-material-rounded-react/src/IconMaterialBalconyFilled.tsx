import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBalconyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyFilled'

      short_name='Balcony'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm240 0q-17 0-28.5-11.5T560-520q0-17 11.5-28.5T600-560q17 0 28.5 11.5T640-520q0 17-11.5 28.5T600-480ZM200-80q-33 0-56.5-23.5T120-160v-160q0-20 9.5-38.5T160-389v-171q0-66 25-124.5t68.5-102Q297-830 355.5-855T480-880q66 0 124.5 25t102 68.5Q750-743 775-684.5T800-560v171q21 12 30.5 30.5T840-320v160q0 33-23.5 56.5T760-80H200Zm0-240v160h80v-160h-80Zm160 160h80v-160h-80v160ZM240-400h200v-397q-86 14-143 80.5T240-560v160Zm280 0h200v-160q0-90-57-156.5T520-797v397Zm0 240h80v-160h-80v160Zm160 0h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialBalconyFilled.displayName = 'OnesyIconMaterialBalconyFilled';

export default IconMaterialBalconyFilled;
