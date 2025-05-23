import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBidLandscapeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabled'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-120H200q-33 0-56.5-23.5T120-200v-528l-76-76q-12-12-12-28.5T44-861q12-12 28.5-12t28.5 12l760 760q12 12 12 28t-12 28q-12 12-28.5 12T804-45l-76-75ZM360-442 200-282v82h448L543-305q-12 8-26 7t-25-12L360-442ZM200-648v252l126-126-126-126Zm640-112v440q0 20-12.5 30T800-280q-15 0-27.5-10.5T760-321v-229l-82 92q-11 13-28.5 13.5T620-456q-11-11-12-27t10-28l142-159v-90H320q-20 0-30-12.5T280-800q0-15 10-27.5t30-12.5h440q33 0 56.5 23.5T840-760ZM435-413ZM326-522Zm34 80Zm178-96Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabled.displayName = 'OnesyIconMaterialBidLandscapeDisabled';

export default IconMaterialBidLandscapeDisabled;
