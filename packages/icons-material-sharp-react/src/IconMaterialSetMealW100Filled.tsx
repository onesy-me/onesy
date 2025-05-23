import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSetMealW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealW100Filled'

      short_name='SetMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M86-406v-428h788v428H86Zm52 149-1-28 687-36 1 28-687 36Zm-2 100v-28h688v28H136Zm297-367q61 0 118.5-19.5T653-606q6 29 31.5 45t56.5 18v-154q-31 3-57 19.5T653-632q-45-42-102-63t-118-21q-66 0-127.5 22T203-620q40 52 102 74t128 22Z"/>
    </Icon>
  );
});

IconMaterialSetMealW100Filled.displayName = 'OnesyIconMaterialSetMealW100Filled';

export default IconMaterialSetMealW100Filled;
