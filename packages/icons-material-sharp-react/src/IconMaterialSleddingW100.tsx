import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleddingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleddingW100'

      short_name='Sledding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-56q-17 0-27-2t-20-5L58-278l9-26 159 51 28-87-158-51 9-26 81 27v-174l204-85q5-2 10-3t11-1q32 0 46.5 20.5T461-577l-51 151 152-24 110 217 72 24-9 26-132-43-29 87 148 48q10 3 18.5 5t22.5 2q48 0 79.5-31.5T874-195q0-42-18-68.5T806-305l10-26q38 17 62 52.5t24 83.5q0 59-40 99t-99 40Zm-216-91 29-88-296-95-28 87 295 96Zm88-98-77-152-210 59 287 93ZM307-351l-8-74 58-180-143 60v164l93 30Zm171-365q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSleddingW100.displayName = 'OnesyIconMaterialSleddingW100';

export default IconMaterialSleddingW100;
