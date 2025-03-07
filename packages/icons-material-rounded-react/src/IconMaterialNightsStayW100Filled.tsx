import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightsStayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayW100Filled'

      short_name='NightsStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360q36 0 66 19.5t44 52.5l20 48h52q24 0 41 17.5t17 42.5q0 25-17.5 42.5T420-120H240q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5Zm284-84q58 58 129 89.5T805-315q8 1 14 5t10 10q4 6 4 13.5t-4 14.5q-42 83-125 130.5T529-92q15-19 23-41.5t8-46.5q0-58-40-99t-96-40q-24-55-74-88t-110-33q-17 0-34 3t-34 9v-16q0-97 47-177.5T351-748q7-4 15-3.5t14 3.5q6 3 10.5 9.5T396-724q8 81 38.5 151T524-444Z"/>
    </Icon>
  );
});

IconMaterialNightsStayW100Filled.displayName = 'OnesyIconMaterialNightsStayW100Filled';

export default IconMaterialNightsStayW100Filled;
