import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoPresentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentFilled'

      short_name='CoPresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120v-640H120v320H40v-400h880v720h-80ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Z"/>
    </Icon>
  );
});

IconMaterialCoPresentFilled.displayName = 'OnesyIconMaterialCoPresentFilled';

export default IconMaterialCoPresentFilled;
