import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusW100'

      short_name='1kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-406h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Zm-224 30h28v-96l98 96h42L506-482l110-102h-40l-100 94v-94h-28v208Zm-124 0h28v-208h-88v28h60v180ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial1kPlusW100.displayName = 'OnesyIconMaterial1kPlusW100';

export default IconMaterial1kPlusW100;
