import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulb2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lightbulb2W100'

      short_name='Lightbulb2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M359-260v-146q-50-32-78.5-83T252-599q0-95 66.5-162T480-828q95 0 161.5 66.5T708-600q0 60-28.5 111T601-406v146H359Zm28-28h186v-133l21-15q40-29 63-72t23-92q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 23 92t63 72l21 15v133Zm8 156v-28h170v28H395Zm85-468Z"/>
    </Icon>
  );
});

IconMaterialLightbulb2W100.displayName = 'OnesyIconMaterialLightbulb2W100';

export default IconMaterialLightbulb2W100;
