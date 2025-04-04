import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mediation'

      short_name='Mediation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-440H518q-11 92-63 166.5T320-158q-2 50-36 84t-84 34q-50 0-85-35t-35-85q0-50 35-85t85-35q27 0 52 12.5t42 33.5q59-32 96-86t46-120H312q-12 36-43 58t-69 22q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22t43 58h124q-9-66-46-120t-96-86q-17 21-42 33.5T200-680q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 84 34t36 84q81 42 134 116t64 166h210l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L748-348q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36Z"/>
    </Icon>
  );
});

IconMaterialMediation.displayName = 'OnesyIconMaterialMediation';

export default IconMaterialMediation;
