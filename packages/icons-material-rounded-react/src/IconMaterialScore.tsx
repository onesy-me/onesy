import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Score'

      short_name='Score'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-180 240-240v-220H200v460l132-132q12-12 28-12t28 12l132 132Zm-10-180q-13 0-21.5-8.5T480-510v-180q0-13 8.5-21.5T510-720q13 0 21.5 8.5T540-690v180q0 13-8.5 21.5T510-480Zm98-120 51 76q9 14 1 29t-25 15q-7 0-13-3.5t-10-9.5l-72-107 72-107q4-6 10-9.5t13-3.5q17 0 25.5 15t-1.5 29l-51 76Zm-268 60h70q13 0 21.5 8.5T440-510q0 13-8.5 21.5T410-480H310q-13 0-21.5-8.5T280-510v-90q0-13 8.5-21.5T310-630h70v-30h-70q-13 0-21.5-8.5T280-690q0-13 8.5-21.5T310-720h100q13 0 21.5 8.5T440-690v90q0 13-8.5 21.5T410-570h-70v30Zm20 180L200-200h560v-240L548-228q-12 12-28 12t-28-12L360-360ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialScore.displayName = 'OnesyIconMaterialScore';

export default IconMaterialScore;
