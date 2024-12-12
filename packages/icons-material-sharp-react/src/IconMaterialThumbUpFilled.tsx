import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpFilled'

      short_name='ThumbUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-520l280-280 74 74-52 206h298v176L774-120H320Zm-240 0v-520h160v520H80Z"/>
    </Icon>
  );
});

IconMaterialThumbUpFilled.displayName = 'OnesyIconMaterialThumbUpFilled';

export default IconMaterialThumbUpFilled;
