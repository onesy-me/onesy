import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneInTalk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalk'

      short_name='PhoneInTalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-480q-16 0-28.5-11.5T757-520q-13-93-78.5-158.5T520-757q-17-2-28.5-14T480-800q0-17 12-28.5t28-9.5q126 14 215 103t103 215q2 16-9.5 28T800-480Zm-167 0q-13 0-23-9t-15-24q-8-29-30.5-51.5T513-595q-15-5-24-15t-9-24q0-20 14-32.5t31-8.5q56 13 96.5 53.5T675-525q4 17-9 31t-33 14Zm165 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalk.displayName = 'OnesyIconMaterialPhoneInTalk';

export default IconMaterialPhoneInTalk;
