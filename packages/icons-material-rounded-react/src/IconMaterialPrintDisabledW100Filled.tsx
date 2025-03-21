import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100Filled'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 668-252v20q0 25-17.5 42.5T608-172H352q-25 0-42.5-17.5T292-232v-100h-70q-25 0-42.5-17.5T162-392v-148q0-29 19.5-48.5T230-608h82L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-432-64h256q14 0 23-9t9-23v-48L532-388H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9Zm419-141q-11 6-23 5.5T726-346L492-580q-8-8-4-18t15-10h227q29 0 48.5 19.5T798-540v150q0 17-8 30t-19 19ZM461-636q-12 0-23.5-5T418-654l-51-51q-14-14-6.5-32.5T388-756h220q25 0 42.5 17.5T668-696v32q0 11-8.5 19.5T640-636H461Zm239 156q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100Filled.displayName = 'OnesyIconMaterialPrintDisabledW100Filled';

export default IconMaterialPrintDisabledW100Filled;
