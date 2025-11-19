import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouth = (props: IIcon) => {

  return (
    <Icon
      name='South'

      short_name='South'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/>
    </Icon>
  );
};

IconMaterialSouth.displayName = 'OnesyIconMaterialSouth';

export default IconMaterialSouth;
