import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxOutlineBlankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlankW100'

      short_name='CheckBoxOutlineBlank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlankW100.displayName = 'OnesyIconMaterialCheckBoxOutlineBlankW100';

export default IconMaterialCheckBoxOutlineBlankW100;
