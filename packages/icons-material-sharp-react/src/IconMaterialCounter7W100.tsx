import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter7W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter7W100'

      short_name='Counter7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-306h30l80-317v-31H386v28h158l-80 320Zm16.17 174q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialCounter7W100.displayName = 'OnesyIconMaterialCounter7W100';

export default IconMaterialCounter7W100;
