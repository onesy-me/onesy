import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardFilled'

      short_name='Scoreboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-360h100q17 0 28.5-11.5T760-400v-160q0-17-11.5-28.5T720-600H620q-17 0-28.5 11.5T580-560v160q0 17 11.5 28.5T620-360Zm20-60h60v-120h-60v120Zm-400 60h110q13 0 21.5-8.5T380-390q0-13-8.5-21.5T350-420h-90v-40h80q17 0 28.5-11.5T380-500v-60q0-17-11.5-28.5T340-600H230q-13 0-21.5 8.5T200-570q0 13 8.5 21.5T230-540h90v40h-80q-17 0-28.5 11.5T200-460v60q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h120v-40q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v40h240v-40q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v40h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-360q13 0 21.5-8.5T510-550q0-13-8.5-21.5T480-580q-13 0-21.5 8.5T450-550q0 13 8.5 21.5T480-520Zm0 140q13 0 21.5-8.5T510-410q0-13-8.5-21.5T480-440q-13 0-21.5 8.5T450-410q0 13 8.5 21.5T480-380Zm0-280q13 0 21.5-8.5T510-690q0-13-8.5-21.5T480-720q-13 0-21.5 8.5T450-690q0 13 8.5 21.5T480-660Zm0 420q13 0 21.5-8.5T510-270q0-13-8.5-21.5T480-300q-13 0-21.5 8.5T450-270q0 13 8.5 21.5T480-240Z"/>
    </Icon>
  );
});

IconMaterialScoreboardFilled.displayName = 'OnesyIconMaterialScoreboardFilled';

export default IconMaterialScoreboardFilled;
