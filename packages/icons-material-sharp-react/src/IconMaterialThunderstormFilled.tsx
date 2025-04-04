import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThunderstormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormFilled'

      short_name='Thunderstorm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m462 0 94-107-80-40 116-133h106l-94 107 80 40L568 0H462ZM222 0l94-107-80-40 116-133h106l-94 107 80 40L328 0H222Zm78-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialThunderstormFilled.displayName = 'OnesyIconMaterialThunderstormFilled';

export default IconMaterialThunderstormFilled;
