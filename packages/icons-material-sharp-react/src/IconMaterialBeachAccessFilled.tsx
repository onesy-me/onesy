import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeachAccessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessFilled'

      short_name='BeachAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M786-120 532-374l56-56 254 254-56 56Zm-546-28q-100-98-117.5-230T168-625q3 34 17 76.5t38.5 89.5q24.5 47 58.5 96.5t75 97.5L240-148Zm172-172q-48-48-84-104.5T271.5-534q-20.5-53-23-96.5T267-695q21-22 64.5-20t97 22.5q53.5 20.5 110 57T643-551L412-320Zm286-286q-47-41-96.5-74t-96-58q-46.5-25-89-39.5T340-795q115-60 246.5-41.5T814-722L698-606Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessFilled.displayName = 'OnesyIconMaterialBeachAccessFilled';

export default IconMaterialBeachAccessFilled;
