import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltRouteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRouteFilled'

      short_name='AltRoute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-160q0-56-17-83t-45-53l57-57q12 11 23 23.5t22 26.5q14-19 28.5-33.5T538-485q38-35 69-81t33-161l-35 35q-11 11-27.5 11T549-692q-12-12-12-28.5t12-28.5l103-103q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T812-692q-11 11-28 11t-28-11l-36-35q-2 143-44 203.5T592-425q-32 29-52 56.5T520-280v160q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120ZM248-633q-4-20-5.5-44t-2.5-50l-36 36q-11 11-27.5 11T148-692q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q12 12 11.5 28T411-692q-12 11-28 11t-28-11l-35-34q0 21 2 39.5t4 34.5l-78 19Zm86 176q-20-21-38.5-49T263-575l77-19q10 27 23 46t28 34l-57 57Z"/>
    </Icon>
  );
});

IconMaterialAltRouteFilled.displayName = 'OnesyIconMaterialAltRouteFilled';

export default IconMaterialAltRouteFilled;
