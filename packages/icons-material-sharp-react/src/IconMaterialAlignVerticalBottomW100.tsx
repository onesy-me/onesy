import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomW100'

      short_name='AlignVerticalBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-158v-28h696v28H132Zm184-138v-507h70v507h-70Zm258 0v-267h70v267h-70Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomW100.displayName = 'OnesyIconMaterialAlignVerticalBottomW100';

export default IconMaterialAlignVerticalBottomW100;
