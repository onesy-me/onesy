import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell4Bar'

      short_name='AndroidCell4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M60-220v-200q0-25 17.5-42.5T120-480q25 0 42.5 17.5T180-420v200q0 25-17.5 42.5T120-160q-25 0-42.5-17.5T60-220Zm240 0v-300q0-25 17.5-42.5T360-580q25 0 42.5 17.5T420-520v300q0 25-17.5 42.5T360-160q-25 0-42.5-17.5T300-220Zm240 0v-400q0-25 17.5-42.5T600-680q25 0 42.5 17.5T660-620v400q0 25-17.5 42.5T600-160q-25 0-42.5-17.5T540-220Zm240 0v-520q0-25 17.5-42.5T840-800q25 0 42.5 17.5T900-740v520q0 25-17.5 42.5T840-160q-25 0-42.5-17.5T780-220Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell4Bar.displayName = 'OnesyIconMaterialAndroidCell4Bar';

export default IconMaterialAndroidCell4Bar;
