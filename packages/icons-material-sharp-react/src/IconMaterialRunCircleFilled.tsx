import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleFilled'

      short_name='RunCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-240v-143l-45-49-21 106-150-31 8-39 111 23 39-196-62 23v66h-40v-94l131-48q15-5 29.5 1t21.5 20q25 51 55.5 66t42.5 15v40q-21 0-55-16.5T524-550l-17 94 53 57v159h-40Zm20-400q-17 0-28.5-11.5T500-680q0-17 11.5-28.5T540-720q17 0 28.5 11.5T580-680q0 17-11.5 28.5T540-640ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialRunCircleFilled.displayName = 'OnesyIconMaterialRunCircleFilled';

export default IconMaterialRunCircleFilled;
