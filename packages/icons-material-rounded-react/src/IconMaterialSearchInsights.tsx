import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchInsights = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchInsights'

      short_name='SearchInsights'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-120q-17 0-28.5-11.5T360-480v-200q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v200q0 17-11.5 28.5T400-440Zm-140 0q-17 0-28.5-11.5T220-480v-120q0-17 11.5-28.5T260-640q17 0 28.5 11.5T300-600v120q0 17-11.5 28.5T260-440Zm280 0q-17 0-28.5-11.5T500-480v-80q0-17 11.5-28.5T540-600q17 0 28.5 11.5T580-560v80q0 17-11.5 28.5T540-440ZM400-240q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 106T653-363l199 199q11 11 11 28t-11 28q-11 11-28 11t-28-11L597-307q-41 32-91 49.5T400-240Z"/>
    </Icon>
  );
});

IconMaterialSearchInsights.displayName = 'OnesyIconMaterialSearchInsights';

export default IconMaterialSearchInsights;
