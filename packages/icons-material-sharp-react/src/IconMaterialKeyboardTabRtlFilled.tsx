import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlFilled'

      short_name='KeyboardTabRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240H80v-480h80v480Zm320 0L240-480l240-240 56 56-143 144h487v80H393l144 144-57 56Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlFilled.displayName = 'OnesyIconMaterialKeyboardTabRtlFilled';

export default IconMaterialKeyboardTabRtlFilled;
