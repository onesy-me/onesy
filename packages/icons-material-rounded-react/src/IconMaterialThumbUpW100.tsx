import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpW100'

      short_name='ThumbUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M808-588q23 0 41.5 18.5T868-528v40q0 5.17-1 11.09-1 5.91-3 10.91L757.95-213.88Q750-196 731-184t-39.37 12H302v-416l221-219q7-7 15-9t15 2q7 4 10 12t1 17l-40 197h284Zm-478 12v376h362q11 0 22.5-6t17.5-20l108-254v-48q0-14-9-23t-23-9H490l44-218-204 202ZM192-172q-24.75 0-42.37-17.63Q132-207.25 132-232v-296q0-24.75 17.63-42.38Q167.25-588 192-588h110v28H192q-14 0-23 9t-9 23v296q0 14 9 23t23 9h110v28H192Zm138-28v-376 376Z"/>
    </Icon>
  );
});

IconMaterialThumbUpW100.displayName = 'OnesyIconMaterialThumbUpW100';

export default IconMaterialThumbUpW100;
