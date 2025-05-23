import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 668-252v20q0 24.75-17.62 42.37Q632.75-172 608-172H352q-24.75 0-42.37-17.63Q292-207.25 292-232v-100h-70q-24.75 0-42.37-17.63Q162-367.25 162-392v-148q0-28.9 19.5-48.45Q201-608 230-608h82L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-432-64h256q14 0 23-9t9-23v-48L532-388H352q-14 0-23 9t-9 23v124q0 14 9 23t23 9Zm446-190q0 23.92-17.04 40.96T740-332q-5.95 0-9.97-4.6Q726-341.2 726-348q0-5.1 3.45-8.55Q732.9-360 738-360q14 0 23-9t9-23v-148q0-17-11.38-28.5t-28.2-11.5H490q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T490-608h240q28.9 0 48.45 19.55Q798-568.9 798-540v150ZM190-540v148q0 14 9 23t23 9h70q2-23 19.04-39.5T352-416h152L340-580H230q-17 0-28.5 11.5T190-540Zm450-68v-88q0-14-9-23t-23-9H342q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T342-756h266q24.75 0 42.38 17.62Q668-720.75 668-696v88h-28Zm60 128q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480Zm30.42-100H770 490h240.42ZM190-580h150-150Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100.displayName = 'OnesyIconMaterialPrintDisabledW100';

export default IconMaterialPrintDisabledW100;
