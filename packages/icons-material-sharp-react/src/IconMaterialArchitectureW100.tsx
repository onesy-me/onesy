import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchitectureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureW100'

      short_name='Architecture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m290-176-4-28 100-276q6 5 12 7.5t12 4.5l-98 272-22 20Zm380 0-22-20-98-272q6-2 12-4.5t12-7.5l100 276-4 28ZM480-546q-39 0-66.5-27.5T386-640q0-39 25-64t55-28v-108h28v108q30 3 55 28t25 64q0 39-27.5 66.5T480-546Zm0-28q27 0 46.5-19.5T546-640q0-27-19.5-46.5T480-706q-27 0-46.5 19.5T414-640q0 27 19.5 46.5T480-574Z"/>
    </Icon>
  );
});

IconMaterialArchitectureW100.displayName = 'OnesyIconMaterialArchitectureW100';

export default IconMaterialArchitectureW100;
