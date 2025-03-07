import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrongLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100Filled'

      short_name='WrongLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-494q25 0 42.5-17.5T540-554q0-25-17.5-42.5T480-614q-25 0-42.5 17.5T420-554q0 25 17.5 42.5T480-494Zm0-334q8 0 13.5.5t14.5.5l73 73-18 18q-28 28-27.5 66t28.5 66q28 28 66.5 28t66.5-28l17-17 39 39v35q0 79-60.5 176T512-160q-7 6-15.5 9t-16.5 3q-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T207-547q0-120 78.5-200.5T480-828Zm234 94-74 74q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l74-74-74-74q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l74 74 74-74q5-5 10-5t10 5q5 5 4.5 10.5T808-828l-74 74 74 74q5 5 5 10t-5 10q-5 5-10.5 4.5T788-660l-74-74Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100Filled.displayName = 'OnesyIconMaterialWrongLocationW100Filled';

export default IconMaterialWrongLocationW100Filled;
