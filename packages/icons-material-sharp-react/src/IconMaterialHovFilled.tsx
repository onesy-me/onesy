import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHovFilled = (props: IIcon) => {

  return (
    <Icon
      name='HovFilled'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 240-480l240-400 240 400L480-80Z"/>
    </Icon>
  );
};

IconMaterialHovFilled.displayName = 'OnesyIconMaterialHovFilled';

export default IconMaterialHovFilled;
