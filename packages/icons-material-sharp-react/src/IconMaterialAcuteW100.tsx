import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAcuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteW100'

      short_name='Acute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M590.43-212q-112.4 0-190.42-78.01Q322-368.03 322-480.43 322-592 400.01-670q78.02-78 190.42-78Q702-748 780-670t78 189.57q0 112.4-78 190.42Q702-212 590.43-212Zm-.43-28q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm101-118 20-20-107-107v-139h-28v150l115 116ZM142-626v-28h140v28H142Zm-40 160v-28h180v28H102Zm40 160v-28h140v28H142Zm448-174Z"/>
    </Icon>
  );
});

IconMaterialAcuteW100.displayName = 'OnesyIconMaterialAcuteW100';

export default IconMaterialAcuteW100;
