import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsFilled'

      short_name='Stairs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h177v-133h103v-133h103v-134h97v-80H543v133H440v133H337v134h-97v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialStairsFilled.displayName = 'OnesyIconMaterialStairsFilled';

export default IconMaterialStairsFilled;
