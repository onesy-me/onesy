import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayW100Filled'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-172H192q-24.75 0-42.37-17.63Q132-207.25 132-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l86 65q8 6 7.5 15.5T521-654q-27 21-45.5 50.5T450-539q-7 35-2 69t22 64q5 9 1.79 18.58-3.22 9.59-11.79 13.42-45 19-72 38.5T346-290q-10 17-15 35.19-5 18.18-5 36.81v16q0 12.75-8.62 21.37Q308.75-172 296-172Zm344.1-138q50.9 0 98.4 13 47.5 13 89.5 38 12 8 19 18.53 7 10.52 7 22.47v18q0 11.79-8.11 19.89Q837.79-172 826-172H454q-11 0-19.5-8.5T426-200v-18q0-11.95 7-22.47Q440-251 452-259q42-25 89.6-38 47.6-13 98.5-13Zm.02-97q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayW100Filled.displayName = 'OnesyIconMaterialLocationAwayW100Filled';

export default IconMaterialLocationAwayW100Filled;
