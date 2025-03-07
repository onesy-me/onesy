import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartCheck'

      short_name='HeartCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m718-426 113-113q12-12 28-12t28 12q12 12 12 28.5T887-482L746-341q-12 12-28.5 12T689-341l-56-57q-12-12-12-28t12-28q12-12 28-11.5t28 11.5l29 28Zm-278-75ZM313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-31 28q-11 11-27 11t-27-11l-100-90Z"/>
    </Icon>
  );
});

IconMaterialHeartCheck.displayName = 'OnesyIconMaterialHeartCheck';

export default IconMaterialHeartCheck;
