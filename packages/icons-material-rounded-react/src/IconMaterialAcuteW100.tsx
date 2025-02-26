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
      <path d="M590.43-212q-112.4 0-190.42-78.01Q322-368.03 322-480.43 322-592 400.01-670q78.02-78 190.42-78Q702-748 780-670t78 189.57q0 112.4-78 190.42Q702-212 590.43-212Zm-.43-28q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm14-245v-125q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v124q0 5.57 2 10.78 2 5.22 7.26 10.53L681-368q4 5 9.5 5t10.5-5q5-5 5-10t-5-10l-97-97ZM156-626q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h112q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H156Zm-40 160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h152q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H116Zm40 160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h112q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H156Zm434-174Z"/>
    </Icon>
  );
});

IconMaterialAcuteW100.displayName = 'OnesyIconMaterialAcuteW100';

export default IconMaterialAcuteW100;
