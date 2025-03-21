import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100'

      short_name='Token'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-119q-8 0-15-1.5t-14-5.5L177-278q-14-8-22.5-21.5T146-330v-300q0-17 8.5-30.5T177-682l274-152q7-4 14-5.5t15-1.5q8 0 15 1.5t14 5.5l274 152q14 8 22.5 21.5T814-630v300q0 17-8.5 30.5T783-278L509-126q-7 4-14 5.5t-15 1.5ZM369-558q23-29 52-42.5t59-13.5q31 0 59.5 13.5T591-558l178-99-273-152q-8-4-16-4t-16 4L191-657l178 99Zm97 408v-195q-52-8-86-45.5T346-480q0-14 2.5-26t7.5-26L174-634v303q0 9 4 16t12 12l276 153Zm14-224q44 0 75-31t31-75q0-44-31-75t-75-31q-44 0-75 31t-31 75q0 44 31 75t75 31Zm14 224 276-153q8-5 12-12t4-16v-303L604-532q5 15 7.5 26.5T614-480q0 52-34 89.5T494-345v195Z"/>
    </Icon>
  );
});

IconMaterialTokenW100.displayName = 'OnesyIconMaterialTokenW100';

export default IconMaterialTokenW100;
