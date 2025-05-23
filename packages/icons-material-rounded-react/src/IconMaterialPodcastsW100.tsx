import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodcastsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodcastsW100'

      short_name='Podcasts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-310q-8-5-11-11t-3-13q0-11 8.5-19.5T480-508q11 0 19.5 8.5T508-480q0 7-3 13t-11 11v310q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm-215-91q-5 5-11 4t-11-6q-45-48-71-109t-26-132q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 70-26 131.5T731-239q-5 5-11 6t-11-4q-5-5-3.5-11.5T712-260q41-43 64.5-99T800-480q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 65 23 121t65 99q5 5 6.5 11.5T251-237Zm113-113q-5 5-10.5 4.5T343-351q-24-26-37.5-58.5T292-480q0-78 55-133t133-55q78 0 133 55t55 133q0 37-13.5 70T617-351q-5 5-10.5 5.5T596-350q-5-5-4.5-10t4.5-10q20-22 32-50t12-60q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 32 12 60t32 50q4 5 4.5 10t-4.5 10Z"/>
    </Icon>
  );
});

IconMaterialPodcastsW100.displayName = 'OnesyIconMaterialPodcastsW100';

export default IconMaterialPodcastsW100;
