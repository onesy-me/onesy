import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2kW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kW100'

      short_name='2k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-234 0h148v-28H308v-62h120v-118H280v28h120v62H280v118ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial2kW100.displayName = 'OnesyIconMaterial2kW100';

export default IconMaterial2kW100;
