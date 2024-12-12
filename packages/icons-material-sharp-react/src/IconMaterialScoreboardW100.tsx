import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardW100'

      short_name='Scoreboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-376v-208h148v208H574Zm28-28h92v-152h-92v152Zm-364 28v-118h120v-62H238v-28h148v118H266v62h120v28H238Zm228-151v-28h28v28h-28Zm0 128v-28h28v28h-28ZM130-223v-508h176v-80h28v80h292v-80h28v80h176v508H130Zm28-28h308v-48h28v48h308v-452H494v48h-28v-48H158v452Zm0 0v-452 452Z"/>
    </Icon>
  );
});

IconMaterialScoreboardW100.displayName = 'OnesyIconMaterialScoreboardW100';

export default IconMaterialScoreboardW100;
