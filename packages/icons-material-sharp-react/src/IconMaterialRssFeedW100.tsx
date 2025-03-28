import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRssFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RssFeedW100'

      short_name='RssFeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172q-16.5 0-28.25-11.75T172-212q0-16.5 11.75-28.25T212-252q16.5 0 28.25 11.75T252-212q0 16.5-11.75 28.25T212-172Zm496 0q0-112-42.11-209.15-42.12-97.14-114.86-169.88-72.74-72.74-169.89-114.86Q283.99-708 172-708v-40q120 0 224.5 45.5T579-579q78 78 123.5 182.3Q748-292.41 748-172h-40Zm-216 0q0-67-25-124.5T398-398q-44-44-101.5-69T172-492v-40q75 0 140.34 28.08T427-427q48.84 49.2 76.92 114.38Q532-247.43 532-172h-40Z"/>
    </Icon>
  );
});

IconMaterialRssFeedW100.displayName = 'OnesyIconMaterialRssFeedW100';

export default IconMaterialRssFeedW100;
