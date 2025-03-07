import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOffFilled'

      short_name='ViewInArOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m818-28-52-52h-86v-80h14v8L146-700h14v20H80v-86l-54-54 57-57L875-85l-57 57Zm62-166-80-80v-6h80v86ZM274-800l-80-80h86v80h-6ZM80-80v-200h80v120h120v80H80Zm720-600v-120H680v-80h200v200h-80Zm-40 366L581-493l99-57v-45l-42-24-115 68-175-175 132-76 280 161v327ZM480-158 200-319v-322l76-43 92 92-46-27-42 24v45l160 93v184l40 23 40-23v-167l164 164-204 118Z"/>
    </Icon>
  );
});

IconMaterialViewInArOffFilled.displayName = 'OnesyIconMaterialViewInArOffFilled';

export default IconMaterialViewInArOffFilled;
