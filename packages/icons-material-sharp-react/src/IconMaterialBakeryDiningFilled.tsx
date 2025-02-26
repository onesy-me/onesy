import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBakeryDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningFilled'

      short_name='BakeryDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m818-232-78-38 73-180 88 170-83 48Zm-198-48 34-377 152 61-126 316h-60Zm-340 0L154-596l152-61 34 377h-60Zm-138 48-83-48 88-170 73 180-78 38Zm258-48-40-440h240l-40 440H400Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningFilled.displayName = 'OnesyIconMaterialBakeryDiningFilled';

export default IconMaterialBakeryDiningFilled;
