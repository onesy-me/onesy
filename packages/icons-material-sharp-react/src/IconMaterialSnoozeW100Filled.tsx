import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnoozeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeW100Filled'

      short_name='Snooze'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-336h168v-28H432l132-148v-32H396v28h134L396-366v30Zm84 204q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM240-810l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20Z"/>
    </Icon>
  );
});

IconMaterialSnoozeW100Filled.displayName = 'OnesyIconMaterialSnoozeW100Filled';

export default IconMaterialSnoozeW100Filled;
