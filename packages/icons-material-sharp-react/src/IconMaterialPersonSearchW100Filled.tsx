import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchW100Filled'

      short_name='PersonSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-512q-44.55 0-76.27-31.72Q332-575.45 332-620t31.73-76.28Q395.45-728 440-728t76.28 31.72Q548-664.55 548-620t-31.72 76.28Q484.55-512 440-512Zm398 410L738-202q-19 14-39 20t-38.79 6Q608-176 572-212.24q-36-36.23-36-88Q536-352 572.24-388q36.23-36 88-36Q712-424 748-387.83q36 36.16 36 87.83 0 19-6 39t-20 39l100 100-20 20ZM660-204q41 0 68.5-27.5T756-300q0-41-27.5-68.5T660-396q-41 0-68.5 27.5T564-300q0 41 27.5 68.5T660-204ZM485-406q-21 43-27 86t9 88H172v-52q0-23 13.5-41.5T222-356q41-20 111.5-39T485-406Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchW100Filled.displayName = 'OnesyIconMaterialPersonSearchW100Filled';

export default IconMaterialPersonSearchW100Filled;
