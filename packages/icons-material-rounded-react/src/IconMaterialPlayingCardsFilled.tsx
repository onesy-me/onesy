import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayingCardsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayingCardsFilled'

      short_name='PlayingCards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m615-395 31-112q4-12-.5-24T630-551l-95-65q-8-6-17.5-2.5T505-605l-31 112q-4 12 .5 24t15.5 20l95 65q8 6 17.5 2.5T615-395ZM160-207l-33-16q-31-13-42-44.5t3-62.5l72-156v279Zm160 87q-33 0-56.5-24T240-201v-239l107 294q3 7 5 13.5t7 12.5h-39Zm206-5q-31 11-62-3t-42-45L245-662q-11-31 3-61.5t45-41.5l301-110q31-11 61.5 3t41.5 45l178 489q11 31-3 61.5T827-235L526-125Z"/>
    </Icon>
  );
});

IconMaterialPlayingCardsFilled.displayName = 'OnesyIconMaterialPlayingCardsFilled';

export default IconMaterialPlayingCardsFilled;
