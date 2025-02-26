import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodcastsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodcastsW100Filled'

      short_name='Podcasts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132v-324q-8-5-11-10.77t-3-13.35q0-10.88 8.5-19.38Q469-508 480-508t19.5 8.5q8.5 8.5 8.5 19.26 0 7.5-3 13.37-3 5.87-11 10.87v324h-28Zm-225-95q-51-48-80-112.89-29-64.9-29-139.81 0-72.3 27.39-135.86 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.42 63.56 27.41 110.57 74.41 47.02 47 74.44 110.54Q828-552.09 828-479.85 828-405 799-340t-80 113l-19-20q46-43.81 73-104.05 27-60.24 27-128.95 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-20 20Zm113-113q-29-26-45.5-62.02T292-480q0-78.33 54.76-133.17 54.77-54.83 133-54.83Q558-668 613-613.05q55 54.95 55 133.45 0 41.6-16.5 77.6-16.5 36-45.5 62l-20-20q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-20 20Z"/>
    </Icon>
  );
});

IconMaterialPodcastsW100Filled.displayName = 'OnesyIconMaterialPodcastsW100Filled';

export default IconMaterialPodcastsW100Filled;
