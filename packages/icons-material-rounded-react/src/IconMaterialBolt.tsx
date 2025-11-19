import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBolt = (props: IIcon) => {

  return (
    <Icon
      name='Bolt'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m422-232 207-248H469l29-227-185 267h139l-30 208Zm-62-128H236q-24 0-35.5-21.5T203-423l299-430q10-14 26-19.5t33 .5q17 6 25 21t6 32l-32 259h155q26 0 36.5 23t-6.5 43L416-100q-11 13-27 17t-31-3q-15-7-23.5-21.5T328-139l32-221Zm111-110Z"/>
    </Icon>
  );
};

IconMaterialBolt.displayName = 'OnesyIconMaterialBolt';

export default IconMaterialBolt;
