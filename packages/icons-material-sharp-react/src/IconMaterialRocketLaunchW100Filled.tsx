import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketLaunchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchW100Filled'

      short_name='RocketLaunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m163-500 138-138q11-11 25-15.5t29-1.5l58 12q-42 52-69.5 94T288-447l-125-53Zm153 57q27-57 62.5-109.5T458-649q71-71 151.5-106.5T793-789q2 103-33.5 183.5T653-454q-44 44-96.5 79T447-313L316-443Zm238-108q16 16 38.5 16t38.5-16q16-16 16-38t-16-38q-16-16-38.5-16T554-627q-16 16-16 38t16 38Zm-52 392-53-125q60-28 102-56t94-70l12 58q3 15-1 29t-15 25L502-159ZM219-313q20-20 48.5-19.5T316-312q20 20 20 48.5T316-215q-19 19-60 32.5T169-166q3-46 17-87t33-60Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchW100Filled.displayName = 'OnesyIconMaterialRocketLaunchW100Filled';

export default IconMaterialRocketLaunchW100Filled;
