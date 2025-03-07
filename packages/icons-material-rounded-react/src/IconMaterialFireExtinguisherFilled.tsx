import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireExtinguisherFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisherFilled'

      short_name='FireExtinguisher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80q-33 0-56.5-23.5T280-160v-40h400v40q0 33-23.5 56.5T600-80H360Zm-80-160v-200h400v200H280Zm4-240q10-46 42-86.5t81-59.5q-10-8-18-17.5T375-664l-129-27q-12-2-18-10.5t-6-18.5q0-10 6-18.5t18-10.5l129-27q15-29 42.5-46.5T480-840q21 0 40 7t34 19l78-16q19-4 33.5 8t14.5 31v142q0 19-14.5 31t-33.5 8l-79-16q47 19 79.5 57.5T676-480H284Zm196-200q17 0 28.5-11.5T520-720q-1-18-12-29t-28-11q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Z"/>
    </Icon>
  );
});

IconMaterialFireExtinguisherFilled.displayName = 'OnesyIconMaterialFireExtinguisherFilled';

export default IconMaterialFireExtinguisherFilled;
