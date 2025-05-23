import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFilled'

      short_name='Width'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m273-440 35 37q11 11 11 27.5T308-348q-12 12-28.5 12T252-348L148-451q-6-6-9-13.5t-3-15.5q0-8 3-15t9-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T308-555l-35 35h414l-36-36q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l103 104q6 6 9 13t3 15q0 8-3 15.5t-9 13.5L707-347q-11 11-27.5 11T651-348q-11-11-11-27.5t11-27.5l36-37H273Z"/>
    </Icon>
  );
});

IconMaterialWidthFilled.displayName = 'OnesyIconMaterialWidthFilled';

export default IconMaterialWidthFilled;
