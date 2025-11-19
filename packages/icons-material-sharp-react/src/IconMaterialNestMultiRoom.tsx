import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoom = (props: IIcon) => {

  return (
    <Icon
      name='NestMultiRoom'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v480H160Zm80-80h280v-120H240v120Zm360 0h120v-120H600v120ZM240-400h120v-119H240v119Zm200 0h280v-119H440v119ZM292-599h376L480-740 292-599Z"/>
    </Icon>
  );
};

IconMaterialNestMultiRoom.displayName = 'OnesyIconMaterialNestMultiRoom';

export default IconMaterialNestMultiRoom;
