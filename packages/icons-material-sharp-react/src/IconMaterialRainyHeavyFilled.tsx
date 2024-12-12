import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRainyHeavyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyHeavyFilled'

      short_name='RainyHeavy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-186 26-738l72-35 276 550-72 37Zm187 0L213-738l72-36 275 551-71 37Zm187 0L400-738l71-36 276 551-71 37Zm186-1L587-738l71-36 276 552-72 35Z"/>
    </Icon>
  );
});

IconMaterialRainyHeavyFilled.displayName = 'OnesyIconMaterialRainyHeavyFilled';

export default IconMaterialRainyHeavyFilled;
