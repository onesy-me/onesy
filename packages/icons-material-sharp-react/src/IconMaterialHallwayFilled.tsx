import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHallwayFilled = (props: IIcon) => {

  return (
    <Icon
      name='HallwayFilled'

      short_name='Hallway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-720h200l160-160 160 160h200v720H120Zm120-160h480L570-440 450-280l-90-120-120 160Zm164-560h152l-76-76-76 76Z"/>
    </Icon>
  );
};

IconMaterialHallwayFilled.displayName = 'OnesyIconMaterialHallwayFilled';

export default IconMaterialHallwayFilled;
