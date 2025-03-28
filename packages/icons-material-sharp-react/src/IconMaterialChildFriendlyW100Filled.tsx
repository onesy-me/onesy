import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChildFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyW100Filled'

      short_name='ChildFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372.23-172q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5Zm308 0q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5ZM502-622 386-762q32-11 63-15.5t63-4.5q39 0 73 8.5t63 25.5L502-622ZM332-292v-394l-30-36q-24-30-42-42t-36-12q-25.71 0-42.86 17Q164-742 164-716h-28q0-35.83 26.14-61.91Q188.28-804 226-804q27 0 48 15.5t48 48.5l372 448H332Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyW100Filled.displayName = 'OnesyIconMaterialChildFriendlyW100Filled';

export default IconMaterialChildFriendlyW100Filled;
