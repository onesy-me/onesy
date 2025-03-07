import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRotate90DegreesCcwFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcwFilled'

      short_name='Rotate90DegreesCcw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80q-37 0-72.5-7.5T378-109q-15-6-20-21.5t1-30.5q6-15 21-21.5t30 .5q26 11 53.5 16.5T520-160q117 0 198.5-81.5T800-440q0-117-82-198.5T519-720h-7l36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L388-732q-5-5-8-12.5t-3-15.5q0-8 3-15.5t8-12.5l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h7q150 0 255.5 105T880-440q0 150-105 255T520-80ZM280-217q-8 0-15-2.5t-13-8.5L68-412q-6-6-8.5-13T57-440q0-8 2.5-15t8.5-13l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L308-228q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwFilled.displayName = 'OnesyIconMaterialRotate90DegreesCcwFilled';

export default IconMaterialRotate90DegreesCcwFilled;
