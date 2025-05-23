import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlifeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeW100'

      short_name='Nightlife'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M194-186v-28h80v-230L98-708h380L302-444v230h80v28H194Zm10-414h168l54-80H150l54 80Zm404.12 414q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.42-66.62Q568.83-374 608-374q17.39 0 33.19 6.5Q657-361 674-346v-362h148v56H702v372q0 39.17-27.38 66.58Q647.24-186 608.12-186Z"/>
    </Icon>
  );
});

IconMaterialNightlifeW100.displayName = 'OnesyIconMaterialNightlifeW100';

export default IconMaterialNightlifeW100;
