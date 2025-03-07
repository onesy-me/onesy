import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveW100Filled'

      short_name='Move'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-291q-5 0-7.5-3t-4.25-7.13Q416-330 400.67-351.85 385.33-373.71 370-394q-21-28-37.5-56T316-520q0-51.37 36.31-87.69Q388.63-644 440-644t87.69 36.31Q564-571.37 564-520q0 42-16.5 70T510-394q-15.33 20.29-30.67 42.15Q464-330 452-301q-2 5-4.5 7.5T440-291Zm.14-189q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5ZM440-172q-128.33 0-218.17-89.79Q132-351.59 132-479.86 132-544 156-600t66-98q42-42 97.94-66 55.95-24 120-24Q504-788 560-764t98 66q42 42 66 97.96 24 55.96 24 120.04v71l90-91 20 19-124 124-124-124 20-19 90 90v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440-200q56 0 102.5-19.5T629-274l21 20q-44 39-98 60.5T440-172Z"/>
    </Icon>
  );
});

IconMaterialMoveW100Filled.displayName = 'OnesyIconMaterialMoveW100Filled';

export default IconMaterialMoveW100Filled;
