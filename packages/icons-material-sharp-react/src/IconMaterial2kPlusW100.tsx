import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusW100'

      short_name='2kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-406h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Zm-205 30h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm-207 0h148v-28H288v-62h120v-118H260v28h120v62H260v118Zm-88 204v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial2kPlusW100.displayName = 'OnesyIconMaterial2kPlusW100';

export default IconMaterial2kPlusW100;
