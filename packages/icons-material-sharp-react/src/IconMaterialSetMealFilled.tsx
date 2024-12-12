import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSetMealFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealFilled'

      short_name='SetMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360v-520h880v520H40Zm83 140-3-60 719-38 3 60-719 38Zm-3 99v-60h720v60H120Zm290-379q74 0 142.5-26T672-606q6 42 44 64t84 22v-200q-46 0-84 22.5T672-632q-53-52-120.5-80T410-740q-79 0-152 27.5T140-620q45 65 118 92.5T410-500Z"/>
    </Icon>
  );
});

IconMaterialSetMealFilled.displayName = 'OnesyIconMaterialSetMealFilled';

export default IconMaterialSetMealFilled;
