import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsMotorsportsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMotorsportsFilled'

      short_name='SportsMotorsports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M83-182v-13q0-47 1.5-82.5T89-341h314q69 0 117.5-49T569-510q0-51-28.5-92.5T464-664l-134-53q54-30 113.5-45.5T567-778q128 0 219 86.5T877-480q0 125-86.5 211.5T579-182H83Zm19-238q20-71 59-133.5T254-664l180 73q26 11 41 33t15 48q0 38-25.5 64T401-420H102Z"/>
    </Icon>
  );
});

IconMaterialSportsMotorsportsFilled.displayName = 'OnesyIconMaterialSportsMotorsportsFilled';

export default IconMaterialSportsMotorsportsFilled;
