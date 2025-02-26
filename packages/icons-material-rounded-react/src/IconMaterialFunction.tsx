import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFunction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Function'

      short_name='Function'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M221-120q-45 0-73-24t-28-64q0-32 17-51.5t43-19.5q25 0 42.5 17t17.5 41q0 5-.5 9t-1.5 9q5-1 8.5-5.5T252-221l62-339h-74q-17 0-28.5-11.5T200-600q0-17 11.5-28.5T240-640h89l21-114q7-38 37.5-62t72.5-24q44 0 72 26t28 65q0 30-17 49.5T500-680q-25 0-42.5-17T440-739q0-5 .5-9t1.5-9q-6 2-9 6t-5 12l-17 99h149q17 0 28.5 11.5T600-600q0 15-9.5 26T567-561l53 60 53-60q-14-2-23.5-13t-9.5-26q0-17 11.5-28.5T680-640h120q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560h-22L673-440l105 120h22q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H680q-17 0-28.5-11.5T640-280q0-15 9.5-26t23.5-13l-53-61-53 61q14 2 23.5 13t9.5 26q0 17-11.5 28.5T560-240H440q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h22l105-120-105-120h-66l-64 344q-8 45-37 70.5T221-120Z"/>
    </Icon>
  );
});

IconMaterialFunction.displayName = 'OnesyIconMaterialFunction';

export default IconMaterialFunction;
