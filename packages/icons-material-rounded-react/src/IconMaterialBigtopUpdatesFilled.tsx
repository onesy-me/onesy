import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBigtopUpdatesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BigtopUpdatesFilled'

      short_name='BigtopUpdates'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-560q0 58 19.5 111t55.5 98q9 11 9 25t-10 24q-10 10-24.5 9.5T174-304q-45-54-69.5-119.5T80-560q0-71 24.5-136.5T174-816q9-11 23.5-11.5T222-818q10 10 10 24t-9 25q-36 45-55.5 98T148-560Zm132 0q0 32 9 61t27 55q8 11 8 25.5T314-394q-10 10-24 10t-22-11q-27-35-41.5-77.5T212-560q0-45 14.5-87.5T268-725q8-11 22-11t24 10q10 10 10 24.5t-8 25.5q-18 26-27 55t-9 61Zm160 400v-308q-27-12-43.5-37T380-560q0-42 29-71t71-29q42 0 71 29t29 71q0 30-16.5 55T520-468v308q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Zm240-400q0-32-9-61t-27-55q-8-11-8-25.5t10-24.5q10-10 24-10t22 11q27 35 41.5 77.5T748-560q0 45-14.5 87.5T692-395q-8 11-22 11t-24-10q-10-10-10-24.5t8-25.5q18-26 27-55t9-61Zm132 0q0-58-19.5-111T737-769q-9-11-9-25t10-24q10-10 24.5-9.5T786-816q45 54 69.5 119.5T880-560q0 71-24.5 136.5T786-304q-9 11-23.5 11.5T738-302q-10-10-10-24t9-25q36-45 55.5-98T812-560Z"/>
    </Icon>
  );
});

IconMaterialBigtopUpdatesFilled.displayName = 'OnesyIconMaterialBigtopUpdatesFilled';

export default IconMaterialBigtopUpdatesFilled;
