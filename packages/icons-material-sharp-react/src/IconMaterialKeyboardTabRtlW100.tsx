import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlW100'

      short_name='KeyboardTabRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-266h-28v-428h28v428Zm303-11L260-480l203-203 19 19-168 170h514v28H313l170 170-20 19Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlW100.displayName = 'OnesyIconMaterialKeyboardTabRtlW100';

export default IconMaterialKeyboardTabRtlW100;
