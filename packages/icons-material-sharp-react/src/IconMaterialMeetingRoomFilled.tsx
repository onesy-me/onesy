import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeetingRoomFilled = (props: IIcon) => {

  return (
    <Icon
      name='MeetingRoomFilled'

      short_name='MeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm320-320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440Z"/>
    </Icon>
  );
};

IconMaterialMeetingRoomFilled.displayName = 'OnesyIconMaterialMeetingRoomFilled';

export default IconMaterialMeetingRoomFilled;
