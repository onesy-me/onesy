import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslockBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeW100Filled'

      short_name='KeyboardCapslockBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M317-332h326v-28H317v28Zm19-109 144-143 144 143 19-19-163-164-163 164 19 19ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeW100Filled.displayName = 'OnesyIconMaterialKeyboardCapslockBadgeW100Filled';

export default IconMaterialKeyboardCapslockBadgeW100Filled;
