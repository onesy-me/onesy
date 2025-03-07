import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTimeActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveW100'

      short_name='QuietTimeActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-271q-5 5-10.5 5t-10.28-4.78Q742-276 742-281.5q0-5.5 5-10.5 23-19 41-40.5t32-47.5q-85-8-160.5-43.5T521-522q-63-63-99-139t-43-160q-26 14-47.5 32T291-748q-5 5-10 5t-10-5q-5-5-5-10t5-10q20-23 44.5-43t51.5-36q14-8 27-1t15 22q8 82 41.5 155T541-541q55 56 128 89t155 41q16 2 23 16t-1 28q-19 31-38.5 54.5T768-271Zm0 152-95-95q-33 14-66.67 20.5Q572.67-187 539-187q-73.09 0-137.05-27.5Q338-242 290-290t-75.5-111.95Q187-465.91 187-539q0-33.67 6.5-67.33Q200-640 214-673l-94-94q-4-4.17-4-10.09 0-5.91 4-9.91 5-5 10-5t10 5l648 648q5 5 5 10t-5 10q-5 5-10 5t-10-5Zm-229-96q29.49 0 58.25-5Q626-225 652-235L235-652q-10 29-15 57.24-5 28.24-5 55.76 0 135 94.5 229.5T539-215Zm-96-229Zm78-78Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveW100.displayName = 'OnesyIconMaterialQuietTimeActiveW100';

export default IconMaterialQuietTimeActiveW100;
