import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlusW100Filled'

      short_name='6kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-376h148v-118H288v-62h120v-28H260v208Zm28-28v-62h92v62h-92Zm179 28h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm205-30h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial6kPlusW100Filled.displayName = 'OnesyIconMaterial6kPlusW100Filled';

export default IconMaterial6kPlusW100Filled;
