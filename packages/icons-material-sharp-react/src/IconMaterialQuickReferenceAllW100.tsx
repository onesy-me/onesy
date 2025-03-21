import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllW100'

      short_name='QuickReferenceAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-800v257-1 384-640 148-148Zm106 374h145q5-8 10-14.5t10-13.5H306v28Zm0 160h112q-1.25-7-1.62-14-.38-7-.38-14H306v28ZM172-132v-696h374l162 162v127q-7-2-14-2.5t-14-1.5v-109H532v-148H200v640h260q4.86 7.75 10.93 14.38Q477-139 483-132H172Zm488.2-52q48.8 0 82.3-33.7 33.5-33.69 33.5-82.5 0-48.8-33.7-82.3-33.69-33.5-82.5-33.5-48.8 0-82.3 33.7-33.5 33.69-33.5 82.5 0 48.8 33.7 82.3 33.69 33.5 82.5 33.5ZM864-77 752-189q-19 16-42.5 24.5T660-156q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 26-8.5 49.5T771-208L883-96l-19 19Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllW100.displayName = 'OnesyIconMaterialQuickReferenceAllW100';

export default IconMaterialQuickReferenceAllW100;
