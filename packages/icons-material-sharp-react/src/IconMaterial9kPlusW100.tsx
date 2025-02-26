import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial9kPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9kPlusW100'

      short_name='9kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-376h148v-208H260v118h120v62H260v28Zm28-118v-62h92v62h-92Zm179 118h28v-96l98 96h42L525-482l110-102h-40l-100 94v-94h-28v208Zm205-30h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial9kPlusW100.displayName = 'OnesyIconMaterial9kPlusW100';

export default IconMaterial9kPlusW100;
