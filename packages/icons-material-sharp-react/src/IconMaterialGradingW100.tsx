import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingW100'

      short_name='Grading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m633-172-77-77 19-19 57 57 136-136 20 20-155 155Zm-461 0v-28h308v28H172Zm0-147v-28h308v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Zm0-147v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialGradingW100.displayName = 'OnesyIconMaterialGradingW100';

export default IconMaterialGradingW100;
