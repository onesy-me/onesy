import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChildFriendlyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyW100'

      short_name='ChildFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372.23-172q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5Zm308 0q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5ZM502-622 386-762q32-11 63-15.5t63-4.5q32 0 59.5 5.5t52.06 16.58Q632-755 634-746t-6 15L502-622Zm-22 302h154L360-652v212q0 50 35 85t85 35Zm17-166ZM149.96-702q-5.96 0-9.96-4.03-4-4.02-4-9.97 0-35.83 26.14-61.91Q188.28-804 226-804q27 0 48 15.5t48 48.5l334 402q12 14 4 30t-26 16H480q-62 0-105-43t-43-105v-246l-30-36q-24-30-42-42t-36-12q-25.71 0-42.86 17Q164-742 164-716q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyW100.displayName = 'OnesyIconMaterialChildFriendlyW100';

export default IconMaterialChildFriendlyW100;
