import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyFilled'

      short_name='ContentCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-640h520v640H280ZM120-80v-640h80v560h440v80H120Z"/>
    </Icon>
  );
});

IconMaterialContentCopyFilled.displayName = 'OnesyIconMaterialContentCopyFilled';

export default IconMaterialContentCopyFilled;
