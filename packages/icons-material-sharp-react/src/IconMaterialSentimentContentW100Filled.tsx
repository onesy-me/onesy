import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContentW100Filled'

      short_name='SentimentContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-356h208v-28H376v28Zm104.17 224q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM345-604q-25 0-45.5 12.5T263-560l24 16q12-13 26.31-22.5Q327.62-576 345-576q17.38 0 31.69 9Q391-558 403-545l24-16q-16-19-36.86-31T345-604Zm270 0q-25 0-45.5 12.5T533-560l24 16q12-13 26.31-22.5Q597.62-576 615-576q17 0 31.5 9.5T673-544l24-16q-16-19-36.86-31.5T615-604Z"/>
    </Icon>
  );
});

IconMaterialSentimentContentW100Filled.displayName = 'OnesyIconMaterialSentimentContentW100Filled';

export default IconMaterialSentimentContentW100Filled;
