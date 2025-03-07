import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAlt'

      short_name='PanToolAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M398-120q-27 0-51.5-11.5T305-164L69-455q-10-12-9-27t12-26q19-19 45-22t47 12l116 81v-403q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v480q0 24-21.5 35.5T297-327l-48-34 118 146q6 7 14 11t17 4h282q33 0 56.5-23.5T760-280v-280q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560v280q0 66-47 113t-113 47H398Zm107-240Zm-25-360q17 0 28.5 11.5T520-680v200q0 17-11.5 28.5T480-440q-17 0-28.5-11.5T440-480v-200q0-17 11.5-28.5T480-720Zm160 40q17 0 28.5 11.5T680-640v160q0 17-11.5 28.5T640-440q-17 0-28.5-11.5T600-480v-160q0-17 11.5-28.5T640-680Z"/>
    </Icon>
  );
});

IconMaterialPanToolAlt.displayName = 'OnesyIconMaterialPanToolAlt';

export default IconMaterialPanToolAlt;
