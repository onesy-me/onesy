import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitnessCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterW100'

      short_name='FitnessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-658 155-531q-6 6-15 6t-15-6q-6-6-6-15t6-15l43-43-9-9q-9-9-9-21t9-21l63-63-46-46q-4-4-4.5-9.5T176-784q5-5 10-5t10 5l46 46 63-63q9-9 21-9t21 9l9 9 43-43q6-6 15-6t15 6q6 6 6 15t-6 15L302-678l376 376 127-127q6-6 15-6t15 6q6 6 6 15t-6 15l-43 43 9 9q9 9 9 21t-9 21l-63 63 46 46q4 4 4.5 9.5T784-176q-5 5-10 5t-10-5l-46-46-63 63q-9 9-21 9t-21-9l-9-9-43 43q-6 6-15 6t-15-6q-6-6-6-15t6-15l127-127-376-376Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterW100.displayName = 'OnesyIconMaterialFitnessCenterW100';

export default IconMaterialFitnessCenterW100;
