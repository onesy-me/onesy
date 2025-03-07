import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMountainFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagW100Filled'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m313-435 39-80q8-15 22.5-24t31.5-9h60v-250q0-13 8.5-21.5T496-828h158q8 0 12.5 7t.5 15l-13 25q-2 3-2 7t2 7l13 25q4 8-.5 15t-12.5 7H494v172h57q17 0 31.5 9t22.5 24l40 82-86 57-79-40-79 40-88-59Zm-53 303q-33 0-50.5-28.5T207-219l94-191 98 66 81-40 81 40 97-64 95 189q15 30-2.5 58.5T699-132H260Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagW100Filled.displayName = 'OnesyIconMaterialMountainFlagW100Filled';

export default IconMaterialMountainFlagW100Filled;
