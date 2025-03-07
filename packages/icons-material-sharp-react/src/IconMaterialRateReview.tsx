import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRateReview = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReview'

      short_name='RateReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h122l241-241-119-125-244 244v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRateReview.displayName = 'OnesyIconMaterialRateReview';

export default IconMaterialRateReview;
