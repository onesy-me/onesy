import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOncologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OncologyW100Filled'

      short_name='Oncology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M654-193q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 21-7.5 40T740-233l86 86q4 4 3.5 9.5T825-128q-4 4-9 4t-9-4l-87-86q-14 10-30.5 15.5T654-193Zm0-28q35 0 60.5-25.5T740-307q0-35-25.5-60.5T654-393q-35 0-60.5 25.5T568-307q0 35 25.5 60.5T654-221ZM201-106q-13 0-21.5-8.5T171-136v-184q0-39 27.5-66.5T265-414h80q61 0 103.5-42.5T491-560q0-27-19.5-46.5T425-626q-23 0-38.5-15.5T371-680v-144q0-13 8.5-21.5T401-854h77q13 0 21.5 8.5T508-824v1l49 49q100 0 165.5 75.5T788-520v46q-29-23-62.5-35T654-521q-89 0-151.5 62.5T440-307q0 18 4 41t12 40h-82q-27 0-46.5 19.5T308-160v24q0 13-8.5 21.5T278-106h-77Z"/>
    </Icon>
  );
});

IconMaterialOncologyW100Filled.displayName = 'OnesyIconMaterialOncologyW100Filled';

export default IconMaterialOncologyW100Filled;
