import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBombFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombFilled'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-658q-5 0-10-1t-10-4l-35-20q-14-8-30.5-3.5T570-668l-5 8 40 23q21 12 27.5 36t-5.5 45l-27 48q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48q-125 0-212.5-88.5T46-350q0-125 86.5-211.5T344-648h13l27-47q12-22 36-28.5t46 6.5l30 17 5-8q23-43 72-56t92 12l34 19q9 5 15 14.5t6 20.5q0 17-11.5 28.5T680-658Zm120 10q0-17 11.5-28.5T840-688h40q17 0 28.5 11.5T920-648q0 17-11.5 28.5T880-608h-40q-17 0-28.5-11.5T800-648ZM620-828q-17 0-28.5-11.5T580-868v-40q0-17 11.5-28.5T620-948q17 0 28.5 11.5T660-908v40q0 17-11.5 28.5T620-828Zm127 53q-11-11-11-28t11-28l29-29q11-11 28-11t28 11q11 11 11 28t-11 28l-29 29q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialBombFilled.displayName = 'OnesyIconMaterialBombFilled';

export default IconMaterialBombFilled;
