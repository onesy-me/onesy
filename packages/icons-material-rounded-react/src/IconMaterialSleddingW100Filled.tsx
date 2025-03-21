import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleddingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleddingW100Filled'

      short_name='Sledding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-56q-17 0-27-2t-20-5L71-274q-5-2-7.5-7t-.5-10q2-5 7-8t10-1l146 47 28-87-145-47q-5-2-7.5-7t-.5-10q2-5 7-8t10-1l68 23v-154q0-9 5-16.5t13-11.5l186-77q5-2 10-3t11-1q32 0 46.5 20.5T461-577l-51 151 112-18q18-3 33.5 4.5T581-413l91 180 59 20q5 2 7.5 7t.5 10q-2 5-7 8t-10 1l-119-39-29 87 148 48q10 3 18.5 5t22.5 2q48 0 79.5-31.5T874-195q0-38-15-63t-41-41q-5-3-7-8.5t0-10.5q2-5 7-7t10 0q33 18 53.5 52t20.5 78q0 59-40 99t-99 40Zm-216-91 29-88-296-95-28 87 295 96Zm88-98-77-152-210 59 287 93ZM307-351q-11-14-13.5-32.5T299-425l58-180-143 60v164l93 30Zm171-365q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSleddingW100Filled.displayName = 'OnesyIconMaterialSleddingW100Filled';

export default IconMaterialSleddingW100Filled;
