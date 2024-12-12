import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputW100'

      short_name='PowerInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-386v-28h151v28H132Zm0-160v-28h656v28H132Zm251 160v-28h154v28H383Zm254 0v-28h151v28H637Z"/>
    </Icon>
  );
});

IconMaterialPowerInputW100.displayName = 'OnesyIconMaterialPowerInputW100';

export default IconMaterialPowerInputW100;
