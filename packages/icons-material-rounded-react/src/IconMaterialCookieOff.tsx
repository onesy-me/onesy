import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOff'

      short_name='CookieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-642q-2 44 24.5 78t64.5 39q13 2 22 11.5t9 22.5q0 46-9 90.5T844-314q-7 15-23 19.5t-30-3.5q-14-8-18.5-24t2.5-32q11-24 17-50t8-54q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-37-2-69.5 5T352-776q-15 7-31 2.5T297-792q-8-14-4.5-29t18.5-22q48-21 99.5-28.5T513-879q19 0 33 12t14 31q0 61 48 110.5T719-682q17-2 29.5 10.5T760-642ZM340-360q-25 0-42.5-17.5T280-420q0-25 17.5-42.5T340-480q25 0 42.5 17.5T400-420q0 25-17.5 42.5T340-360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-91-91q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-90-89q-48 32-103.5 49T480-80Zm0-80q45 0 85.5-12t76.5-33L205-642q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm-56-264Zm135-137Z"/>
    </Icon>
  );
});

IconMaterialCookieOff.displayName = 'OnesyIconMaterialCookieOff';

export default IconMaterialCookieOff;
