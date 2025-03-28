import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCirclesExtFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesExtFilled'

      short_name='CirclesExt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm480 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM480-364q-32 0-54-22t-22-54q0-32 22-54t54-22q32 0 54 22t22 54q0 32-22 54t-54 22Zm0-196q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialCirclesExtFilled.displayName = 'OnesyIconMaterialCirclesExtFilled';

export default IconMaterialCirclesExtFilled;
