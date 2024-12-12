import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenW100'

      short_name='TvGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-200v-52h-60v-496h696v496h-60v52h-14l-19-52H227l-21 52h-14Zm-32-80h640v-440H160v440Zm320-220Z"/>
    </Icon>
  );
});

IconMaterialTvGenW100.displayName = 'OnesyIconMaterialTvGenW100';

export default IconMaterialTvGenW100;
