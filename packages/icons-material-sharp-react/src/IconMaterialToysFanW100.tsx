import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToysFanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFanW100'

      short_name='ToysFan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q0-72 52-124t124-52q72 0 124 52t52 124H480ZM304-304q-72 0-124-52t-52-124h352q0 72-52 124t-124 52Zm176-176q-72 0-124-52t-52-124q0-72 52-124t124-52v352Zm0 352v-352q72 0 124 52t52 124q0 72-52 124t-124 52Z"/>
    </Icon>
  );
});

IconMaterialToysFanW100.displayName = 'OnesyIconMaterialToysFanW100';

export default IconMaterialToysFanW100;
