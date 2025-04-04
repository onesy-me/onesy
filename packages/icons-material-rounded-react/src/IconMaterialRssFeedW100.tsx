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
      <path d="M212-172q-16.5 0-28.25-11.75T172-212q0-16.5 11.75-28.25T212-252q16.5 0 28.25 11.75T252-212q0 16.5-11.75 28.25T212-172Zm516.18 0q-9.18 0-14.71-7.72-5.52-7.72-6.47-18.28-5-103-46-193.5T551-551q-69-69-159.5-110T198-707q-10.56-.98-18.28-6.73Q172-719.47 172-728q0-9.25 7.5-15.13Q187-749 196-748q113 5 210.5 49.5T579-579q75 75 119.5 172.5T748-196q1 9-4.82 16.5-5.83 7.5-15 7.5ZM512-172q-9 0-14.5-7.5T491-196q-5-60-29-111t-64-91q-40-40-91-64t-111-29q-9-1-16.5-6.5t-7.5-14.32q0-9.18 7.5-14.68T196-531q68 5 127 32t104 72q45 45 72 104t32 127q1 9-4.67 16.5-5.66 7.5-14.33 7.5Z"/>
    </Icon>
  );
});

IconMaterialRssFeedW100.displayName = 'OnesyIconMaterialRssFeedW100';

export default IconMaterialRssFeedW100;
