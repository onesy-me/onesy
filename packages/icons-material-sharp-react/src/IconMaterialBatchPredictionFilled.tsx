import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatchPredictionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionFilled'

      short_name='BatchPrediction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-560h560v560H200Zm240-60h80v-60h-80v60Zm0-100h80q0-23 15.5-46t34.5-47q19-25 34.5-51t15.5-56q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 30 15.5 56t34.5 51q19 24 34.5 47t15.5 46ZM240-700v-60h480v60H240Zm40-120v-60h400v60H280Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionFilled.displayName = 'OnesyIconMaterialBatchPredictionFilled';

export default IconMaterialBatchPredictionFilled;
