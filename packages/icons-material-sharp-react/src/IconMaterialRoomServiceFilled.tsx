import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomServiceFilled = (props: IIcon) => {

  return (
    <Icon
      name='RoomServiceFilled'

      short_name='RoomService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-90h160v90q124 26 202 124t78 226v40H120Z"/>
    </Icon>
  );
};

IconMaterialRoomServiceFilled.displayName = 'OnesyIconMaterialRoomServiceFilled';

export default IconMaterialRoomServiceFilled;
