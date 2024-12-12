import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-296-180 77q-10 4-18.5 1.5T267-226q-6-6-8.5-14.76-2.5-8.75 2.5-18.24l192-431q3.65-9 11.3-13.5 7.66-4.5 15.68-4.5t15.69 4.5Q503.35-699 507-690l192 431q5 9.49 2.5 18.24Q699-232 693-226t-14.5 8.5Q670-215 660-219l-180-77Zm-196 52 196-84 196 84-196-440-196 440Zm196-84Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100.displayName = 'OnesyIconMaterialNavigationW100';

export default IconMaterialNavigationW100;
