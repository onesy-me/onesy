import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMergeTypeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeW100'

      short_name='MergeType'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-212 466-430v-303L336-603l-20-20 164-164 164 164-20 20-130-130v291l210 210-20 20Zm-408 0-20-20 148-148 20 20-148 148Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeW100.displayName = 'OnesyIconMaterialMergeTypeW100';

export default IconMaterialMergeTypeW100;
