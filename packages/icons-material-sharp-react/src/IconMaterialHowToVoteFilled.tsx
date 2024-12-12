import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToVoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteFilled'

      short_name='HowToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-262l110-125 57 57-80 90h546l-78-88 57-57 108 123v262H120Zm361-247L228-582l310-310 255 253-312 312Zm1-115 198-198-142-140-198 198 142 140Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteFilled.displayName = 'OnesyIconMaterialHowToVoteFilled';

export default IconMaterialHowToVoteFilled;
