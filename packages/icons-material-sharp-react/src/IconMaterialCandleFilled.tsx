import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandleFilled'

      short_name='Candle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-640q-48 0-80-33.5T370-755q2-52 36.5-91.5T480-920q39 34 73.5 73.5T590-755q2 48-30 81.5T480-640Zm330 360q13 0 21.5-8.5T840-310q0-13-8.5-21.5T810-340q-13 0-21.5 8.5T780-310q0 13 8.5 21.5T810-280ZM720-80H240q-50 0-85-35t-35-85v-80h240v-320h240v320h104q-2-8-3-15t-1-15q0-46 32-78t78-32q46 0 78 32t32 78q0 38-22.5 67T840-204v4q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialCandleFilled.displayName = 'OnesyIconMaterialCandleFilled';

export default IconMaterialCandleFilled;
