import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRewardedAdsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RewardedAdsW100'

      short_name='RewardedAds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm-14 320v-158q-57-2-98.5-39.5T318-492q-60-7-103-48t-43-100v-8q0-24.75 17.63-42.38Q207.25-708 232-708h82v-20q0-24.75 17.63-42.38Q349.25-788 374-788h212q24.75 0 42.38 17.62Q646-752.75 646-728v20h82q24.75 0 42.38 17.62Q788-672.75 788-648v8q0 59-43 100t-103 48q-8 57-49.5 94.5T494-358v158h100q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H366q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h100ZM314-522v-158h-82q-14 0-23 9t-9 23v8q0 47 33 81t81 37Zm166.24 136q56.76 0 96.26-39.67Q616-465.33 616-522v-206q0-14-9-23t-23-9H376q-14 0-23 9t-9 23v206q0 56.67 39.74 96.33Q423.47-386 480.24-386ZM646-522q48-3 81-37t33-81v-8q0-14-9-23t-23-9h-82v158Zm-166-51Z"/>
    </Icon>
  );
});

IconMaterialRewardedAdsW100.displayName = 'OnesyIconMaterialRewardedAdsW100';

export default IconMaterialRewardedAdsW100;
