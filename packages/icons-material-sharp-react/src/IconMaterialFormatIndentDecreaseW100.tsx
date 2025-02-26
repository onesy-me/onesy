import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatIndentDecreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseW100'

      short_name='FormatIndentDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm320-147v-28h296v28H492Zm0-147v-28h296v28H492Zm0-147v-28h296v28H492ZM172-760v-28h616v28H172Zm98 378-98-98 98-98v196Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecreaseW100.displayName = 'OnesyIconMaterialFormatIndentDecreaseW100';

export default IconMaterialFormatIndentDecreaseW100;
