import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kPlusW100'

      short_name='5kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-406h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Zm-205 30h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm-207 0h148v-118H288v-62h120v-28H260v118h120v62H260v28Zm-88 204v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial5kPlusW100.displayName = 'OnesyIconMaterial5kPlusW100';

export default IconMaterial5kPlusW100;
