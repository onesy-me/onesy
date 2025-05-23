import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBakeryDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningW100Filled'

      short_name='BakeryDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m792-258-88-46 74-182 82 154q18 35-6 64.5t-62 9.5Zm-216-36 28-316q2-23 21.5-29t40.5 3l80 32q20 8 26.5 24.5T768-536l-98 242h-94Zm-286 0-94-238q-9-24-6-43.5t24-28.5l80-32q23-9 41.5-2t20.5 24l28 320h-94Zm-122 36q-35 18-61.5-8t-6.5-62l84-158 72 182-88 46Zm244-36-32-366q-2-20 13.5-33t32.5-13h108q23 0 35.5 14.5T580-656l-32 362H412Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningW100Filled.displayName = 'OnesyIconMaterialBakeryDiningW100Filled';

export default IconMaterialBakeryDiningW100Filled;
