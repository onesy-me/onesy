import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVert'

      short_name='SwapVert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440q-17 0-28.5-11.5T320-480v-247l-75 75q-11 11-27.5 11T189-652q-12-12-12-28.5t12-28.5l143-143q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q12 12 11.5 28T531-652q-12 11-28 11.5T475-652l-75-75v247q0 17-11.5 28.5T360-440ZM600-97q-8 0-15-2.5t-13-8.5L428-252q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l75 75v-247q0-17 11.5-28.5T600-520q17 0 28.5 11.5T640-480v247l75-75q11-11 27.5-11t28.5 11q12 12 12 28.5T771-251L628-108q-6 6-13 8.5T600-97Z"/>
    </Icon>
  );
});

IconMaterialSwapVert.displayName = 'OnesyIconMaterialSwapVert';

export default IconMaterialSwapVert;
