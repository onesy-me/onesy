import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumW100'

      short_name='Podium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M474-702q0 23-15.5 38.5T420-648q-12 0-22.5-5T379-667q-30 8-52 29t-30 50h487l-33 202H600v-28h127l24-146H209l24 146h127v28H209l-33-202h93q8-38 34-66t64-38q-1-2-1-5v-5q0-23 15.5-38.5T420-756q23 0 38.5 15.5T474-702Zm-82 502h176l23-240H369l23 240Zm-25 28-29-296h284l-29 296H367Z"/>
    </Icon>
  );
});

IconMaterialPodiumW100.displayName = 'OnesyIconMaterialPodiumW100';

export default IconMaterialPodiumW100;
