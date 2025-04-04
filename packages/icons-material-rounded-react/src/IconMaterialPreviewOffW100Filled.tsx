import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreviewOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewOffW100Filled'

      short_name='PreviewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M485-332q-61 0-111-30t-77-78q20-35 51.5-61t72.5-38l23 23q-35 8-64.5 27.5T327-440q29 38 70.5 59t87.5 21q24 0 47-6.5t44-17.5l21 21q-25 15-53 23t-59 8Zm172-84-19-19q1-2 2-2.5t2-2.5q-14-18-30-31.5T577-496l-47-47q47 10 84 37t58 66q-4 6-7 12t-8 12ZM232-172q-25 0-42.5-17.5T172-232v-496q0-5 .5-9t2.5-8l-17-17q-4-4-4.5-9.5T158-782q5-5 10-5t10 5l604 604q4 4 4.5 9.5T782-158q-5 5-10 5t-10-5l-16-16q-5 1-9 1.5t-9 .5H232Zm0-28h488L200-720v488q0 14 9 23t23 9Zm556-85-28-28v-319H441L285-788h443q25 0 42.5 17.5T788-728v443Z"/>
    </Icon>
  );
});

IconMaterialPreviewOffW100Filled.displayName = 'OnesyIconMaterialPreviewOffW100Filled';

export default IconMaterialPreviewOffW100Filled;
