import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColorsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOffW100'

      short_name='InvertColorsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M670-622q40 39 59 88t19 100q0 8-.5 17.5T745-398q-2 12-10.5 18.5T715-373q-6 0-12.5-2.5T691-383L498-576q-8-8-13-19.5t-5-23.5v-150l-79 78q-4 4-10 4t-10-4q-5-5-5-10t5-10l68-66q7-7 15-10t16-3q8 0 16.5 3t15.5 10l158 155ZM480-172q-112 0-190-75t-78-187q0-49 18-98t64-94L174-746q-4-4-4.5-9.5T174-766q5-5 10-5t10 5l608 608q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L670-250q-41 42-90.5 60T480-172Zm0-28v-240L314-606q-43 42-58.5 84.5T240-434q0 100 70 167t170 67Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOffW100.displayName = 'OnesyIconMaterialInvertColorsOffW100';

export default IconMaterialInvertColorsOffW100;
