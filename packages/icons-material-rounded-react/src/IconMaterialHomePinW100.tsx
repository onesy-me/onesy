import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomePinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinW100'

      short_name='HomePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-458h64v-90h64v90h64v-154l-96-64-96 64v154Zm96 289q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 22q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-7 6-15.5 9t-16.5 3Zm0-407Z"/>
    </Icon>
  );
});

IconMaterialHomePinW100.displayName = 'OnesyIconMaterialHomePinW100';

export default IconMaterialHomePinW100;
