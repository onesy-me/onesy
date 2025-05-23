import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeW100'

      short_name='DonutLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-134q-133-14-220.5-113T132-480q0-134 87.5-232T440-826v28q-121 17-200.5 107T160-480q0 121 79.5 211T440-162v28Zm80 0v-28q109-12 185.5-90.5T798-440h28q-14 122-99.5 208T520-134Zm278-386q-17-109-93-186.5T520-798v-28q121 14 206.5 99.5T826-520h-28Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeW100.displayName = 'OnesyIconMaterialDonutLargeW100';

export default IconMaterialDonutLargeW100;
