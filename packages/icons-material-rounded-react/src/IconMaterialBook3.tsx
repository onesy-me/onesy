import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBook3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book3'

      short_name='Book3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h420q33 0 56.5 23.5T800-800v481q0 16-8 29t-22 20q-14 7-22 20.5t-8 29.5q0 16 8 30t22 20q13 5 21.5 15t8.5 24v10q0 17-11.5 29T760-80H300Zm-60-267q14-7 29-10t31-3h420v-440H300q-25 0-42.5 17.5T240-740v393Zm183-164h113l20 56q2 7 7.5 11t13.5 4q12 0 19-10t2-21l-88-234q-2-7-8-11t-14-4h-18q-8 0-14 4t-8 11l-88 235q-5 11 2.5 20.5T382-440q8 0 13.5-4t7.5-11l20-56Zm14-41 41-116h3l41 116h-85ZM240-347v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialBook3.displayName = 'OnesyIconMaterialBook3';

export default IconMaterialBook3;
