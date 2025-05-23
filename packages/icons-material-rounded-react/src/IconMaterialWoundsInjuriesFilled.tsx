import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWoundsInjuriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WoundsInjuriesFilled'

      short_name='WoundsInjuries'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m224-168-59 60q-12 12-28.5 12T108-108q-12-12-12-28.5t12-28.5l60-59-49-13q-16-5-25-19t-4-30q5-16 19-24.5t30-3.5l49 13-13-50q-5-16 3.5-30t24.5-19q16-5 30 4t19 25l14 49 137-137-49-13q-16-5-24.5-19t-3.5-30q5-16 19-25t30-4l48 13-13-49q-5-16 4-29.5t25-18.5q16-5 30 3.5t19 24.5l13 49 137-137-49-14q-16-5-25-19t-4-30q5-16 19-24.5t30-3.5l50 13-14-49q-5-16 4-30t25-19q16-5 30 4t19 25l13 49 59-60q12-12 28.5-12t28.5 12q12 12 12 28.5T852-795l-60 59 49 13q16 5 25 19t4 30q-5 16-19 24.5t-30 3.5l-49-13 13 50q5 16-3.5 30T757-560q-16 5-30-4t-19-25l-14-49-137 137 49 13q16 5 24.5 19t3.5 30q-5 16-19 25t-30 4l-48-13 13 49q5 16-4 29.5T521-326q-16 5-30-3.5T472-354l-13-49-137 137 49 14q16 5 25 19t4 30q-5 16-19 24.5t-30 3.5l-50-13 14 49q5 16-4 30t-25 19q-16 5-30-4t-19-25l-13-49Z"/>
    </Icon>
  );
});

IconMaterialWoundsInjuriesFilled.displayName = 'OnesyIconMaterialWoundsInjuriesFilled';

export default IconMaterialWoundsInjuriesFilled;
