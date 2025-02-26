import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusW100'

      short_name='4kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-406h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Zm-205 30h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm-111 0h28v-60h52v-28h-52v-120h-28v120h-80v-120h-28v148h108v60ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial4kPlusW100.displayName = 'OnesyIconMaterial4kPlusW100';

export default IconMaterial4kPlusW100;
