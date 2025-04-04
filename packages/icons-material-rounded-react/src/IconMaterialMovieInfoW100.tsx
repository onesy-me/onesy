import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieInfoW100'

      short_name='MovieInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-146q-26 0-43-17t-17-43v-548q0-26 17-43t43-17h616q26 0 43 17t17 43v548q0 26-17 43t-43 17H172Zm308.04-190q5.96 0 9.96-4.02 4-4.03 4-9.98v-166q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v166q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480-600q8.5 0 14.25-5.75T500-620q0-8.5-5.75-14.25T480-640q-8.5 0-14.25 5.75T460-620q0 8.5 5.75 14.25T480-600ZM300-174h360v-612H300v612Zm0-612h360-360ZM172-174h100v-132H140v100q0 12 10 22t22 10Zm516 0h100q12 0 22-10t10-22v-100H688v132ZM140-334h132v-132H140v132Zm548 0h132v-132H688v132ZM140-494h132v-132H140v132Zm548 0h132v-132H688v132ZM140-654h132v-132H172q-12 0-22 10t-10 22v100Zm548 0h132v-100q0-12-10-22t-22-10H688v132Z"/>
    </Icon>
  );
});

IconMaterialMovieInfoW100.displayName = 'OnesyIconMaterialMovieInfoW100';

export default IconMaterialMovieInfoW100;
