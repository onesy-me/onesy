import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReorderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderW100'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M123-212q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h152v-106H163q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h112v-106h-70q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h70v-116l-62-137q-2-5 0-11t7-8q5-2 11 0t8 7l66 145h476l-68-143q-2-5 0-11t7-8q5-2 11 0t8 7l66 143q3 5.88 4.5 12.13 1.5 6.25 1.5 12.87v373q0 13-8.5 21.5T781-212H123Zm340-254h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H463q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4ZM303-240h480v-360H303v360Zm0 0v-360 360Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderW100.displayName = 'OnesyIconMaterialQuickReorderW100';

export default IconMaterialQuickReorderW100;
