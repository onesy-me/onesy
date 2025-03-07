import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterDrama = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDrama'

      short_name='FilterDrama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-160q-92 0-156-64T40-380q0-78 48.5-137.5T210-594q25-90 99-148t171-58q119 0 199.5 82.5T760-520q75 8 117.5 62T920-341q0 75-52.5 128T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-63 0-112 34.5T296-597q68 11 117 58.5T476-424q4 17-8.5 30.5T435-380q-14 0-24.5-9.5T396-414q-11-45-49-75.5T260-520q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialFilterDrama.displayName = 'OnesyIconMaterialFilterDrama';

export default IconMaterialFilterDrama;
