import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransgender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transgender'

      short_name='Transgender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm-40 240h-40q-17 0-28.5-11.5T360-160q0-17 11.5-28.5T400-200h40v-84q-78-14-129-75t-51-141q0-33 9.5-65t28.5-59l-26-26-28 28q-11 11-27.5 11.5T188-622q-11-11-11-27.5t11-28.5l28-29-76-76v63q0 17-11.5 28.5T100-680q-17 0-28.5-11.5T60-720v-160q0-17 11.5-28.5T100-920h160q17 0 28.5 11.5T300-880q0 17-11.5 28.5T260-840h-63l76 76 29-29q11-11 27.5-11t28.5 12q11 11 11 27.5T358-736l-28 29 26 26q27-20 59-29.5t65-9.5q33 0 65 9.5t59 29.5l159-159h-63q-17 0-28.5-11.5T660-880q0-17 11.5-28.5T700-920h160q17 0 28.5 11.5T900-880v160q0 17-11.5 28.5T860-680q-17 0-28.5-11.5T820-720v-63L661-625q19 28 29 59.5t10 65.5q0 80-51 141t-129 75v84h40q17 0 28.5 11.5T600-160q0 17-11.5 28.5T560-120h-40v40q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80v-40Z"/>
    </Icon>
  );
});

IconMaterialTransgender.displayName = 'OnesyIconMaterialTransgender';

export default IconMaterialTransgender;
