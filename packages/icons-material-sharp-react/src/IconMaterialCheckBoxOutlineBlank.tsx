import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxOutlineBlank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlank'

      short_name='CheckBoxOutlineBlank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlank.displayName = 'OnesyIconMaterialCheckBoxOutlineBlank';

export default IconMaterialCheckBoxOutlineBlank;
