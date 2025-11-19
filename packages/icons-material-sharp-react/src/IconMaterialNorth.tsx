import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorth = (props: IIcon) => {

  return (
    <Icon
      name='North'

      short_name='North'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z"/>
    </Icon>
  );
};

IconMaterialNorth.displayName = 'OnesyIconMaterialNorth';

export default IconMaterialNorth;
