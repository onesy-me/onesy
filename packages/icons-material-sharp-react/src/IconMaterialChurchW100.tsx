import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChurchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchW100'

      short_name='Church'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-106v-282l160-71v-133l200-101v-101h-80v-28h80v-80h28v80h80v28h-80v101l200 101v133l160 71v282H546v-204H414v204H106Zm28-28h252v-204h188v204h252v-235l-160-71.65V-574l-186-95-186 95v133.35L134-369v235Zm346.24-306q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm-.24 38Z"/>
    </Icon>
  );
});

IconMaterialChurchW100.displayName = 'OnesyIconMaterialChurchW100';

export default IconMaterialChurchW100;
