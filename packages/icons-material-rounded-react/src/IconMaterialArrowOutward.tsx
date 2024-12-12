import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutward'

      short_name='ArrowOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z"/>
    </Icon>
  );
});

IconMaterialArrowOutward.displayName = 'OnesyIconMaterialArrowOutward';

export default IconMaterialArrowOutward;
