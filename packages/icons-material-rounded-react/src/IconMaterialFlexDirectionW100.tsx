import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexDirectionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirectionW100'

      short_name='FlexDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-242v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h240q12.75 0 21.38 8.62Q432-412.75 432-400v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H162q-12.75 0-21.37-8.63Q132-229.25 132-242Zm0-318v-157.6q0-13.4 8.63-21.9 8.62-8.5 21.37-8.5h240q12.75 0 21.38 8.62Q432-730.75 432-718v157.6q0 13.4-8.62 21.9-8.63 8.5-21.38 8.5H162q-12.75 0-21.37-8.63Q132-547.25 132-560Zm28 2h244v-162H160v162Zm504.87 334q-5.87 0-10.87-2-5-2-10-7L511-366q-4-4-3.5-9.5t4.67-9.67Q516-389 521-389t9 4l121 119v-468q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v468l121-119q3.75-3.67 9.38-3.83 5.62-.17 9.79 3.83 3.83 3.67 3.83 9.33 0 5.67-4 9.67L686-233q-5 5-10.13 7-5.14 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialFlexDirectionW100.displayName = 'OnesyIconMaterialFlexDirectionW100';

export default IconMaterialFlexDirectionW100;
