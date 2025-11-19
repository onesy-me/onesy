import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpW100'

      short_name='ArrowShapeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-172v-230H172l308-346 308 346H612v230H348Zm28-28h208v-230h141L480-706 235-430h141v230Zm104-230Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpW100.displayName = 'OnesyIconMaterialArrowShapeUpW100';

export default IconMaterialArrowShapeUpW100;
