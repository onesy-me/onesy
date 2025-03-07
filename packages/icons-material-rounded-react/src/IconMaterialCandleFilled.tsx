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
      <path d="M480-640q-48 0-80-33.5T370-755q2-44 27-78.5t56-62.5q6-5 12.5-7.5T480-906q8 0 14.5 2.5T507-896q31 28 56 62.5t27 78.5q2 48-30 81.5T480-640Zm330 360q13 0 21.5-8.5T840-310q0-13-8.5-21.5T810-340q-13 0-21.5 8.5T780-310q0 13 8.5 21.5T810-280ZM720-80H240q-50 0-85-35t-35-85v-40q0-17 11.5-28.5T160-280h200v-240q0-33 23.5-56.5T440-600h80q33 0 56.5 23.5T600-520v240h104q-2-8-3-15t-1-15q0-46 32-78t78-32q46 0 78 32t32 78q0 38-22.5 67T840-204v4q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialCandleFilled.displayName = 'OnesyIconMaterialCandleFilled';

export default IconMaterialCandleFilled;
