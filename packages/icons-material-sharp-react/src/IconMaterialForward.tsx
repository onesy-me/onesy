import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward = (props: IIcon) => {

  return (
    <Icon
      name='Forward'

      short_name='Forward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z"/>
    </Icon>
  );
};

IconMaterialForward.displayName = 'OnesyIconMaterialForward';

export default IconMaterialForward;
