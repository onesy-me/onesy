import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneCallback = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallback'

      short_name='PhoneCallback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M656-600h64q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520H560q-17 0-28.5-11.5T520-560v-160q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720v64l172-172q11-11 28-11t28 11q11 11 11 28t-11 28L656-600Zm142 480q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallback.displayName = 'OnesyIconMaterialPhoneCallback';

export default IconMaterialPhoneCallback;
