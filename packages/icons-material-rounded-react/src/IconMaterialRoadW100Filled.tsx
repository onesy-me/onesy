import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoadW100Filled'

      short_name='Road'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225.96-212q-5.96 0-9.96-4.02-4-4.03-4-9.98v-508q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v508q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm254 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-84q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v84q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm254 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-508q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v508q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm-254-212q-5.96 0-9.96-4.02-4-4.03-4-9.98v-84q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v84q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm0-212q-5.96 0-9.96-4.03-4-4.02-4-9.97v-84q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v84q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialRoadW100Filled.displayName = 'OnesyIconMaterialRoadW100Filled';

export default IconMaterialRoadW100Filled;
