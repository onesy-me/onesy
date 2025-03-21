import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockMediaW100'

      short_name='StockMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-412v-416h416v416H132Zm28-28h360v-360H160v360Zm160-44-48-66-52 70h240l-72-94-68 90Zm334.12 352q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.42-66.62Q614.83-320 654-320q20 0 36.5 7t29.5 20v-227h108v28h-80v266q0 39.17-27.38 66.58Q693.24-132 654.12-132ZM160-440v-360 360Z"/>
    </Icon>
  );
});

IconMaterialStockMediaW100.displayName = 'OnesyIconMaterialStockMediaW100';

export default IconMaterialStockMediaW100;
