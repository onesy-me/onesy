import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterEc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEc'

      short_name='WaterEc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400v154q0 15 14.5 19t22.5-8l142-214q7-10 1.5-20.5T603-480h-83v-154q0-15-14.5-19t-22.5 8L341-431q-7 10-1.5 20.5T357-400h83Zm40 320q-137 0-228.5-94T160-408q0-62 28-124t70-119q42-57 91-107t91-87q8-8 18.5-11.5T480-860q11 0 21.5 3.5T520-845q42 37 91 87t91 107q42 57 70 119t28 124q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialWaterEc.displayName = 'OnesyIconMaterialWaterEc';

export default IconMaterialWaterEc;
