import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScubaDiving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDiving'

      short_name='ScubaDiving'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m210-240 31-178q3-24 19-42.5t41-24.5l379-115 77-154q1-2 8-11l95-95q8-8 19.5-8.5T901-859q8 8 9 19.5t-7 19.5l-83 96-56 171q-2 6-6 11.5t-9 9.5L560-400l-234 74-44 120q-1 3-2.5 6t-3.5 5L184-72q-10 14-26 16t-30-8q-14-10-16-26t8-30l90-120Zm-90-120q-33 0-56.5-23.5T40-440q0-33 23.5-56.5T120-520q33 0 56.5 23.5T200-440q0 33-23.5 56.5T120-360Zm236-196q-24 7-45.5-5.5T282-598q-7-24 5.5-46t36.5-28l143-38q16-5 30 4t19 25l11 38q5 16-4 30t-25 19l-142 38Z"/>
    </Icon>
  );
});

IconMaterialScubaDiving.displayName = 'OnesyIconMaterialScubaDiving';

export default IconMaterialScubaDiving;
