import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeW100'

      short_name='CallMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m276-212-20-20 210-210v-291L336-603l-20-20 164-164 164 164-20 20-130-130v303L276-212Zm408 0L536-360l20-20 148 148-20 20Z"/>
    </Icon>
  );
});

IconMaterialCallMergeW100.displayName = 'OnesyIconMaterialCallMergeW100';

export default IconMaterialCallMergeW100;
