import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveW100'

      short_name='Move'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-291q-5 0-7.5-3t-4.25-7.13Q416-330 400.67-351.85 385.33-373.71 370-394q-21-28-37.5-56T316-520q0-51.37 36.31-87.69Q388.63-644 440-644t87.69 36.31Q564-571.37 564-520q0 42-16.5 70T510-394q-15.33 20.29-30.67 42.15Q464-330 452-301q-2 5-4.5 7.5T440-291Zm0-51q17-27 28.5-42.5T488-411q25-32 36.5-54t11.5-55q0-39.6-28.2-67.8Q479.6-616 440-616q-39.6 0-67.8 28.2Q344-559.6 344-520q0 33 11.5 55t36.5 54q13 17 25 34t23 35Zm.14-138q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5Zm-.14-40Zm.09 348q-128.37 0-218.23-89.79Q132-351.59 132-479.86 132-544 156-600t66-98q42-42 97.94-66 55.95-24 120-24Q504-788 560-764t98 66q42 42 66 97.96 24 55.96 24 120.04v71l81-81q4-4 9.5-4.5t9.5 3.5q5 4 4.5 10t-4.5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l80 80v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440-200q51 0 94.5-16.5T616-263q5-4 11-4.5t11 4.5q5 4.17 5 10.09 0 5.91-5 9.91-41.92 33.63-92.96 52.32Q494-172 440.09-172Z"/>
    </Icon>
  );
});

IconMaterialMoveW100.displayName = 'OnesyIconMaterialMoveW100';

export default IconMaterialMoveW100;
