import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kPlusW100Filled'

      short_name='3kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M672-406h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Zm-205 30h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm-207 0h148v-208H260v28h120v62h-80v28h80v62H260v28Zm-88 204v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial3kPlusW100Filled.displayName = 'OnesyIconMaterial3kPlusW100Filled';

export default IconMaterial3kPlusW100Filled;
